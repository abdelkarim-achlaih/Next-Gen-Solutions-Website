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
		height: 0,
		transformOrigin: "0 100%",
		rotation: 5,
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
	})
	.from(".gallery .box-2", {
		y: -1000,
	})
	.from(".gallery .box-3", {
		y: 1000,
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
	});
