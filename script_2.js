// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})


document.getElementById("open").addEventListener("click", function () {
  // Verifica si el video ya existe
  let existingVideoContainer = document.querySelector(".video-container");
  if (!existingVideoContainer) {
    // Crear el contenedor del video
    let videoContainer = document.createElement("div");
    videoContainer.classList.add("video-container");

    // Crear el elemento de video
    let video = document.createElement("video");
    video.src = "./assets/mi_amor.mp4"; // Ruta del video
    video.controls = true;
    video.autoplay = true;
    video.style.width = "100%";
    video.style.height = "95%";

    // Agregar el video al contenedor
    videoContainer.appendChild(video);

    // Insertar el video ANTES de .container-letter
    let mainContainer = document.querySelector("main");
    let letterContainer = document.querySelector(".container-letter");
    mainContainer.insertBefore(videoContainer, letterContainer);
  }

  // Ocultar botón de abrir
  document.getElementById("open").style.display = "none";
});

// Ocultar video cuando se presiona "Cerrar"
document.getElementById("close").addEventListener("click", function () {
  let videoContainer = document.querySelector(".video-container");
  if (videoContainer) {
    videoContainer.remove(); // Eliminar el contenedor del video
  }
  document.getElementById("open").style.display = "block"; // Mostrar botón de abrir otra vez
});