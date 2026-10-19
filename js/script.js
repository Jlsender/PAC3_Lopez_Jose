//   ***       06.540 – Realitat virtual – Aula 1 - Universitat Oberta de Catalunya - Curs 2026-27/1           ***  
//   ***                                  PAC3. Tutorial d'A-FRAME 360º                                        ***  
//   ***                                         Jose López Sender                                             ***
//   ***                                             script.js                                                 *** 


// ====================================================
//                   ELEMENTS MULTIMÈDIA
// ====================================================

// Seleccionem els elements HTML que farem servir per controlar tant el panorama com el video 360º.
// Amb document.querySelector() obtenim les referències a partir del seu ID.
// Aquestes referències ens permeten controlar la reproducció del vídeo, alternar entre la visualització
// del panorama estàtic i el vídeo 360º, i actualitzar l'estat dels botons.

// Bibliografia:
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector


// VÍDEO 360º

const video = document.querySelector('#video360');                  // Selecconem l'element de vídeo que conté l'animacio en 360ª

// ESFERES 360º

const skyImatge = document.querySelector('#skyImatge');             // Seleccionem l'esfera que contè la imatge
const skyVideo = document.querySelector('#skyVideo');               // selecconem l'esfera que contè el vídeo

// BOTONS

const btnImatge = document.querySelector('#btnImatge');             // Seleccionem el botó per activar el panorama 360º
const btnVideo = document.querySelector('#btnVideo');               // Seleccionem el botó per activar el vídeo 360º


// ====================================================
//                     IMATGE 360
// ====================================================

// Quan l'usuari prem el botó PANORAMA 360º, aturem la reproducció del vídeoi mostrem la imatge estàtica.
// També s'actualitza l'aparença dels botons per indicar quin està actiu.

// Bibliografia:
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause
// https://aframe.io/docs/1.7.0/components/visible.html
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList


btnImatge.addEventListener('click', () => {                     // Detecten que l'usuari ha premut el botó PANORAMA 360º

    video.pause();                                              // Aturem la reproducció del vídeo

    skyImatge.setAttribute('visible', true);                    // Mostrem la imatge panorama 360º
    skyVideo.setAttribute('visible', false);                    // Ocultem el vídeo panorama 360º

    btnImatge.classList.add('active');                          // Activem l'estil visual del botó PANORAMA 360º
    btnVideo.classList.remove('active');                        // Desactivem l'estil visual del botó VÍDEO 360º

});


// ====================================================
//                     VIDEO 360
// ====================================================

// Quan l'usuari prem el botó VÍDEO 360º, iniciem la reproducció del vídeo i ocultem la imatge panoramica estàtica.
// Fem servir async i await per esperar al navegador que inicii la reproducció abans de fer el canvi i actualitzar l'estat dels botons.
// Amb try...catch controlem els erros que hi pugui haver durant la reproducció.

// Bibliografia:
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch


btnVideo.addEventListener('click', async () => {                    // Detecten que l'usuari ha premut el botó VÍDEO 360º

    try {                                                           // Iniciem la reproducció

        await video.play();                                         // Esperem que el navegador inicii el vídeo 360º                                     

        skyImatge.setAttribute('visible', false);                   // Ocultem la imatge panorama 360º 
        skyVideo.setAttribute('visible', true);                     // Mostrem el vídeo panorama 360º

        btnVideo.classList.add('active');                           // Activem l'estil visual del botó VÍDEO 360º
        btnImatge.classList.remove('active');                       // Desactivem l'estil visual del botó PANORAMA 360º  

    } catch (error) {                                               // Si falla la reproducció

        console.error('Error al reproduir el vídeo:', error);       // Mostrem l'error a la consola
        alert("No s'ha pogut iniciar el vídeo.");                   // Mostrem en pantalla l'error

    }

});