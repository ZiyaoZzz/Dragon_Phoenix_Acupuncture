document.addEventListener('DOMContentLoaded', function() {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.brochure-section');

    // Show intro sections by default and hide others
    sections.forEach(section => {
        if (section.id === 'intro' || section.getAttribute('data-intro') === 'true') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            const sectionId = this.getAttribute('data-section');
            
            if (sectionId === 'intro') {
                // Show all intro sections
                sections.forEach(section => {
                    if (section.id === 'intro' || section.getAttribute('data-intro') === 'true') {
                        section.style.display = 'block';
                    }
                });
            } else {
                const selectedSection = document.getElementById(sectionId);
                if (selectedSection) {
                    selectedSection.style.display = 'block';
                }
            }
            
            // Update URL hash
            window.location.hash = sectionId;
        });
    });

    // Handle direct URL access with hash
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const link = document.querySelector(`.sidebar-link[data-section="${hash}"]`);
        if (link) {
            link.click();
        } else {
            // If hash doesn't match any section, default to intro
            const introLink = document.querySelector('.sidebar-link[data-section="intro"]');
            if (introLink) introLink.click();
        }
    } else {
        // Make sure intro link is active by default
        const introLink = document.querySelector('.sidebar-link[data-section="intro"]');
        if (introLink) introLink.classList.add('active');
    }
});