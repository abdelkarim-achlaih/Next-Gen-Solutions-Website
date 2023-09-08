let load = gsap.timeline({
	defaults: {
		duration: 1,
	},
});
load
	.from(".navbar-brand", {
		x: -2000,
	})
	.from(".nav-link", {
		y: -200,
		stagger: 0.5,
	})
	.from(".content h1", {
		y: 250,
		height: 0,
		skewY: 20,
		ease: "power2.out",
	})
	.from(".content p", {
		opacity: 0,
		y: -50,
	})
	.to(".content a", {
		x: 0,
	})
	.from(".gallery .box-1", {
		x: 1000,
		duration: 0.5,
	})
	.from(".gallery .box-2", {
		y: -1000,
		duration: 0.5,
	})
	.from(".gallery .box-3", {
		y: 1000,
		duration: 0.5,
	})
	.from(".gallery .bg", {
		height: "0%",
	})
	.from(
		".gallery div img",
		{
			opacity: 0,
		},
		"<"
	)
	.from(".gallery div img", {
		y: 500,
	})
	.to(".gallery div img", {
		scale: 1,
		margin: 0,
	});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".animate img", {
	scrollTrigger: {
		trigger: ".animate video",
		start: "top top",
		pin: true,
	},
	scale: 52,
	ease: "ease",
	duration: 4,
	opacity: 0,
});
