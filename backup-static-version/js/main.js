document.addEventListener('DOMContentLoaded', function() {
    // Get all sidebar links and sections
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    const sections = document.querySelectorAll('.brochure-section');

    // Function to show a specific section
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update sidebar active state
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(sectionId)) {
                link.classList.add('active');
            }
        });
    }

    // Add click event listeners to sidebar links
    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').split('#')[1];
            showSection(sectionId);
            window.history.pushState(null, '', `#${sectionId}`);
        });
    });

    // Handle initial load and hash changes
    function handleHashChange() {
        const hash = window.location.hash.slice(1) || 'intro';
        showSection(hash);
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
});