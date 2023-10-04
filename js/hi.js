let mobileStepsTogglers = document.querySelectorAll(
	".steps-container-mobile .step-mobile-toogler"
);
mobileStepsTogglers.forEach((toogler) => {
	toogler.onclick = (_) => {
		toogler.classList.toggle("active");
		toogler.nextElementSibling.classList.toggle("show");
		if (toogler.classList.contains("active")) {
			toogler.children[1].innerHTML = `<i class="fa-solid fa-minus display-5"></i>`;
		} else {
			toogler.children[1].innerHTML = `<i class="fa-solid fa-plus display-5"></i>`;
		}
	};
});
