document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded - checking for directory elements");
    
    // First check if directory container exists
    const directoryContainer = document.querySelector('#members-container');
    
    if (!directoryContainer) {
        console.error("Directory container not found! Check your HTML structure.");
        return; // Exit the function if container not found
    }
    
    console.log("Found directory container:", directoryContainer);
    
    // Get view toggle buttons if they exist
    const gridButton = document.getElementById('grid-view');
    const listButton = document.getElementById('list-view');
    
    if (!gridButton || !listButton) {
        console.warn("Grid or list view buttons not found. View toggling will be disabled.");
    } else {
        // Set grid view as default
        directoryContainer.classList.add('grid');
        directoryContainer.classList.remove('list');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
        
        // Grid view button click handler
        gridButton.addEventListener('click', () => {
            console.log("Grid view clicked");
            directoryContainer.classList.add('grid');
            directoryContainer.classList.remove('list');
            gridButton.classList.add('active');
            listButton.classList.remove('active');
        });
        
        // List view button click handler
        listButton.addEventListener('click', () => {
            console.log("List view clicked");
            directoryContainer.classList.add('list');
            directoryContainer.classList.remove('grid');
            listButton.classList.add('active');
            gridButton.classList.remove('active');
        });
    }
    
    // Hardcoded member data to avoid fetch issues
    const memberData = [
        {
            "id": 1,
            "name": "TechVision Innovations",
            "address": "1234 Silicon Avenue, Tech Park, CA 94103",
            "phone": "(415) 555-7890",
            "website": "https://www.techvisioninnovations.com",
            "membershipLevel": 3,
            "founded": 2008,
            "employees": 450,
            "industry": "Technology",
            "description": "Leading provider of AI and machine learning solutions for businesses"
        },
        {
            "id": 2,
            "name": "Green Earth Sustainability",
            "address": "789 Eco Lane, Greenville, OR 97301",
            "phone": "(503) 555-4321",
            "website": "https://www.greenearthsus.com",
            "membershipLevel": 2,
            "founded": 2015,
            "employees": 95,
            "industry": "Environmental Services",
            "description": "Eco-friendly products and consulting for sustainable business practices"
        },
        {
            "id": 3,
            "name": "Harbor Financial Services",
            "address": "567 Market Street, Financial District, NY 10005",
            "phone": "(212) 555-6789",
            "website": "https://www.harborfinancial.com",
            "membershipLevel": 3,
            "founded": 1992,
            "employees": 380,
            "industry": "Financial Services",
            "description": "Comprehensive financial planning and investment management"
        },
        {
            "id": 4,
            "name": "Sunshine Bakery",
            "address": "321 Main Street, Downtown, TX 75201",
            "phone": "(214) 555-9876",
            "website": "https://www.sunshinebakery.com",
            "membershipLevel": 1,
            "founded": 2018,
            "employees": 23,
            "industry": "Food & Beverage",
            "description": "Artisanal breads and pastries made with locally-sourced ingredients"
        },
        {
            "id": 5,
            "name": "Pinnacle Construction",
            "address": "890 Builder's Way, Industrial Park, IL 60607",
            "phone": "(312) 555-3456",
            "website": "https://www.pinnacleconst.com",
            "membershipLevel": 2,
            "founded": 2001,
            "employees": 175,
            "industry": "Construction",
            "description": "Commercial and residential construction with a focus on sustainable building practices"
        },
        {
            "id": 6,
            "name": "Healing Hands Medical Center",
            "address": "456 Wellness Avenue, Medical District, WA 98104",
            "phone": "(206) 555-2345",
            "membershipLevel": 3,
            "founded": 1985,
            "employees": 520,
            "industry": "Healthcare",
            "description": "Comprehensive healthcare services with state-of-the-art facilities"
        },
        {
            "id": 7,
            "name": "Bright Future Education",
            "address": "123 Learning Lane, University District, MA 02138",
            "phone": "(617) 555-8765",
            "website": "https://www.brightfutureedu.com",
            "membershipLevel": 1,
            "founded": 2010,
            "employees": 45,
            "industry": "Education",
            "description": "Innovative educational programs and resources for K-12 students"
        }
    ];
    
    // Populate directory with member data
    console.log("Populating directory with member data");
    directoryContainer.innerHTML = ''; // Clear any existing content
    
    memberData.forEach((member, index) => {
        console.log(`Processing member ${index + 1}: ${member.name}`);
        
        const card = document.createElement('section');
        card.classList.add('directory-card');
        

        
        card.innerHTML = `
            <div class="card-content">
                <h3>${member.name}</h3>
                <p class="description">${member.description}</p>
                <p class="phone">PHONE: ${member.phone}</p>
                <p class="website">URL: <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p class="address">ADDRESS: ${member.address}</p>
                <div class="additional-info">
                    <p>FOUNDED: ${member.founded}</p>
                    <p>EMPLOYEES: ${member.employees}</p>
                    <p>INDUSTRY: ${member.industry}</p>
                </div>
            </div>
        `;
        
        directoryContainer.appendChild(card);
    });
    
    console.log("Directory population complete");
});