// Modal open/close logic for Search Modal
const searchSection = document.querySelector('.search-section');
const searchModal = document.getElementById('searchModal');
const closeSearchBtn = document.getElementById('closeSearchModal');

if (searchSection && searchModal && closeSearchBtn) {
    searchSection.onclick = function() {
        searchModal.style.display = 'flex';
    };
    closeSearchBtn.onclick = function() {
        searchModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === searchModal) {
            searchModal.style.display = 'none';
        }
    };
}
// Prevent form submission default
const searchReservationForm = document.getElementById('searchReservationForm');
if (searchReservationForm) {
    searchReservationForm.onsubmit = function(e) {
        e.preventDefault();
        // Add logic to handle search here
        searchModal.style.display = 'none';
    };
}
