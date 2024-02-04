document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.about, .contact');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate elements when they are in viewport
    function animateElements() {
        sections.forEach(section => {
            if (isInViewport(section) && section.style.opacity === "0") {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    // Initial check for elements in viewport
    animateElements();

    // Check for elements in viewport on scroll
    window.addEventListener('scroll', animateElements);
});
