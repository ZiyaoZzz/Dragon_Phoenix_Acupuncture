document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page in main navigation
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Check if we're on the home page
        if (currentPage.endsWith('/index.html') || currentPage.endsWith('/')) {
            // If this is the home link
            if (linkPath === 'index.html' || linkPath === './index.html') {
                link.classList.add('active');
            }
        } 
        // For other pages
        else if (currentPage.includes(linkPath) && linkPath !== 'index.html' && linkPath !== './index.html') {
            link.classList.add('active');
        }
    });
    
    // Handle sidebar section navigation
    const sectionLinks = document.querySelectorAll('.section-link');
    if (sectionLinks.length > 0) {
        // Function to show a specific section and hide others
        function showSection(sectionId) {
            // Get all intro sections (those without IDs)
            const introSections = document.querySelectorAll('.brochure-section:not([id])');
            
            // Get all content sections with IDs
            const allContentSections = document.querySelectorAll('.brochure-section[id]');
            
            // If showing intro section
            if (sectionId === "intro") {
                // Hide all content sections with IDs
                allContentSections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show all intro sections
                introSections.forEach(section => {
                    section.style.display = 'block';
                });
            } else {
                // Hide all intro sections
                introSections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Hide all content sections first
                allContentSections.forEach(section => {
                    section.style.display = 'none';
                });
                
                // Show the selected section
                const selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    selectedSection.style.display = 'block';
                    
                    // Removed the scrollIntoView behavior
                }
            }
            
            // Update active class on sidebar links
            sectionLinks.forEach(link => {
                if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
            
            // Save the current section to localStorage
            localStorage.setItem('currentBrochureSection', sectionId);
        }
        
        // Add click event listeners to all section links
        sectionLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
        
        // Check if there's a hash in the URL
        const hashSection = window.location.hash.substring(1);
        
        // Check if there's a saved section in localStorage
        const savedSection = localStorage.getItem('currentBrochureSection');
        
        if (hashSection && document.getElementById(hashSection)) {
            showSection(hashSection);
        } else if (savedSection && document.getElementById(savedSection)) {
            showSection(savedSection);
        } else {
            // Show the intro section by default
            showSection("intro");
        }
    }
});