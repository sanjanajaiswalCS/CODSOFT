var tl = gsap.timeline();

tl.from(".header .logo", {
    opacity: 0,
    y: -30,
    duration: 0.2,
    delay: 0.3,

});


tl.from(".navbar a", {
    opacity: 0,
    y: -30,
    duration: 0.4,
    stagger: 0.55,

}, "-=1"); // This ensures the animations slightly overlap


var about2 = document.querySelector(".about");

about2.addEventListener("mouseenter", () => {
    var t2 = gsap.timeline()
    t2.from(".about-content", {
        opacity: 0,
        y: -200,
        duration: 2,
        ease: "power1.out",
    })

    t2.fron(".btn", {
        x: -150
    })
})

var skill2 = document.querySelector(".skill-container")
skill2.addEventListener("mouseenter", () => {

    var tl = gsap.timeline();

    tl.from(".skill .heading", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.2,
        ease: "power1.out",
    })

    tl.from(".skill-container .skill-box", {

        duration: 0.5,
        ease: "power1.out",
        stagger: 1,
    })


})

var skill2 = document.querySelector(".projects")
skill2.addEventListener("mouseenter", () => {

    var tl = gsap.timeline();

    tl.from(".projects h2", {
        opacity: 0,
        y: -50,
        duration: 1,
        delay: 0.2,
        ease: "power1.out",
    })

})

document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }, false);
});



// toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon & navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx bx-x');
    navbar.classList.remove('active');

};

document.querySelector('form').onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
};