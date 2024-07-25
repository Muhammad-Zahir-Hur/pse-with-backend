let backToTop = document.querySelector("#back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};
function scrollFunction() {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		backToTop.classList.remove("hidden");
	} else {
		backToTop.classList.add("hidden");
	}
}
