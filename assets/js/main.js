const header = document.querySelector("header"),
	navbar = document.querySelector("#navbar"),
	burgerMenu = document.querySelector("#burger"),
	navbarMenu = document.querySelector("#menu"),
	tabsContainer = document.querySelector(".about-tabs"),
	aboutSection = document.querySelector(".about");
	
window.addEventListener("scroll", () => {
	header.classList.toggle("sticky", window.scrollY > 0);
});

burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("is-active");
	navbar.classList.toggle("is-active");

	if (navbarMenu.classList.contains("is-active")) {
		navbarMenu.style.minHeight = '100%';
	} else {
		navbarMenu.removeAttribute("style");
	}
});

window.onscroll = () => {
	navbar.classList.remove("is-active");
	burgerMenu.classList.remove("is-active");
	navbarMenu.classList.remove("is-active");
};

tabsContainer.addEventListener("click", (e) => {
	if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
		tabsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		const target = e.target.getAttribute("data-target");
		aboutSection.querySelector(".tab-content.active").classList.remove("active");
		aboutSection.querySelector(target).classList.add("active");
	}
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        993: {
            slidesPerView: 2,
        },
      },
  });

function validate() {
	let name = document.querySelector(".name"),
		email = document.querySelector(".email"),
		msg = document.querySelector(".message"),
		sendBtn = document.querySelector(".send-btn");

	sendBtn.addEventListener("click", (e) => {
		e.preventDefault();
		if (name.value == "" || email.value == "" || msg.value == "") {
			emptyerror();
		} else {
			sendmail(name.value, email.value, msg.value);
			succes();
		}
	});
}
validate();

let sendmail = (name, email, msg) => emailjs.send("service_e3q363i", "template_wg8lgj9", {
	to_name: name,
	from_name: email,
	message: msg,
});

let emptyerror = () => swal({
	title: "Oh No...",
	text: "Fields cannot be empty!",
	icon: "error",
});

let succes = () => swal({
	title: "Email sent successfully",
	text: "we try to reply in 24 hours",
	icon: "success",
});

const sr = ScrollReveal ({
	distance: '80px', 
	duration: 700,
	reset: true
})

sr.reveal('.home-text', {delay:70, origin:'left'})
sr.reveal('.home-img', {delay:70, origin:'right'})
sr.reveal('#about, #portfolio, #contact', {delay:70, origin:'bottom'})

