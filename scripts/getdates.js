// Get the current year for the copyright notice
function updateCopyright() {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentYear').textContent = currentYear;
}

// Get the last modified date for the footer
function updateLastModified() {
  const lastModified = document.lastModified;
  document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Run these functions when the DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  updateCopyright();
  updateLastModified();
});
