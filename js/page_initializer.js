// This script defines a generic page initialization function
// which is called by admin_sidebar.js after navigation and includeHTML,
// or on direct page load.

async function initializePage() {
    console.log('Running page-specific initialization...');

    // This function is intended to be overridden by page-specific scripts
    // to perform their unique initialization (e.g., modal setup).
    // If a page has its own initialization function (e.g., window.initItemsPage),
    // it should define it before this script runs and call it here.

    // Example calls (these depend on page-specific scripts defining these functions):
    if (window.initItemsModal) { console.log('Calling initItemsModal...'); window.initItemsModal(); }
    if (window.initStoresModal) { console.log('Calling initStoresModal...'); window.initStoresModal(); }
    if (window.initTableModal) { console.log('Calling initTableModal...'); window.initTableModal(); }
    if (window.initReservationModal) { console.log('Calling initReservationModal...'); window.initReservationModal(); }
    if (window.initUsersModal) { console.log('Calling initUsersModal...'); window.initUsersModal(); }
    if (window.initBannerModal) { console.log('Calling initBannerModal...'); window.initBannerModal(); }
    if (window.initDailyReport) { console.log('Calling initDailyReport...'); window.initDailyReport(); }
    // Add more specific initialization calls as needed for other pages

    console.log('Generic page initialization finished.');
}

// Expose the initializePage function to the global scope
window.initializePage = initializePage;

// Handle initial page load (when not navigated via sidebar)
// Ensure includeHTML runs first, then call initializePage.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if(window.includeHTML) {
      window.includeHTML().then(() => {
        if(window.initializePage) window.initializePage();
      }).catch(e => console.error('Error during includeHTML on DOMContentLoaded:', e));
    } else if(window.initializePage) {
      window.initializePage();
    }
  });
} else {
  // DOM already loaded
   if(window.includeHTML) {
      window.includeHTML().then(() => {
        if(window.initializePage) window.initializePage();
      }).catch(e => console.error('Error during includeHTML on direct load:', e));
    } else if(window.initializePage) {
      window.initializePage();
    }
} 