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
				start: "top 100%-=200px",
				end: "bottom 100%-=200px",
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
				start: "top 100%-=200px",
				end: "bottom 100%-=200px",
				trigger: whiteSection,
				toggleClass: { className: "dark", targets: ".sections-nav nav" },
			},
			duration: 1,
		});
	});
}

gsap.from(".sections-nav nav", {
	scrollTrigger: {
		start: "top 100%-=200px",
		end: "bottom 100%-=200px",
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

let animatedTitleSections = [".solutions", ".impacts"];
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

translateDescription(".impacts", 300);

function translateDescription(str, y) {
	gsap.from(`${str} .description`, {
		scrollTrigger: {
			trigger: `${str}`,
			start: "-300px top",
			end: "bottom center",
			toggleActions: "restart none none reverse",
		},
		y: y,
		opacity: 0,
		duration: 0.7,
		stagger: 0.7,
	});
}

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

gsap.from(".impacts .impact", {
	scrollTrigger: {
		trigger: ".impacts .container",
		start: "-600px top",
		end: "bottom center",
		toggleActions: "restart none none reset",
	},
	y: 300,
	opacity: 0,
	duration: 1,
	stagger: 0.5,
});

function pinImpactsBoxes() {
	let impactBoxHeight = document
		.querySelector(".impact-2")
		.getBoundingClientRect().height;
	gsap.from(".impacts", {
		scrollTrigger: {
			id: "impacts-pinned",
			trigger: ".impacts-pinned",
			start: `100% ${impactBoxHeight}px`,
			end: `200% ${impactBoxHeight * 1.5}px`,
			pin: true,
			pinSpacing: false,
			pinnedContainer: ".impacts",
		},
	});
}

// ------------------------------------------- Steps Animations

gsap.from(".steps .stagger", {
	scrollTrigger: {
		trigger: ".steps .title",
		start: "-300px top",
		end: "bottom center",
		toggleActions: "restart none none none",
		scrub: true,
	},
	opacity: 0.1,
	duration: 0.3,
	stagger: 0.3,
});

navsStepsPinAnimation(navsSteps[0]);
navsStepsPinAnimation(navsSteps[1]);
navsStepsPinAnimation(navsSteps[2], "transform");

function navsStepsPinAnimation(step, pinType = "fixed") {
	gsap.from(step.querySelector("img"), {
		scrollTrigger: {
			trigger: step,
			start: "top top",
			end: "bottom top",
			scrub: 1,
			toggleActions: "restart none reverse none",
			pin: step.querySelector(".step-img-holder"),
			pinType: pinType,
		},
		scale: 1.5,
		duration: 5,
	});
}

// ------------------------------------------- Studies + Contact Pin Animations
let allowedWidth = 992;
window.onload = (_) => {
	if (screen.width > allowedWidth) {
		pinTitleOnScroll(".studies", 0.1);
		pinTitleOnScroll(".contact", 1);
	}
	pinImpactsBoxes();
	animateContactSectionsHolder();
};
console.log(typeof ScrollTrigger.getById(".studies"));
window.onresize = (_) => {
	console.log(screen.width);
	if (screen.width > allowedWidth) {
		if (typeof ScrollTrigger.getById(".studies") !== "undefined") {
			ScrollTrigger.getById(".studies").kill(true);
			ScrollTrigger.getById(".contact").kill(true);
		}
		pinTitleOnScroll(".studies", 0.1);
		pinTitleOnScroll(".contact", 1);
	} else {
		if (typeof ScrollTrigger.getById(".studies") !== "undefined") {
			ScrollTrigger.getById(".studies").kill(true);
			ScrollTrigger.getById(".contact").kill(true);
		}
	}

	ScrollTrigger.getById("impacts-pinned").kill(true);
	pinImpactsBoxes();
	animateContactSectionsHolder();
};

function pinTitleOnScroll(str, fromOpacity) {
	let coor = document.querySelector(`${str} .holder`).getBoundingClientRect();
	gsap.from(`${str} .holder .title`, {
		scrollTrigger: {
			id: `${str}`,
			toggleActions: "restart none none reverse",
			start: `100px 25%`,
			end: `100%-=100px 25%+=${coor.height}px`,
			trigger: `${str}`,
			pin: `${str} .holder`,
		},
		opacity: fromOpacity,
		duration: 1,
	});
}

// ------------------------------------------- Contact Section Logic

let SelectContactType = document.querySelector(".contact .select-contact-type");
let contactTypes = SelectContactType.querySelectorAll(".box");
let contactForm = document.querySelector(".contact-form");
let contactFormType = contactForm.querySelector(".iam .contact-type");
let iamBtn = contactForm.querySelector(".iam");

function animateContactSectionsHolder() {
	let x = -(SelectContactType.getBoundingClientRect().width + 48);
	contactTypes.forEach((type) => {
		type.addEventListener("click", (e) => {
			contactFormType.innerHTML = type.querySelector("p").innerText;
			gsapAnimationInit(x);
		});
	});

	iamBtn.addEventListener("click", (e) => {
		gsapAnimationInit(0);
	});
}

function gsapAnimationInit(x) {
	gsap.to(".contact-sections-holder", {
		duration: 1,
		ease: "power4.out",
		x: x,
	});
}

translateDescription(".contact", 150);
