function handleContactClick() {
    var contactButton = document.querySelector('a[href="#contact"]');
    
    // Add the animation class
    contactButton.classList.add('button-animation');
    
    // Listen for the end of the animation and then remove the class
    contactButton.addEventListener('animationend', function() {
        contactButton.classList.remove('button-animation');
    });
    
    // Additional actions specific to the "Contact" link can be added here
}
