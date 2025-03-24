document.addEventListener('DOMContentLoaded', () => {
    // Options for formatting the date
    const dateOptions = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    // Get the current date
    const currentDate = new Date();
    
    // Format the date using the options
    const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
    
    // Set the formatted date in the page
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    
    // Set the current year for copyright
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentDate.getFullYear();
    }
    
    // Set the last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
    
    // Format for header banner - display message for specific days
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const bannerElement = document.getElementById('banner-message');
    
    if (bannerElement) {
        // Check if it's Monday, Tuesday, or Wednesday (1, 2, or 3)
        if (dayOfWeek >= 1 && dayOfWeek <= 3) {
            bannerElement.textContent = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
            bannerElement.classList.add('show');
        } else {
            bannerElement.classList.remove('show');
        }
    }
});