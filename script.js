// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

// Translation helper function
function getTranslation(path, lang = currentLang) {
    const keys = path.split('.');
    let value = translations[lang];

    for (const key of keys) {
        if (value && value[key] !== undefined) {
            value = value[key];
        } else {
            console.warn(`Translation not found for: ${path}`);
            return path;
        }
    }
    return value;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);

    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const path = element.getAttribute('data-i18n');
        const value = getTranslation(path, lang);

        // Update element content
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = value;
            }
        } else {
            // Check if element has a constant part (like an arrow)
            const arrow = element.querySelector('.btn-arrow');
            if (arrow) {
                element.textContent = value + ' ';
                element.appendChild(arrow);
            } else {
                element.textContent = value;
            }
        }
    });

    // Update language switcher UI
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });

    // Update page language attribute
    document.documentElement.lang = lang;
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);

    // Language switcher event listeners
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.dataset.lang;
            setLanguage(lang);
        });
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth scroll to sections
function smoothScrollTo(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Scroll to form
function scrollToForm() {
    smoothScrollTo('#contact');
}

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formEntries = Object.fromEntries(formData);

        // Get readable service name
        const serviceSelect = contactForm.querySelector('#service');
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        formEntries.service = serviceName;

        // Prepare data in the format expected by the n8n workflow
        const payload = {
            data: formEntries,
            meta: {
                lang: currentLang,
                page: window.location.href,
                timestamp: new Date().toISOString()
            }
        };

        // Show loading state
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.innerHTML;
        const loadingText = currentLang === 'ru' ? 'Отправка...' : 'Sending...';
        submitButton.innerHTML = loadingText;
        submitButton.disabled = true;

        try {
            const response = await fetch('https://n8n.gromman.com/webhook/handyman', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Show success message
                const successMsg = getTranslation('notifications.success');
                showNotification(successMsg, 'success');

                // Reset form
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            const errorMsg = currentLang === 'ru'
                ? 'Произошла ошибка при отправке. Попробуйте позже.'
                : 'An error occurred during submission. Please try again later.';
            showNotification(errorMsg, 'error');
        } finally {
            // Restore button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : (type === 'error' ? '✕' : 'ℹ')}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            background: white;
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.16);
            z-index: 10000;
            animation: slideIn 0.3s ease;
            border-left: 4px solid;
        }
        
        .notification-success {
            border-left-color: hsl(120, 60%, 50%);
        }
        
        .notification-error {
            border-left-color: hsl(0, 75%, 50%);
        }
        
        .notification-info {
            border-left-color: hsl(215, 100%, 50%);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }
        
        .notification-icon {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .notification-success .notification-icon {
            color: hsl(120, 60%, 50%);
        }
        
        .notification-error .notification-icon {
            color: hsl(0, 75%, 50%);
        }
        
        .notification-info .notification-icon {
            color: hsl(215, 100%, 50%);
        }
        
        .notification-message {
            color: hsl(220, 20%, 10%);
            font-weight: 500;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;

    document.head.appendChild(style);
    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card, .benefit-card, .review-card');

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Phone number formatting
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');

        // Remove leading 1 if it's there to handle uniformly
        if (value.length > 0 && value[0] === '1') {
            value = value.slice(1);
        }

        if (value.length > 0) {
            let formatted = '+1';

            if (value.length > 0) {
                formatted += ' (' + value.slice(0, 3);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.slice(3, 6);
            }
            if (value.length >= 7) {
                formatted += '-' + value.slice(6, 10);
            }

            e.target.value = formatted;
        }
    });
}

// Add hover effect to navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// Animate hero stats on scroll
const heroStats = document.querySelectorAll('.stat-number');

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        if (element.textContent.includes('+')) {
            element.textContent = value + '+';
        } else if (element.textContent.includes('%')) {
            element.textContent = value + '%';
        } else {
            element.textContent = value;
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            const text = entry.target.textContent;
            const endValue = parseInt(text.replace(/\D/g, ''));
            animateValue(entry.target, 0, endValue, 2000);
            entry.target.dataset.animated = 'true';
        }
    });
}, { threshold: 0.5 });

heroStats.forEach(stat => statsObserver.observe(stat));

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = 'hsl(215, 100%, 50%)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.borderColor = 'hsl(220, 20%, 90%)';
    });
});

console.log('Handyman Landing Page v1.1 loaded successfully!');
