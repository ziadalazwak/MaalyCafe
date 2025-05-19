// Modal open/close logic for Add Table
const openTableBtn = document.getElementById('openAddTableModal');
const tableModal = document.getElementById('addTableModal');
const closeTableBtn = document.getElementById('closeAddTableModal');

if (openTableBtn && tableModal && closeTableBtn) {
    openTableBtn.onclick = function() {
        tableModal.style.display = 'flex';
    };
    closeTableBtn.onclick = function() {
        tableModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === tableModal) {
            tableModal.style.display = 'none';
        }
    };
}
// Prevent form submission default (for demo)
const addTableForm = document.getElementById('addTableForm');
if (addTableForm) {
    addTableForm.onsubmit = function(e) {
        e.preventDefault();
        tableModal.style.display = 'none';
        // Here you can add logic to actually add the table
    };
}

// Modal open/close logic for Edit Table
const editTableModal = document.getElementById('editTableModal');
const closeEditTableBtn = document.getElementById('closeEditTableModal');
const editTableForm = document.getElementById('editTableForm');

function openEditTableModal() {
    if (editTableModal) {
        editTableModal.style.display = 'flex';
    }
}
// Attach to all .edit buttons
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.table-actions .edit').forEach(function(btn) {
        btn.onclick = function(e) {
            e.preventDefault();
            openEditTableModal();
        };
    });
});
if (closeEditTableBtn && editTableModal) {
    closeEditTableBtn.onclick = function() {
        editTableModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === editTableModal) {
            editTableModal.style.display = 'none';
        }
    };
}
if (editTableForm) {
    editTableForm.onsubmit = function(e) {
        e.preventDefault();
        editTableModal.style.display = 'none';
        // Here you can add logic to actually save the table
    };
}
