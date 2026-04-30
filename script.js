// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon between bars and times
        const icon = menuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// --- Premium Translate Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const translateBtn = document.getElementById('translateBtn');
    const premiumTranslate = document.getElementById('premiumTranslate');
    const translateItems = document.querySelectorAll('.translate-item');

    if (translateBtn && premiumTranslate) {
        translateBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            premiumTranslate.classList.toggle('active');
        });

        // Close dropdown on outside click
        document.addEventListener('click', (e) => {
            if (premiumTranslate && !premiumTranslate.contains(e.target)) {
                premiumTranslate.classList.remove('active');
            }
        });

        // Handle Language Selection
        translateItems.forEach(item => {
            item.addEventListener('click', function() {
                const lang = this.getAttribute('data-lang');
                
                // Remove active class from all
                translateItems.forEach(i => i.classList.remove('active'));
                // Add to current
                this.classList.add('active');
                
                // Trigger Google Translate
                const googleSelect = document.querySelector('.goog-te-combo');
                if (googleSelect) {
                    googleSelect.value = lang;
                    googleSelect.dispatchEvent(new Event('change'));
                }
                
                // Close dropdown
                premiumTranslate.classList.remove('active');
            });
        });
    }
});
