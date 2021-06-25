//   Init Animate On Scroll
AOS.init();

let nav_btn_container = document.querySelector(".menu-btn-container");

nav_btn_container.addEventListener("click", toggleMenu)

function toggleMenu() {
	nav_btn_container.classList.toggle("active");
	document.querySelector(".nav-container").classList.toggle("active");
}