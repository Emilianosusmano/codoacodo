/* Creo el componente de bootstrap menu de navegacion lateral */
var offcanvas_el = document.getElementById("offcanvasRight");
var offcanvas = new bootstrap.Offcanvas(offcanvas_el, { backdrop: true });

/* Muevo la pantalla al link seleccionado */
function scrollItem(targetId) {
  var element = document.getElementById(targetId);
  toggleOffcanvas();
  element.scrollIntoView({
    alignToTop: true,
    block: "start",
    behavior: "smooth",
  });
}

/* Muestro u oculto el menu de navegacion lateral */
function toggleOffcanvas() {
  offcanvas.toggle();
}
