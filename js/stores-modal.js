// Initialize modal functionality
window.initStoresModal = function() {
  console.log('Initializing stores modal...');
  
  // Get the button and modal elements
  const openStoreBtn = document.getElementById('openAddStoreModal');
  const storeModal = document.getElementById('addStoreModal');
  const closeStoreBtn = document.getElementById('closeAddStoreModal');

  // Debug element existence
  console.log('Button element:', openStoreBtn);
  console.log('Modal element:', storeModal);
  console.log('Close button element:', closeStoreBtn);

  if (!openStoreBtn || !storeModal || !closeStoreBtn) {
    console.error('Required elements not found:', {
      openStoreBtn: !!openStoreBtn,
      storeModal: !!storeModal,
      closeStoreBtn: !!closeStoreBtn
    });
    return;
  }

  // Add click handler to button
  openStoreBtn.addEventListener('click', function(e) {
    console.log('Add Store button clicked');
    e.preventDefault();
    storeModal.style.display = 'flex';
  });
  
  // Add click handler to close button
  closeStoreBtn.addEventListener('click', function(e) {
    console.log('Close button clicked');
    e.preventDefault();
    storeModal.style.display = 'none';
  });
  
  // Add click handler to close when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === storeModal) {
      console.log('Clicked outside modal');
      storeModal.style.display = 'none';
      }
  });

  // Handle form submission
  const addStoreForm = document.getElementById('addStoreForm');
  if (addStoreForm) {
    addStoreForm.addEventListener('submit', function(e) {
      console.log('Form submitted');
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(addStoreForm);
      const data = Object.fromEntries(formData.entries());
      console.log('Store form data:', data);
      
      storeModal.style.display = 'none';
    });
  }

  // Add click handlers for edit and delete buttons
  const editButtons = document.querySelectorAll('.store-actions .edit');
  const deleteButtons = document.querySelectorAll('.store-actions .delete');

  editButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Edit store clicked');
      storeModal.style.display = 'flex';
    });
  });

  deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Delete store clicked');
      if (confirm('Are you sure you want to delete this store?')) {
        console.log('Store deleted');
      }
    });
  });

  console.log('Store modal initialization complete');
};
