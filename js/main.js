gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------- Hero Animations

let load = gsap.timeline({
	defaults: {
		duration: 0.3,
	},
});
load
	.from(".hero .navbar-brand", {
		x: -2000,
	})
	.from(".hero .nav-link", {
		y: -200,
		stagger: 0.5,
	})
	.from(".hero .content h1", {
		y: 250,
		height: 0,
		skewY: 20,
		ease: "power2.out",
	})
	.from(".hero .content p", {
		opacity: 0,
		y: -50,
	})
	.to(".hero .content a", {
		x: 0,
	})
	.from(".hero .gallery .box-1", {
		x: 1000,
		duration: 0.5,
	})
	.from(".hero .gallery .box-2", {
		y: -1000,
		duration: 0.5,
	})
	.from(".hero .gallery .box-3", {
		y: 1000,
		duration: 0.5,
	})
	.from(".hero .gallery .bg", {
		height: "0%",
	})
	.from(
		".hero .gallery div img",
		{
			opacity: 0,
		},
		"<"
	)
	.from(".hero .gallery div img", {
		y: 500,
	})
	.to(".hero .gallery div img", {
		scale: 1,
		margin: 0,
	});

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

// ------------------------------------------- Navs Logic

const navsSections = document.querySelectorAll(
	".sections-container > div:not(:first-of-type)"
);
const navsSteps = document.querySelectorAll(".steps-container .step-img");
const navTogglers = document.querySelectorAll(".sections-nav li");
const stepsTogglers = document.querySelectorAll(".steps-nav li");

toogleLisClassOnScroll(navsSections);
toogleLisClassOnScroll(navsSteps);

function toogleLisClassOnScroll(triggers) {
	triggers.forEach((triggerEle) => {
		gsap.from(`.${triggerEle.dataset.navClass} li`, {
			scrollTrigger: {
				trigger: triggerEle,
				onEnter: (_) => {
					toogleLisClass(triggerEle);
				},
				onEnterBack: (_) => {
					toogleLisClass(triggerEle);
				},
			},
		});
	});
}

function toogleLisClass(triggerEle) {
	document
		.querySelectorAll(`.${triggerEle.dataset.navClass} li`)
		.forEach((button) => {
			button.classList.remove("active");
		});
	document
		.querySelector(
			`.${triggerEle.dataset.navClass} li:nth-child(${triggerEle.dataset.navNum})`
		)
		.classList.add("active");
}

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

toggleNavClassForWhiteBgSections(".steps .title-container", ".studies");

function toggleNavClassForWhiteBgSections(...whiteSections) {
	whiteSections.forEach((whiteSection) => {
		gsap.from(".sections-nav nav", {
			scrollTrigger: {
				start: "-200px 200px",
				end: "100% 100%",
				trigger: whiteSection,
				toggleClass: { className: "dark", targets: ".sections-nav nav" },
			},
			duration: 1,
		});
	});
}

gsap.from(".sections-nav nav", {
	scrollTrigger: {
		start: "top top",
		end: "bottom bottom",
		trigger: ".sections-container",
		toggleClass: { className: "show", targets: ".sections-nav nav" },
		toggleActions: "restart reset restart reset",
	},
	duration: 1,
	x: -200,
});
// ------------------------------------------- Panels Animations

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

// ------------------------------------------- Years Animations

gsap.from(".years .container-fluid div, .years .stagger", {
	scrollTrigger: {
		toggleActions: "restart none none none",
		trigger: ".years",
		start: "-600px top",
		end: "bottom center",
	},
	opacity: 0,
	y: 250,
	skewY: 20,
	ease: "power2.out",
	duration: 0.3,
	stagger: 0.3,
});

// ------------------------------------------- Solutions + Impacts Animations

let animatedTitleSections = [".solutions", ".impacts", ".steps"];
animatedTitleSections.forEach((title) => {
	gsap.from(`${title + " .stagger"}`, {
		scrollTrigger: {
			trigger: title,
			start: "-300px top",
			end: "bottom center",
			toggleActions: "restart none none none",
		},
		opacity: 0,
		duration: 0.7,
		stagger: 0.7,
	});
});
gsap.from(".impacts .description", {
	scrollTrigger: {
		trigger: ".impacts",
		start: "-300px top",
		end: "bottom center",
		toggleActions: "restart none none none",
	},
	y: 300,
	opacity: 0,
	duration: 0.7,
	stagger: 0.7,
});

gsap.from(".impacts .impact .number", {
	scrollTrigger: {
		trigger: ".impacts .container",
		start: "-300px top",
		end: "bottom center",
		toggleActions: "restart none none none",
	},
	innerHTML: 0,
	snap: { innerHTML: 1 },
	duration: 2,
});

gsap.from(".impacts .impact-2, .impacts .impact-3, .impacts .impact-4", {
	scrollTrigger: {
		trigger: ".impacts .container",
		start: "-600px top",
		end: "bottom center",
		toggleActions: "restart none none none",
	},
	y: 300,
	opacity: 0,
	duration: 0.3,
	stagger: 0.3,
});

// ------------------------------------------- Steps Animations

// navsSteps.forEach((step) => {
// 	gsap.from(".step-imgs-container", {
// 		scrollTrigger: {
// 			start: "100px top",
// 			end: "bottom bottom",
// 			trigger: ".steps-container",
// 			pin: step,
// 		},
// 	});
// });

// ------------------------------------------- Studies Animations

window.onload = (_) => {
	studiesScroll();
};
window.onresize = (_) => {
	ScrollTrigger.getById("studies").kill(true);
	studiesScroll();
};

function studiesScroll() {
	gsap.from(".studies .holder", {
		scrollTrigger: {
			id: "studies",
			start: "100px 25%",
			end: `100%-=100px 25%+=${
				document.querySelector(".studies .holder").getBoundingClientRect()
					.height
			}px`,
			trigger: ".studies",
			pin: ".studies .holder",
		},
		opacity: 0,
		duration: 1,
	});
}

// const lenis = new Lenis({
// 	smoothTouch: true,
// });
// lenis.on("scroll", ScrollTrigger.update);

// gsap.ticker.add((time) => {
// 	lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);
