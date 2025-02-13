const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estás segura mi amor??',
  'Piénsalo bien bb',
  'Amor, piénsalo bien pe xd',
  'Segura? :c ',
  'Mira el otro botón'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
  //video.style.transform = "scale(0.9)"; // Se hace pequeño
})

buttonYes.addEventListener('click', () => {
  window.location.href = "index_2.html";

  
  // ❤️ Evento cuando hace clic en "Sí"

})
const video = document.getElementById("movingVideo");

function moveVideo() {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 150);
  
  video.style.left = `${x}px`;
  video.style.top = `${y}px`;
}

setInterval(moveVideo, 2000); // Cambia la posición cada 2 segundos



function enableAudio() {
  video.muted = false;
  video.volume = 1.0; // Ajusta el volumen si es necesario
  video.play(); // Asegura que siga reproduciéndose
  document.removeEventListener("click", enableAudio); // Remueve el evento después de activarlo
}

// Espera a que el usuario haga clic en la página
document.addEventListener("click", enableAudio);


const soundPrompt = document.getElementById("soundPrompt");

function enableAudio() {
  video.muted = false;
  video.volume = 1.0;
  video.play().then(() => {
    soundPrompt.style.display = "none"; // Oculta el mensaje cuando el sonido está activado
  }).catch(error => {
    console.log("El navegador bloqueó la reproducción automática con sonido.");
  });

  document.removeEventListener("click", enableAudio);
}

document.addEventListener("click", enableAudio);

