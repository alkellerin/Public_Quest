// DROPDOWN
const dropdownButtons = document.querySelectorAll('.dropdown-button');
const selectedValues = {};

dropdownButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const dropdownId = this.getAttribute('data-dropdown');
        const options = document.querySelector(`[data-options="${dropdownId}"]`);
        
        // Close all other dropdowns
        document.querySelectorAll('.dropdown-options').forEach(dropdown => {
            if (dropdown !== options) {
                dropdown.classList.remove('show');
            }
        });
        
        document.querySelectorAll('.dropdown-button').forEach(btn => {
            if (btn !== this) {
                btn.classList.remove('active');
            }
        });
        
        // Toggle current dropdown
        this.classList.toggle('active');
        options.classList.toggle('show');
    });
});

// Handle option selection
document.querySelectorAll('.dropdown-option').forEach(option => {
    option.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const value = this.getAttribute('data-value');
        // Get text from the p tag inside the option
        const text = this.querySelector('p').textContent || this.textContent;
        const optionsContainer = this.closest('.dropdown-options');
        const dropdownId = optionsContainer.getAttribute('data-options');
        const button = document.querySelector(`[data-dropdown="${dropdownId}"]`);
        // Target the p tag with selected-value class
        const selectedSpan = button.querySelector('.selected-value');
        
        // Update selected value
        selectedSpan.textContent = text;
        selectedSpan.style.color = 'var(--black)';
        selectedSpan.style.fontStyle = 'normal';
        
        // Store selected value
        selectedValues[dropdownId] = { value, text };
        
        // Update summary if function exists
        if (typeof updateSummary === 'function') {
            updateSummary();
        }
        
        // Remove selected class from all options in this dropdown
        optionsContainer.querySelectorAll('.dropdown-option').forEach(opt => {
            opt.classList.remove('selected');
        });
        
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // Close all dropdowns (including this one)
        document.querySelectorAll('.dropdown-options').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
        document.querySelectorAll('.dropdown-button').forEach(btn => {
            btn.classList.remove('active');
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown-options').forEach(dropdown => {
        dropdown.classList.remove('show');
    });
    document.querySelectorAll('.dropdown-button').forEach(button => {
        button.classList.remove('active');
    });
});

console.log("Dropdown menu initialized");