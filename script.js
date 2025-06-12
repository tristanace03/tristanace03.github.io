document.addEventListener('DOMContentLoaded', function() {
    
    // Contact form handler
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thanks for your message! I'll get back to you soon.");
        this.reset();
    });

    // Tab functionality
    function openTab(tabId) {
        const tabContents = document.querySelectorAll('.tab-content');
        const tabButtons = document.querySelectorAll('.tab-button');
        
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        document.getElementById(tabId).classList.add('active');
        event.target.classList.add('active');
    }

    // Make openTab globally accessible for onclick handlers
    window.openTab = openTab;

    // Slideshow functionality
    const slidesContainer = document.getElementById("slides-container");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    let currentSlide = 0;

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -slideIndex * 100; // Move by 100% for each slide
        slidesContainer.style.transform = `translateX(${translateX}%)`;
    }

    if (nextButton && prevButton && slidesContainer && slides.length > 0) {
        nextButton.addEventListener("click", (e) => {
            e.preventDefault();
            currentSlide = (currentSlide + 1) % slides.length;
            goToSlide(currentSlide);
        });

        prevButton.addEventListener("click", (e) => {
            e.preventDefault();
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            goToSlide(currentSlide);
        });

        // Initialize to first slide
        goToSlide(0);
    }
});