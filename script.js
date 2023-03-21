// NAVIGATION MENU TOGGLE
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// SECTION LOCATOR
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) { 
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    //Sticky Navbar Code --
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY) > 100;

    // REMOVE TOGGLE FOR ICON NAV
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    
    // If reset is true it will constantly do the animation when you it leaves your view and returns
    //reset: true,

    distance: '80px',
    duration: 1000,
    delay: 200
});

// SCrolling Animations

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .porfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed JS Text Aniimations

const typed = new Typed('.multiple-text',{
    strings: ['Aspiring Developer', 'Tech Enthusiast', 'Digital Creator', 'Software Artisan', 'Innovation Engineer', 'Software Samurai', 'Code Architect', 'High School Student'],
    typeSpeed: 75,
    backSpeed: 50,
    backDelay: 100,
    loop: false

});