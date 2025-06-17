// SIDE NAV --- This changes the content on the page depending on the tab
var navItems = document.querySelectorAll('.nav-item');
var contentSections = document.querySelectorAll('.content-section');

function showContent(tabId) {
    // Hide all content sections
    contentSections.forEach(function(section) {
        section.classList.add('hidden');
    });

    // Show selected content section
    var targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }

    // Update active states - remove from all
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Add active class to clicked item
    var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
    if (activeItem) {
        activeItem.classList.add('active');
    }
}



// Initialize with first tab active
showContent('components-buttons');


