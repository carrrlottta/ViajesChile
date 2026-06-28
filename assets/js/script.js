// Inicialización de componentes Bootstrap JS y pequeñas interacciones del sitio.
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const contactForm = document.querySelector(".contact-form");

  const updateNavbar = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  };

  updateNavbar();
  window.addEventListener("scroll", updateNavbar);

  // Bootstrap JS component 1: Carousel se activa por data attributes en el HTML.

  // Bootstrap JS component 2: Tooltips en las tarjetas de destacados.
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Bootstrap JS component 3: Popover en el botón del formulario.
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popoverTriggerEl) => {
    new bootstrap.Popover(popoverTriggerEl);
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const asunto = document.querySelector("#asunto").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

    if (!nombre || !asunto || !mensaje) {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }

    alert("Mensaje enviado correctamente. ¡Gracias por contactar a Viajes Chile!");
    contactForm.reset();
  });
});
