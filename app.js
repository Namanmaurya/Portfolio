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


// skill js
document.addEventListener("DOMContentLoaded", function() {
    const dots = document.querySelectorAll('.dot');
    const tooltip = document.getElementById('tooltip');

    dots.forEach(dot => {
        dot.addEventListener('mouseenter', (event) => {
            const dotLevel = dot.getAttribute('data-level');
            const rect = dot.getBoundingClientRect();

            // Set tooltip position dynamically
            tooltip.style.left = `${rect.left + window.pageXOffset}px`;
            tooltip.style.top = `${rect.top - 40 + window.pageYOffset}px`;
            tooltip.style.display = 'block';
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';

            // Show the skill percentage in the tooltip
            tooltip.textContent = `Skill Level: ${dotLevel}`;
        });

        dot.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateY(10px)';
            setTimeout(() => {
                tooltip.style.display = 'none';
            }, 300);
        });
    });
});
