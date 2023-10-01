const lenis = new Lenis();

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

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
