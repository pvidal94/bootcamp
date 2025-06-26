// script.js
$(document).ready(function() {
  const images = $(".thumb").toArray();
  let currentIndex = 0;

  function showModal(index) {
    const imgSrc = $(images[index]).attr("src");
    $("#modal-img").attr("src", imgSrc);
    $("#modal").fadeIn();
    currentIndex = index;
  }

  // Al hacer clic en una miniatura, abrir modal
  $(".thumb").click(function() {
    const idx = parseInt($(this).data("index"));
    showModal(idx);
  });

  // Cerrar al hacer clic en la X
  $(".close").click(function() {
    $("#modal").fadeOut();
  });

  // Cerrar al hacer clic fuera del contenido
  $("#modal").click(function() {
    $("#modal").fadeOut();
  });

  // Evitar que clicks dentro de la imagen o botones cierren el modal
  $("#modal-img, .nav-buttons").click(function(e) {
    e.stopPropagation();
  });

  // Siguiente
  $("#next").click(function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showModal(currentIndex);
  });

  // Anterior (antes no existía)
  $("#prev").click(function(e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showModal(currentIndex);
  });
});
