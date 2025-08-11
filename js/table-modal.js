window.initTableModal = function() {
  console.log('Initializing table modal...');
  
  // Get the button and modal elements
  const openTableBtn = document.getElementById('openAddTableModal');
  const tableModal = document.getElementById('addTableModal');
  const closeTableBtn = document.getElementById('closeAddTableModal');

  // Debug element existence
  console.log('Button element:', openTableBtn);
  console.log('Modal element:', tableModal);
  console.log('Close button element:', closeTableBtn);

  if (!openTableBtn || !tableModal || !closeTableBtn) {
    console.error('Required elements not found:', {
      openTableBtn: !!openTableBtn,
      tableModal: !!tableModal,
      closeTableBtn: !!closeTableBtn
    });
    return;
  }

  // Add click handler to button
  openTableBtn.addEventListener('click', function(e) {
    console.log('Add Table button clicked');
    e.preventDefault();
      tableModal.style.display = 'flex';
  });
  
  // Add click handler to close button
  closeTableBtn.addEventListener('click', function(e) {
    console.log('Close button clicked');
    e.preventDefault();
      tableModal.style.display = 'none';
  });
  
  // Add click handler to close when clicking outside
  window.addEventListener('click', function(event) {
      if (event.target === tableModal) {
      console.log('Clicked outside modal');
        tableModal.style.display = 'none';
      }
  });

  // Handle form submission
  const addTableForm = document.getElementById('addTableForm');
  if (addTableForm) {
    addTableForm.addEventListener('submit', function(e) {
      console.log('Form submitted');
      e.preventDefault();
      tableModal.style.display = 'none';
    });
  }

  // Edit Table Modal
  const editTableModal = document.getElementById('editTableModal');
  const closeEditTableBtn = document.getElementById('closeEditTableModal');
  const editTableForm = document.getElementById('editTableForm');

  if (editTableModal && closeEditTableBtn) {
    // Add click handlers for edit buttons
    document.querySelectorAll('.table-actions .edit').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
      editTableModal.style.display = 'flex';
      });
    });

    // Add click handler to close button
    closeEditTableBtn.addEventListener('click', function(e) {
      e.preventDefault();
      editTableModal.style.display = 'none';
    });

    // Add click handler to close when clicking outside
    window.addEventListener('click', function(event) {
      if (event.target === editTableModal) {
        editTableModal.style.display = 'none';
      }
    });
  }

  // Handle edit form submission
  if (editTableForm) {
    editTableForm.addEventListener('submit', function(e) {
      e.preventDefault();
      editTableModal.style.display = 'none';
    });
  }

  console.log('Table modal initialization complete');
};

// Make sure the script runs after DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing modal...');
  if (window.initTableModal) {
    window.initTableModal();
  } else {
    console.error('initTableModal function not found');
}
});
