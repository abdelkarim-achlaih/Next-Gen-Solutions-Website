import { englishContent, frenchContent } from "../js/content.js";
let introduceSection = document.querySelector(".introduce");
let skills = document.querySelectorAll(".skills .skill");

let showed1 = false;

window.onscroll = (_) => {
	if (window.scrollY > introduceSection.offsetTop - 200 && !showed1) {
		let time = 0;
		skills.forEach((skill) => {
			setTimeout(() => {
				skill.classList.add("animate");
			}, time);
			time += 700;
		});
		showed1 = true;
	}
};

let tabsHolder = document.querySelector(".testimonials .tabs-holder");
let lis = document.querySelectorAll(".testimonials li");
let tabs = document.querySelectorAll(".testimonials .tab");

tabs[0].classList.add("show");
lis.forEach((li) => {
	li.onclick = function () {
		lis.forEach((li) => {
			li.classList.remove("active");
		});
		this.classList.add("active");
		tabs.forEach((tab) => {
			if (tab.dataset.type === this.dataset.num) {
				tab.classList.add("show");
			} else {
				tab.classList.remove("show");
				tab.classList.add("hide");
				setTimeout(() => {
					tab.classList.remove("hide");
				}, 1000);
			}
		});
	};
});

let servicesPara = document.querySelectorAll(".services .service p");
let servicesTitle = document.querySelectorAll(".services .service h4");

window.onresize = (_) => {
	heightAuto(servicesPara);
	heightAuto(servicesTitle);
	setHeight(servicesPara);
	setHeight(servicesTitle);
	tabHolderHeight(tabs);
};

window.onload = (_) => {
	contact();
	setHeight(servicesPara);
	setHeight(servicesTitle);
	tabHolderHeight(tabs);
};

function heightAuto(array) {
	array.forEach((service) => {
		service.style.height = `auto`;
	});
}

function setHeight(array) {
	let max = 0;
	array.forEach((service) => {
		if (service.offsetHeight > max) {
			max = service.offsetHeight;
		}
	});
	array.forEach((service) => {
		service.style.height = `${max}px`;
	});
}
function tabHolderHeight(array) {
	let max = 0;
	array.forEach((item) => {
		if (item.offsetHeight > max) {
			max = item.offsetHeight;
		}
	});
	tabsHolder.style.height = `${max}px`;
}

function contact() {
	emailjs.init("IRmeyUBLgdA6L65yI");
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
			event.preventDefault();
			emailjs.sendForm("potfolio_contact", "potfolio_contact", this).then(
				function () {
					document.querySelector(".contact .message").classList.add("show");
					document.querySelector(
						".contact .message"
					).innerHTML = `Thanks for starting this epic journey !`;
					console.log("SUCCESS!");
				},
				function (error) {
					document.querySelector(".contact .message").classList.add("show");
					document.querySelector(
						".contact .message"
					).innerHTML = `Ooops ! Try again please`;
					console.log("FAILED...", error);
				}
			);
		});
}

let baseTime = 3500;
let showTime = 3000;

animateServices();
setInterval(animateServices, servicesTitle.length * baseTime);

function animateServices() {
	let flag = document.querySelector(".flag");
	let i = 0;
	flag.innerHTML = servicesTitle[i].innerHTML;
	i++;
	toogleFlag(flag, showTime);
	let tmp = setInterval((_) => {
		flag.innerHTML = servicesTitle[i].innerHTML;
		toogleFlag(flag, showTime);
		i++;
	}, baseTime);

	setTimeout(() => {
		clearInterval(tmp);
	}, (servicesTitle.length - 1) * baseTime);
}

function toogleFlag(flag, showTime) {
	showFlag(flag);
	setTimeout(() => {
		hideFlag(flag);
	}, showTime);
}

function showFlag(flag) {
	flag.classList.add("show");
}

function hideFlag(flag) {
	flag.classList.remove("show");
}

let contents = Array.from(document.querySelectorAll('[data-content=""]'));
let tooglerLangs = Array.from(document.querySelectorAll(".dropdown-menu li"));
let dropToogle = document.querySelector(".nav-link.dropdown-toggle");

dropToogle.innerHTML = tooglerLangs[1].innerHTML;

let i = 0;
contents.forEach((content) => {
	content.innerHTML = frenchContent[i];
	i++;
});

tooglerLangs[0].addEventListener("click", (e) => {
	writeContent(englishContent, e);
});
tooglerLangs[1].addEventListener("click", (e) => {
	writeContent(frenchContent, e);
});

function writeContent(contentArray, e) {
	contents.forEach((content) => {
		content.innerHTML = "";
	});
	loader();
	setTimeout(() => {
		removeLoader();
		let i = 0;
		contents.forEach((content) => {
			content.innerHTML = contentArray[i];
			i++;
		});
		dropToogle.innerHTML = e.target.innerHTML;
		heightAuto(servicesPara);
		heightAuto(servicesTitle);
		setHeight(servicesPara);
		setHeight(servicesTitle);
		tabHolderHeight(tabs);
	}, 2000);
}

function loader() {
	let loaderElement = document.createElement("div");
	loaderElement.classList.add("loader");
	for (let i = 0; i < 3; i++) {
		let div = document.createElement("div");
		loaderElement.appendChild(div);
	}
	let tmp = [];
	for (let i = 0; i < contents.length; i++) {
		tmp[i] = loaderElement.cloneNode(true);
	}
	let x = 0;
	contents.forEach((content) => {
		content.prepend(tmp[x]);
		x++;
	});
}

function removeLoader() {
	let x = 0;
	contents.forEach((content) => {
		content.firstElementChild.remove();
		x++;
	});
}
