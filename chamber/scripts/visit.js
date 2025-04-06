// Path to your JSON file
const jsonFilePath = 'chamber/data/interest.json';

// Function to fetch the JSON data and create cards
async function loadPlacesOfInterest() {
  try {
    const response = await fetch(jsonFilePath);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const placesData = await response.json();
    createCards(placesData);
  } catch (error) {
    console.error('Error loading the JSON data:', error);
    displayErrorMessage();
  }
}

// Create card elements from JSON data
function createCards(places) {
  const cardGallery = document.getElementById('card-gallery');
  
  if (!cardGallery) {
    console.error("Card gallery element not found");
    return;
  }
  
  // Clear any existing content
  cardGallery.innerHTML = '';
  
  // Create a card-grid container
  const cardGrid = document.createElement('div');
  cardGrid.className = 'card-grid';
  
  // Create each card from the places data
  places.forEach(place => {
    // Create card elements
    const card = document.createElement('div');
    card.className = 'card';
    
    // Create and append card title (h2)
    const title = document.createElement('h2');
    title.textContent = place.title;
    card.appendChild(title);
    
    // Create and append figure with image
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = place.image;
    img.alt = place.title;
    img.loading = 'lazy'; // Use lazy loading for better performance
    figure.appendChild(img);
    card.appendChild(figure);
    
    // Create and append address
    const address = document.createElement('address');
    address.textContent = place.address;
    card.appendChild(address);
    
    // Create and append description paragraph
    const description = document.createElement('p');
    description.textContent = place.description;
    card.appendChild(description);
    
    // Create and append button
    const button = document.createElement('button');
    button.textContent = 'Learn More';
    button.addEventListener('click', () => {
      alert(`You want to learn more about ${place.title}`);
      // You could redirect to a details page or open a modal here
    });
    card.appendChild(button);
    
    // Add the card to the grid
    cardGrid.appendChild(card);
  });
  
  // Add the grid to the gallery
  cardGallery.appendChild(cardGrid);
}

// Display error message if JSON loading fails
function displayErrorMessage() {
  const cardGallery = document.getElementById('card-gallery');
  
  if (cardGallery) {
    cardGallery.innerHTML = `
      <div class="error-message">
        <h2>Oops! Something went wrong</h2>
        <p>We couldn't load the places of interest. Please try again later.</p>
      </div>
    `;
  }
}

// Handle visit tracking with localStorage
function trackVisit() {
  const visitorInfo = document.getElementById('visit-msg');
  
  if (!visitorInfo) {
    console.error("Visitor info element not found");
    return;
  }
  
  // Get current timestamp
  const currentDate = Date.now();
  
  // Get last visit timestamp from localStorage
  const lastVisit = localStorage.getItem('lastVisitTimestamp');
  
  // Create message element
  const messageContainer = document.createElement('div');
  messageContainer.className = 'visit-message';
  
  // Determine appropriate message based on visit history
  if (!lastVisit) {
    // First visit
    messageContainer.innerHTML = "Welcome! Let us know if you have any questions.";
  } else {
    // Calculate time difference in days
    const daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    
    if (daysDifference < 1) {
      // Less than a day between visits
      messageContainer.innerHTML = "Back so soon! Awesome!";
    } else {
      // Display number of days since last visit (with proper grammar)
      messageContainer.innerHTML = `You last visited ${daysDifference} ${daysDifference === 1 ? 'day' : 'days'} ago.`;
    }
  }
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.className = 'close-button';
  closeButton.setAttribute('aria-label', 'Close message');
  closeButton.style.marginLeft = '10px';
  closeButton.style.background = 'none';
  closeButton.style.border = 'none';
  closeButton.style.cursor = 'pointer';
  closeButton.style.fontSize = '1.2rem';
  
  closeButton.addEventListener('click', () => {
    visitorInfo.style.display = 'none';
  });
  
  messageContainer.appendChild(closeButton);
  visitorInfo.appendChild(messageContainer);
  
  // Store current visit timestamp for next visit
  localStorage.setItem('lastVisitTimestamp', currentDate);
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  loadPlacesOfInterest();
  trackVisit();
});