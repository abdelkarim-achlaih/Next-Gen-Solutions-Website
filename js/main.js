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
// gsap.to(".sections-progress", {
// 	scrollTrigger: {
// 		trigger: ".hero",
// 		start: `150px top`,
// 		end: "bottom bottom",
// 		toogleActions: "restart reset restart reset",
// 		markers: true,
// 	},
// 	x: 200,
// });
// gsap.to(".sections-progress", {
// 	scrollTrigger: {
// 		trigger: ".partners",
// 		start: "100px top",
// 		end: "bottom bottom",
// 		toogleActions: "restart none none reset",
// 	},
// 	display: "none",
// });
const navsSections = document.querySelectorAll("[data-nav-section]");

const navTogglers = document.querySelectorAll(".sections-progress li");
const stepsTogglers = document.querySelectorAll(".steps .steps-nav li");
toogleClass(navTogglers);
toogleClass(stepsTogglers);
function toogleClass(array) {
	array.forEach((button) => {
		button.onclick = (_) => {
			array.forEach((button) => {
				button.classList.remove("active");
			});
			button.classList.add("active");
		};
	});
}

const panels = document.querySelectorAll(".missions .panel");
panels.forEach((panel) => {
	gsap.from(panel.querySelectorAll(".stagger"), {
		scrollTrigger: {
			trigger: panel,
			pin: panel,
			scrub: 0.3,
		},
		opacity: 0,
		duration: 0.3,
		stagger: 0.3,
	});
});
gsap.from(".years .container-fluid div, .years .stagger", {
	scrollTrigger: {
		trigger: ".years",
	},
	opacity: 0,
	duration: 0.8,
	stagger: 0.3,
});
// gsap.from(".studies .holder", {
// 	scrollTrigger: {
// 		start: "100px top",
// 		end: "bottom bottom",
// 		trigger: ".studies",
// 		pin: ".studies .holder",
// 		markers: true,
// 	},
// 	opacity: 0,
// 	duration: 1,
// });
