// courses.js - Manages course data and filtering functionality

// Course data array
const courses = [
    {
        code: "CSE 121b",
        name: "JavaScript Language",
        credits: 3,
        description: "Introduction to programming using JavaScript with a brief introduction to programming fundamentals.",
        semester: "Winter 2024",
        category: "CSE",
        completed: true  // Update this to true if you've completed this course
    },
    {
        code: "CSE 111",
        name: "Programming with Functions",
        credits: 3,
        description: "Introduction to programming with functions, implementing data structures, and program planning.",
        semester: "Fall 2024",
        category: "CSE",
        completed: true  // Update this based on your completion status
    },
    {
        code: "WDD 130",
        name: "Web Fundamentals",
        credits: 3,
        description: "Basic principles of web design and development.",
        semester: "Fall 2024",
        category: "WDD",
        completed: true  // Update this based on your completion status
    },
    {
        code: "CSE 110",
        name: "Programming Building Blocks",
        credits: 3,
        description: "Introduction to the basics of programming.",
        semester: "Summer 2024",
        category: "CSE",
        completed: true  // Update this based on your completion status
    },
    {
        code: "WDD 231",
        name: "Web Frontend Development I",
        credits: 3,
        description: "Frontend web development with HTML, CSS and JavaScript.",
        semester: "Winter 2024",
        category: "WDD",
        completed: false  // Update this based on your completion status
    },
    {
        code: "WDD 330",
        name: "Web Frontend Development II",
        credits: 3,
        description: "Advanced frontend development with modern JavaScript frameworks.",
        semester: "Spring 2024",
        category: "WDD",
        completed: false  // Update this based on your completion status
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const courseContainer = document.getElementById('course-cards');
    const allCoursesBtn = document.getElementById('all-courses');
    const wddCoursesBtn = document.getElementById('wdd-courses');
    const cseCoursesBtn = document.getElementById('cse-courses');
    const creditCountElement = document.getElementById('credit-count');
    
    // Set active button
    function setActiveButton(activeButton) {
        [allCoursesBtn, wddCoursesBtn, cseCoursesBtn].forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    // Function to display the courses
    function displayCourses(courseArray) {
        // Clear the current courses
        courseContainer.innerHTML = '';
        
        // Check if there are courses to display
        if (courseArray.length === 0) {
            courseContainer.innerHTML = '<p>No courses found.</p>';
            return;
        }
        
        // Calculate total credits using reduce
        const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
        creditCountElement.textContent = totalCredits;
        
        // Create and append course cards
        courseArray.forEach(course => {
            const courseCard = document.createElement('div');
            courseCard.className = `course-card ${course.completed ? 'completed' : ''}`;
            
            courseCard.innerHTML = `
                <div class="course-header">
                    <div class="course-code">${course.code}</div>
                    <h3 class="course-name">${course.name}</h3>
                </div>
                <p>${course.description}</p>
                <div class="course-info">
                    <span>${course.semester}</span>
                    <span>${course.credits} Credits</span>
                </div>
                ${course.completed ? '<div class="completed-badge">Completed</div>' : ''}
            `;
            
            courseContainer.appendChild(courseCard);
        });
    }
    
    // Display all courses initially
    displayCourses(courses);
    
    // Event listeners for filter buttons
    allCoursesBtn.addEventListener('click', () => {
        setActiveButton(allCoursesBtn);
        displayCourses(courses);
    });
    
    wddCoursesBtn.addEventListener('click', () => {
        setActiveButton(wddCoursesBtn);
        const wddCourses = courses.filter(course => course.category === 'WDD');
        displayCourses(wddCourses);
    });
    
    cseCoursesBtn.addEventListener('click', () => {
        setActiveButton(cseCoursesBtn);
        const cseCourses = courses.filter(course => course.category === 'CSE');
        displayCourses(cseCourses);
    });
});