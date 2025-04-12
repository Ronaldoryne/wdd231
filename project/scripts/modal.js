export function openModal(spot) {
    const modal = document.querySelector("#modal");
    
    // Construct the modal content with the spot details
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${spot.name}</h2>
        <img src="images/${spot.image}" alt="${spot.name}">
        <p>Type: ${spot.type}</p>
        <p>Location: ${spot.location}</p>
        <p>Rating: ${spot.rating}</p>
        <button id="close-modal">Close</button>
      </div>
    `;
    
    modal.classList.add("show"); // Show the modal
    
    // Add event listener to close the modal when "Close" button is clicked
    document.querySelector("#close-modal").addEventListener("click", () => {
      modal.classList.remove("show"); // Hide the modal
    });
  }