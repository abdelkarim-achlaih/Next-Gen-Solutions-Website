let headerBtn = document.querySelector("header .btn-header");
let headerLinks = document.querySelectorAll("header .nav-item");
let headerMobile = document.querySelector(".header-mobile");
let links = "";
headerLinks.forEach((link) => {
	headerMobile.append(link.firstElementChild.cloneNode(true));
});
