// Get the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;

// Get the last modified date for the footer
const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;
