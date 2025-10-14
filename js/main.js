// Mobile menu toggle if needed (but nav is simple, no toggle yet)
// Add smooth scroll if links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Analytics event for CTA clicks (GA4 auto-tracks, but custom if needed)
document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', { 'event_category': 'engagement' });
        }
    });
});
