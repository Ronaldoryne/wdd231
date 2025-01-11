
// Get the current year for the copyright notice
const currentYear = new Date().getFullYear();
document.getElementById('copyright-year').textContent = currentYear;

// Get the last modified date for the footer
const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = `Last modified: ${lastModified}`;

// Course list array
const courses = [
  { id: 1, name: 'Course 1', completed: true },
  { id: 2, name: 'Course 2', completed: false },
  { id: 3, name: 'Course 3', completed: true },
];

// Function to display courses
function displayCourses(courses) {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';

  courses.forEach((course) => {
    const courseElement = document.createElement('div');
    courseElement.innerHTML = `
      <h2>${course.name}</h2>
      <p>Completed: ${course.completed ? 'Yes' : 'No'}</p>
    `;
    courseList.appendChild(courseElement);
  });
}

// Display courses on page load
displayCourses(courses);

// Add event listener to the course filter buttons
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filterValue = button.dataset.filter;
      const filteredCourses = courses.filter((course) => {
        if (filterValue === 'all') {
          return true;
        } else if (filterValue === 'completed') {
          return course.completed;
        } else if (filterValue === 'incomplete') {
          return !course.completed;
        }
      });

      displayCourses(filteredCourses);
    });
  });
});
