document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded - checking for spotlight elements");
    
    // First check if spotlight container exists
    const spotlightContainer = document.getElementById('spotlight-container');
    
    if (!spotlightContainer) {
        console.error("Spotlight container not found! Check your HTML structure.");
        return; // Exit the function if container not found
    }
    
    console.log("Found spotlight container:", spotlightContainer);
    
    // Hardcoded member data to avoid fetch issues - same data as directory.js
    const members = [
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
      ]
       
   

    function getRandomSpotlightMembers() {
        // Filter members for Silver (level 2) or Gold (level 3) memberships
        const eligibleMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
        
        // Randomly select up to 3 members
        const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());
        return shuffledMembers.slice(0, 3);
    }

    function displaySpotlight() {
        console.log("Displaying spotlight members");
        spotlightContainer.innerHTML = ''; // Clear previous content

        const spotlightMembers = getRandomSpotlightMembers();
        
        if (spotlightMembers.length === 0) {
            spotlightContainer.innerHTML = '<p>No spotlight members available at this time.</p>';
            return;
        }
        
        spotlightMembers.forEach(member => {
            console.log(`Adding spotlight for: ${member.name}`);
            const memberCard = document.createElement('div');
            memberCard.className = 'spotlight-card';
            
            // Check if image property exists before using it
            const imageHtml = member.image ? 
                `<img src="images/${member.image}" alt="${member.name} logo">` : 
                '';
            
            memberCard.innerHTML = `
                ${imageHtml}
                <h3>${member.name}</h3>
                <p><strong>Address:</strong> ${member.address}</p>
                <p><strong>Phone:</strong> ${member.phone}</p>
                <p><strong>Website:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
                <p><strong>Membership Level:</strong> ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
            `;
            spotlightContainer.appendChild(memberCard);
        });
        
        console.log("Spotlight display complete");
    }

    // Call the function to display spotlights
    displaySpotlight();
});



