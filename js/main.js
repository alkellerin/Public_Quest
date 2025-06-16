// Import all component initializers
import { initButtons } from '/components/buttons.js';
import { initCards } from '/components/cards.js';
import { initForms } from '/components/forms.js';
import { initNavigation } from '/components/navigation.js';

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize global components
  initButtons();
  initCards();
  initNavigation();
  initForms();

  
});