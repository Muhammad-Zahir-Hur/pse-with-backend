// animate on scroll
let observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
});

const hiddenElements = document.querySelectorAll(".animate-on-scroll");
hiddenElements.forEach((el) => observer.observe(el));



// .show {
// 	opacity: 1;
// 	filter: blur(0px);
// 	transform: translateX(0);
// }