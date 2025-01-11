// Course list array
const courses = [
  { id: 1, name: 'WDD 231: Web Frontend Development I', credits: 3, completed: true },
  { id: 2, name: 'WDD 241: Web Backend Development I', credits: 3, completed: false },
  { id: 3, name: 'CSE 341: Web Development II', credits: 3, completed: false },
  // Add more courses here...
];

// Function to display course cards
function displayCourseCards(courses) {
  const courseCardsContainer = document.getElementById('course-cards');
  courseCardsContainer.innerHTML = '';

  courses.forEach((course) => {
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');

    const courseName = document.createElement('h3');
    courseName.textContent = course.name;

    const courseCredits = document.createElement('p');
    courseCredits.textContent = `${course.credits} credits`;

    const courseCompleted = document.createElement('p');
    courseCompleted.textContent = course.completed ? 'Completed' : 'Not completed';

    courseCard.appendChild(courseName);
    courseCard.appendChild(courseCredits);
    courseCard.appendChild(courseCompleted);

    courseCardsContainer.appendChild(courseCard);
  });
}

// Function to calculate total credits
function calculateTotalCredits(courses) {
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
  document.getElementById('total-credits').textContent = `Total credits: ${totalCredits}`;
}

// Display all courses initially
displayCourseCards(courses);
calculateTotalCredits(courses);

// Add event listeners to course filter buttons
document.getElementById('all-courses-btn').addEventListener('click', () => {
  displayCourseCards(courses);
  calculateTotalCredits(courses);
});

document.getElementById('wdd-courses-btn').addEventListener('click', () => {
  const wddCourses = courses.filter((course) => course.name.startsWith('WDD'));
  displayCourseCards(wddCourses);
  calculateTotalCredits(wddCourses);
});

document.getElementById('cse-courses-btn').addEventListener('click', () => {
  const cseCourses = courses.filter((course) => course.name.startsWith('CSE'));
  displayCourseCards(cseCourses);
  calculateTotalCredits(cseCourses);
});
