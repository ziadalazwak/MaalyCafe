window.initReservationModal = function() {
    const modal = document.getElementById('reservationModal');
    const openBtn = document.getElementById('openAddReservationModal');
    const form = document.getElementById('reservationForm');
    const editButtons = document.querySelectorAll('.edit');

    // Open modal for new reservation
    openBtn.addEventListener('click', function() {
        form.reset(); // Clear form
        modal.style.display = 'flex';
    });

    // Open modal for editing
    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.reservation-card');
            
            // Fill form with existing data
            // Add your code to fill the form with existing data
            
            modal.style.display = 'flex';
        });
    });

    // Close when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        
        // Close modal after submission
        modal.style.display = 'none';
    });
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initReservationModal();
});