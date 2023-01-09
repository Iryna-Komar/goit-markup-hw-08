(() => {
  const refs = {
    openMenulBtn: document.querySelector(".menu-open"),
    closeMenulBtn: document.querySelector(".menu-close-btn"),
    menu: document.querySelector(".mobile-menu"),
  };

  refs.openMenulBtn.addEventListener("click", toggleModal);
  refs.closeMenulBtn.addEventListener("click", toggleModal);

  function toggleMenu() {
    refs.menu.classList.toggle(".menu-is-hidden");
  }
})();