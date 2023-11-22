gsap.registerPlugin(ScrollTrigger);

// ------------------------------------------- Header Button Logic

let headerBtn = document.querySelector("header .btn-header");
let headerLinks = document.querySelectorAll("header .nav-item");
let headerMobile = document.querySelector(".header-mobile");
headerLinks.forEach((link) => {
	let div = document.createElement("div");
	div.append(link.firstElementChild.cloneNode(true));
	headerMobile.append(div);
});
let anim = gsap.from(".header-mobile div", {
	duration: 1,
	ease: Expo.easeInOut,
	x: -500,
	stagger: 0.5,
});
anim.pause();
headerBtn.onclick = (_) => {
	headerMobile.classList.toggle("show");
	anim.restart();
};

// ------------------------------------------- Hero Animations

function heroAnimationWide() {
	let load = gsap.timeline({
		defaults: {
			duration: 1,
			ease: Expo.easeInOut,
		},
	});
	load
		.from("header .navbar-brand", {
			x: -1500,
		})
		.from("header .nav-link", {
			y: -200,
			stagger: 0.5,
		})
		.from(".hero .land h1", {
			y: 250,
			height: 0,
			skewY: 20,
		})
		.from(".hero .land p", {
			opacity: 0,
			y: -50,
		})
		.from(".hero .land .cta", {
			x: -1500,
		});
}
function heroAnimationMobile() {
	let loadMobile = gsap.timeline({
		defaults: {
			duration: 1,
			ease: Expo.easeInOut,
		},
	});
	loadMobile
		.from("header .navbar-brand", {
			x: -1500,
		})
		.from("header .btn-header span", {
			x: 1500,
		})
		.from(".hero .land h1", {
			y: 250,
			height: 0,
			skewY: 20,
		})
		.from(".hero .land p", {
			opacity: 0,
			y: -50,
		})
		.from(".hero .land .cta", {
			x: -1500,
		});
}

// ------------------------------------------- Background Video Height Logic

let currentY = 0;
let direction;
function bgHeightCalc() {
	let skippedHeight = document
		.querySelector(".hero")
		.getBoundingClientRect().height;
	let stepsTopInParent = document.querySelector(".steps").offsetTop;
	let bgVideoContainer = document.querySelector(".background-video");
	let video = bgVideoContainer.querySelector("video");
	bgVideoContainer.style.height = `${stepsTopInParent}px`;
	let destination = 0;
	let increment = 0;
	gsap.from(".background-video video", {
		scrollTrigger: {
			trigger: bgVideoContainer,
			pin: bgVideoContainer,
			markers: true,
			onEnterBack: (_) => {
				video.currentTime = video.duration;
				console.log("hi");
				console.log(video.currentTime);
			},
			onUpdate: (_) => {
				if (window.scrollY > currentY) {
					direction = 1;
				} else {
					direction = -1;
				}
				currentY = window.scrollY;
				let tmp =
					Math.round(
						((window.scrollY - skippedHeight) / (stepsTopInParent + 100)) * 1000
					) / 1000;
				destination = Math.round(video.duration * tmp * 1000) / 1000;
				increment = video.currentTime;
				console.log(video.currentTime);
				let diff = (direction * (destination - video.currentTime)) / 1;
				function animateVid() {
					video.currentTime = increment;
					if (direction == 1) {
						if (increment < destination) {
							increment += direction * diff;
							animateVid();
						} else {
						}
					} else if (direction == -1) {
						if (increment > destination) {
							increment += direction * diff;
							animateVid();
						}
					}
				}
				animateVid();
			},
			scrub: 0.3,
		},
		// opacity: 0,
		// duration: 0.3,
	});
}
// ------------------------------------------- Navs Logic

const navsSections = document.querySelectorAll(
	".sections-container > div:not(:first-of-type)"
);
const navsSteps = document.querySelectorAll(".steps-container .step-img");
const navTogglers = document.querySelectorAll(".sections-nav li");
const stepsTogglers = document.querySelectorAll(".steps-nav li");

toogleLisClassOnScroll(navsSections);
toogleLisClassOnScroll(navsSteps);

toogleClassOnClick(navTogglers);
toogleClassOnClick(stepsTogglers);

toggleNavClassForWhiteBgSections(".steps .title-container", ".studies");

toggleShowClass();

function toogleLisClassOnScroll(triggers) {
	triggers.forEach((triggerEle) => {
		gsap.from(`.${triggerEle.dataset.navClass} li`, {
			scrollTrigger: {
				id: triggerEle.id,
				trigger: triggerEle,
				start: "top 100%-=200px",
				end: "bottom 100%-=200px",
				onEnter: (_) => {
					toogleLisClassHelper(triggerEle);
				},
				onEnterBack: (_) => {
					toogleLisClassHelper(triggerEle);
				},
			},
		});
	});
}

function toogleLisClassHelper(triggerEle) {
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

function toogleClassOnClick(array) {
	array.forEach((button) => {
		button.onclick = (_) => {
			array.forEach((button) => {
				button.classList.remove("active");
			});
			button.classList.add("active");
		};
	});
}

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

function toggleShowClass() {
	gsap.from(".sections-nav nav", {
		scrollTrigger: {
			start: "top 100%-=200px",
			end: "bottom 100%-=200px",
			trigger: ".sections-container",
			id: "sections-container",
			toggleClass: { className: "show", targets: ".sections-nav nav" },
			toggleActions: "restart reset restart reset",
		},
		duration: 1,
		x: -200,
	});
}
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
		toggleActions: "restart none none reverse",
		trigger: ".years .title",
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
			toggleActions: "restart none none reverse",
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
		toggleActions: "restart none none reverse",
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
		toggleActions: "restart none none reverse",
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
		},
	});
}

// ------------------------------------------- Steps Animations

gsap.from(".steps .stagger", {
	scrollTrigger: {
		trigger: ".steps .title",
		start: "-300px top",
		end: "bottom center",
		toggleActions: "restart none none reverse",
		scrub: true,
	},
	opacity: 0.1,
	duration: 0.3,
	stagger: 0.3,
});

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

// ------------------------------------------- Steps Container Mobile Logic

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
		lenis.destroy();
	};
});

// ------------------------------------------- Studies + Contact Pin Animations

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

// ------------------------------------------- Window Events

let allowedWidth = 992;

window.onload = (_) => {
	// document.querySelector(".page").style.display = "block";
	// document.querySelector(".site-loader").classList.add("loaded");
	if (window.innerWidth > allowedWidth) {
		pinTitleOnScroll(".studies", 0.1);
		pinTitleOnScroll(".contact", 1);
		// heroAnimationWide();
		navsStepsPinAnimation(navsSteps[0]);
		navsStepsPinAnimation(navsSteps[1]);
		navsStepsPinAnimation(navsSteps[2], "transform");
	} else {
		heroAnimationMobile();
	}
	pinImpactsBoxes();
	animateContactSectionsHolder();
	// setTimeout(() => {
	bgHeightCalc();
	// }, 5000);
};

window.onresize = (_) => {
	if (window.innerWidth > allowedWidth) {
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
	bgHeightCalc();
};
