// This script defines a generic page initialization function
// which is called by admin_sidebar.js after navigation and includeHTML,
// or on direct page load.

async function initializePage() {
    console.log('Running page-specific initialization...');

    // This function is intended to be overridden by page-specific scripts
    // to perform their unique initialization (e.g., modal setup).
    // If a page has its own initialization function (e.g., window.initItemsPage),
    // it should define it before this script runs and call it here.

    // Ensure includeHTML runs first before initializing page-specific components
    if (window.includeHTML) {
        try {
            await window.includeHTML();
            console.log('includeHTML finished.');
            // After includeHTML, check for key elements
            const searchSectionCheck = document.querySelector('.search-section');
            const openReservationBtnCheck = document.getElementById('openAddReservationModal');
            console.log('After includeHTML: Search section found?', !!searchSectionCheck);
            console.log('After includeHTML: New Reservation button found?', !!openReservationBtnCheck);

        } catch (e) {
            console.error('Error during includeHTML:', e);
            // Continue initialization even if includeHTML fails, as some elements might be present
        }
    }

    // Example calls (these depend on page-specific scripts defining these functions):
    if (window.initItemsModal) { console.log('Calling initItemsModal...'); window.initItemsModal(); }
    if (window.initStoresModal) { console.log('Calling initStoresModal...'); window.initStoresModal(); }
    if (window.initTableModal) { console.log('Calling initTableModal...'); window.initTableModal(); }
    if (window.initReservationModal) { console.log('Calling initReservationModal...'); window.initReservationModal(); }
    if (window.initUsersModal) { console.log('Calling initUsersModal...'); window.initUsersModal(); }
    if (window.initBannerModal) { console.log('Calling initBannerModal...'); window.initBannerModal(); }
    if (window.initDailyReport) { console.log('Calling initDailyReport...'); window.initDailyReport(); }
    if (window.initDailyReportSearchModal) { console.log('Calling initDailyReportSearchModal for Bills page...'); window.initDailyReportSearchModal(); }
    if (window.initSearchModal) { console.log('Calling initSearchModal...'); window.initSearchModal(); }
    // Add more specific initialization calls as needed for other pages

    console.log('Generic page initialization finished.');
}

// Expose the initializePage function to the global scope
window.initializePage = initializePage;

// Handle initial page load (when not navigated via sidebar)
// Call initializePage directly, which now handles waiting for includeHTML
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
      if(window.initializePage) window.initializePage();
  });
} else {
  // DOM already loaded
     if(window.initializePage) window.initializePage();
} 