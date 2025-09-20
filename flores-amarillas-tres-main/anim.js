// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Amor Mio", time: 1 },
  { text: "Eres El Ser, Que amo sin fin", time: 4 },
  { text: "Pasion e Idilio Amor mio", time: 7 },
  { text: "razon eterna de vivir", time: 14 },
  { text: "Amor Mio", time: 21 },
  { text: "Mi vida es toda un vacio sin ti", time: 25 },
  { text: "Quiero que me sientas cerca", time: 28 },
  { text: "y asi, tus ojos en mi", time: 31 },
  { text: " Amor Mio", time: 33 },
  { text: " Amor Mio", time: 41 },
  { text: "...", time: 44 },
  { text: "...", time: 47 },
  { text: "...", time: 50 },
  { text: "...", time: 53 },
  { text: "...", time: 56 },
  { text: " Amor Mio", time: 59 },
  { text: "Mi vida es toda un vacio sin ti", time: 65 },
  { text: "Quiero que me sientas cerca", time: 70 },
  { text: "y asi, tus ojos en mi", time: 72 },
  { text: "Amor Mio", time: 77 },
  { text: "Amor Mio", time: 81 },
  { text: "Amor Mio", time: 83 },
   { text: "Amor Mio", time: 84 },
   { text: "Amor Mio", time: 86 },
];
;

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);