const lenis = new Lenis({
	duration: 0.5,
	easing: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
raf();

const sectionNavs = document.querySelectorAll(".sections-nav li a");
const stepsNavs = document.querySelectorAll(".steps-nav li a");

scrollNavs(sectionNavs);
scrollNavs(stepsNavs);

function scrollNavs(navs) {
	navs.forEach((nav) => {
		nav.addEventListener("click", (e) => {
			options = {
				duration: 5,
			};
			lenis.scrollTo(nav.getAttribute("href"), options);
		});
	});
}
