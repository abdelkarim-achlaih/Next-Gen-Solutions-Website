let headerBtn = document.querySelector("header .btn-header");
let headerLinks = document.querySelectorAll("header .nav-item");
let headerMobile = document.querySelector(".header-mobile");
let links = "";
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
