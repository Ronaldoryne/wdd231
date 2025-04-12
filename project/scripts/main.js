import { fetchMenuItems } from './dataLoader.js';
import { openModal } from './modal.js';

document.addEventListener('DOMContentLoaded', async () => {
  const menuItems = await fetchMenuItems();
  displayMenu(menuItems);
  trackLastVisit();
});

function displayMenu(items) {
  const container = document.querySelector('#menu-container');
  if (!container) return;

  container.innerHTML = ''; // Clear loading or previous items

  items.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('menu-card');

    card.innerHTML = `
      <img src="images/${item.image}" alt="${item.name}" loading="lazy">
      <h2>${item.name}</h2>
      <p>${item.location}</p>
      <p>${item.type}</p>
      <p>${'$'.repeat(item.priceLevel)}</p>
      <button class="details-btn">Details</button>
    `;

    card.querySelector('.details-btn').addEventListener('click', () => {
      openModal(item);
    });

    container.appendChild(card);
  });
}

function trackLastVisit() {
  const visitMsg = document.querySelector("#visit-msg");
  const lastVisit = localStorage.getItem("lastVisit");
  const now = new Date().toLocaleString();

  if (visitMsg) {
    visitMsg.textContent = lastVisit
      ? `Welcome back! Your last visit was on ${lastVisit}`
      : `Welcome to QuickBite!`;
  }

  localStorage.setItem("lastVisit", now);
}