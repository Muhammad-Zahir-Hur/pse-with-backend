let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector(".menu");
let closeButton = document.querySelector("#close");

menuIcon.addEventListener("click", () => {
	menu.classList.remove("-translate-y-full");
});

closeButton.addEventListener("click", () => {
	menu.classList.add("-translate-y-full");
});
