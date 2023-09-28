gsap.registerPlugin(ScrollTrigger);
// let load = gsap.timeline({
// 	defaults: {
// 		duration: 0.3,
// 	},
// });
// load
// 	.from(".navbar-brand", {
// 		x: -2000,
// 	})
// 	.from(".nav-link", {
// 		y: -200,
// 		stagger: 0.5,
// 	})
// 	.from(".content h1", {
// 		y: 250,
// 		height: 0,
// 		skewY: 20,
// 		ease: "power2.out",
// 	})
// 	.from(".content p", {
// 		opacity: 0,
// 		y: -50,
// 	})
// 	.to(".content a", {
// 		x: 0,
// 	})
// 	.from(".gallery .box-1", {
// 		x: 1000,
// 		duration: 0.5,
// 	})
// 	.from(".gallery .box-2", {
// 		y: -1000,
// 		duration: 0.5,
// 	})
// 	.from(".gallery .box-3", {
// 		y: 1000,
// 		duration: 0.5,
// 	})
// 	.from(".gallery .bg", {
// 		height: "0%",
// 	})
// 	.from(
// 		".gallery div img",
// 		{
// 			opacity: 0,
// 		},
// 		"<"
// 	)
// 	.from(".gallery div img", {
// 		y: 500,
// 	})
// 	.to(".gallery div img", {
// 		scale: 1,
// 		margin: 0,
// 	});

// const tra = document.querySelector("img.bg");
// console.log(tra);
// const content = document.querySelector(".animate .content");
// const h2 = document.querySelector(".animate h2");
// const collection = document.querySelector(".collection .row");
// console.log(content);
// h2.onclick = () => {};
// let grand = gsap.timeline();
// grand.from(".panel .stagger", {
// 	opacity: 0,
// 	ease: "ease",
// 	delay: 2,
// 	duration: 0.5,
// 	stagger: 6,
// });

// ScrollTrigger.create({
// 	animation: grand,
// 	trigger: ".panel",
// 	pin: true,
// 	scrub: 1,
// onScrubComplete: () => {
// 	// const hi = tra.cloneNode();
// 	// content.removeChild(tra);
// 	collection.appendChild(tra);
// },
// onEnter: () => video.play(),
// });
// gsap.to(video, {
// 	scrollTrigger: {
// 		start: "top top",
// 		end: "bottom bottom",
// 		trigger: ".animate",
// 		id: "video",
// 		scrub: 0.5,
// 		markers: true,
// 	},
// 	delay: 2.5,
// 	opacity: 0,
// 	duration: 1,
// });
