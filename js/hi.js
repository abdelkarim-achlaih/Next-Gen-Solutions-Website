let mobileStepsTogglers = document.querySelectorAll(
	".steps-container-mobile .step-mobile-toogler"
);
mobileStepsTogglers.forEach((toogler) => {
	toogler.onclick = (_) => {
		toogler.classList.toggle("active");
		toogler.nextElementSibling.classList.toggle("show");
	};
});
