// Modal open/close logic for New Reservation
const openReservationBtn = document.getElementById('openAddReservationModal');
const reservationModal = document.getElementById('addReservationModal');
const closeReservationBtn = document.getElementById('closeAddReservationModal');

if (openReservationBtn && reservationModal && closeReservationBtn) {
    openReservationBtn.onclick = function() {
        reservationModal.style.display = 'flex';
    };
    closeReservationBtn.onclick = function() {
        reservationModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === reservationModal) {
            reservationModal.style.display = 'none';
        }
    };
}
// Prevent form submission default (for demo)
const addReservationForm = document.getElementById('addReservationForm');
if (addReservationForm) {
    addReservationForm.onsubmit = function(e) {
        e.preventDefault();
        reservationModal.style.display = 'none';
        // Here you can add logic to actually add the reservation
    };
}
