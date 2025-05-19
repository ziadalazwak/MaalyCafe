// Modal open/close logic for Add Store
const openBtn = document.getElementById('openAddStoreModal');
const modal = document.getElementById('addStoreModal');
const closeBtn = document.getElementById('closeAddStoreModal');

if (openBtn && modal && closeBtn) {
    openBtn.onclick = function() {
        modal.style.display = 'flex';
    };
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
// Prevent form submission default (for demo)
const addStoreForm = document.getElementById('addStoreForm');
if (addStoreForm) {
    addStoreForm.onsubmit = function(e) {
        e.preventDefault();
        modal.style.display = 'none';
        // Here you can add logic to actually add the store
    };
}
