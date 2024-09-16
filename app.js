// script.js

// Show "Back to Top" button when scrolled down
window.onscroll = function () {
    const btn = document.getElementById('back-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
};

// Scroll back to the top of the page
document.getElementById('back-to-top').onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Smooth scrolling for navbar links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
