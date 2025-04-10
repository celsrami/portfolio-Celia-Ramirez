"use strict";


const sections = document.querySelectorAll('.js-section');
const buttons = document.querySelectorAll('.js-button');
console.log(buttons);

// Actualizar el estado activo en función del scroll
window.addEventListener('scroll', () => {
  let index = sections.length - 1;
  sections.forEach((section, i) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2) {
      index = i;
    }
  });

  buttons.forEach((button, i) => {
    button.classList.toggle('main__nav__active', i === index);
  });
});


// Hacer clic para desplazarse a una sección
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });



  // Usamos IntersectionObserver para detectar cuándo una sección entra o sale de la vista
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando entra en vista, aplica la animación de entrada
        entry.target.classList.remove('sentions-out');
        entry.target.classList.add('sentions-in');
      } else {
        // Cuando sale de la vista, aplica la animación de salida
        entry.target.classList.remove('sentions-in');
        entry.target.classList.add('sentions-out');
      }
    });
  }, { threshold: 0.5 });  // Ajusta el umbral según lo que necesites
  
  // Observamos todas las secciones
  sections.forEach(section => {
    observer.observe(section);
  });



 // ABRIR Y CERRAR HEADER  *************************************
 //  **********************************************************

 const headerBtn = document.querySelector('.header__btn');
 const headerNav = document.querySelector('.header__nav');
 const headerLi = document.querySelectorAll('.header__li');
 
 // Función para alternar el menú
 function toggleMenu() {
   headerBtn.classList.toggle('menu-open');
   headerNav.classList.toggle('nav-open');
   headerLi.forEach(li => {
     li.classList.toggle("show");
   });
 }
 
 // Agregar evento de clic al botón para abrir/cerrar el menú
 headerBtn.addEventListener('click', toggleMenu);
 
 // Agregar evento a cada <li> para cerrar el menú al hacer clic
 headerLi.forEach(li => {
   li.addEventListener('click', () => {
     // Cerrar el menú quitando las clases activas
     headerBtn.classList.remove('menu-open');
     headerNav.classList.remove('nav-open');
     headerLi.forEach(li => li.classList.remove("show"));
   });
 });


// **************************************************
// ************************ CARRUSEL *************

let stream = document.querySelector('.gallery__ul');
let items = document.querySelectorAll('.gallery__item');

const prev = document.querySelector('.gallery__prev');
const next = document.querySelector('.gallery__next');

 
  // Función para actualizar la clase "active"
 function updateButton() {
    items.forEach((item, index) => {
      if (index === 2) { // El tercer elemento (posición central)
        item.classList.add('active');
        console.log(item);
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Evento para botón "prev"
  prev.addEventListener('click', function () {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item'); // Actualiza la lista de elementos
    updateButton();
    console.log("click");
  });

  // Evento para botón "next"
  next.addEventListener('click', function () {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item'); // Actualiza la lista de elementos
    updateButton();
  });

  // Actualizar al cargar
  updateButton();

  function updateActiveItem() {
    const items = document.querySelectorAll(".list__item");
    let closestItem = null;
    let minDistance = window.innerHeight; // Tamaño de la ventana como referencia
  
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const screenCenter = window.innerHeight / 2;
      const distance = Math.abs(screenCenter - itemCenter);
  
      if (distance < minDistance) {
        minDistance = distance;
        closestItem = item;
      }
    });
  
    if (closestItem) {
      items.forEach((item) => item.classList.remove("active"));
      closestItem.classList.add("active");
    }
  }
  
  // Llamamos a la función en el scroll
  window.addEventListener("scroll", updateActiveItem);
  window.addEventListener("load", updateActiveItem);
  
  


