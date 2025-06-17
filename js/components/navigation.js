// // SIDE NAV --- This changes the content on the page depending on the tab
// var navItems = document.querySelectorAll('.nav-item');
// var contentSections = document.querySelectorAll('.content-section');

// function showContent(tabId) {
//     // Hide all content sections
//     for (var i = 0; i < contentSections.length; i++) {
//         contentSections[i].classList.add('hidden');
//     }

//     // Show selected content section
//     var targetSection = document.getElementById(tabId);
//     if (targetSection) {
//         targetSection.classList.remove('hidden');
//     }

//     // Update active states
//     for (var j = 0; j < navItems.length; j++) {
//         navItems[j].classList.remove('active');
//     }

//     // Add active class to clicked item
//     var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
//     if (activeItem) {
//         activeItem.classList.add('active');
//     }
// }



// // Initialize with first tab active
// showContent('components-buttons');

var navItems = document.querySelectorAll('.nav-item');
        var contentSections = document.querySelectorAll('.content-section');

        function showContent(tabId) {
            // Hide all content sections
            for (var i = 0; i < contentSections.length; i++) {
                contentSections[i].classList.add('hidden');
            }

            // Show selected content section
            var targetSection = document.getElementById(tabId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
            }

            // Update active states
            for (var j = 0; j < navItems.length; j++) {
                navItems[j].classList.remove('active');
            }

            // Add active class to clicked item
            var activeItem = document.querySelector('[data-tab="' + tabId + '"]');
            if (activeItem) {
                activeItem.classList.add('active');
            }
        }

        // Add click event listeners to nav items
        for (var k = 0; k < navItems.length; k++) {
            navItems[k].addEventListener('click', function() {
                var tabId = this.getAttribute('data-tab');
                showContent(tabId);
            });
        }

        // Initialize with first tab active
        showContent('components-buttons');


