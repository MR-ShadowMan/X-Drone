let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2400,
    reset: true
});

sr.reveal('.hero-text span',{delay:400});
sr.reveal('.hero-imgg',{delay:500, origin: 'top'});
sr.reveal('.hero-text h5',{delay:600, origin: 'bottom'});
sr.reveal('.hero-text h1',{delay:700, origin: 'bottom'});
sr.reveal('.hero-text p',{delay:800, origin: 'top'});

sr.reveal('.icon',{delay:1000, origin: 'top'});
sr.reveal('.scroll',{delay:1150, origin: 'top'});