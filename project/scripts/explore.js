import { openModal } from './modal.js';
import { fetchFoodSpots } from './dataLoader.js';

document.addEventListener("DOMContentLoaded", async () => {
  const spots = await fetchFoodSpots(); // Fetch the spots data
  displaySpots(spots); // Display the spots on the page
});

function displaySpots(spots) {
  const container = document.querySelector("#spots-container");
  
  spots.forEach(spot => {
    const card = document.createElement("div");
    card.classList.add("spot-card");

    // Construct HTML for each spot card
    card.innerHTML = `
      <img src="images/${spot.image}" alt="${spot.name}" loading="lazy">
      <h2>${spot.name}</h2>
      <p>${spot.location}</p>
      <p>${spot.type}</p>
      <button class="details-btn" data-id="${spot.id}">Details</button>
    `;

    // Add event listener for showing the modal
    card.querySelector(".details-btn").addEventListener("click", () => {
      openModal(spot); // Open the modal for the clicked spot
    });

    container.appendChild(card); // Append the card to the container
  });
}