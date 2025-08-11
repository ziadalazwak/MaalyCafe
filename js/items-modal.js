// Initialize modal functionality
function initItemsModal() {
  console.log('Setting up items modal...');
  
  // Get modal elements
  const modal = document.getElementById('editItemModal');
  const openModalBtn = document.getElementById('openAddItemModal');
  const closeModalBtn = document.getElementById('closeEditItemModal');
  const form = document.querySelector('.edit-item-form');
  const photoInput = document.getElementById('itemPhotoInput');
  const photoPreview = document.getElementById('itemPhotoPreview');
  const addPhotoBtn = document.getElementById('addPhotoBtn');
  const editButtons = document.querySelectorAll('.icon-btn.edit-btn'); // Get all edit buttons

  if (!modal || !openModalBtn || !closeModalBtn || !form) {
    console.error('Required modal elements not found:', {
      modal: !!modal,
      openBtn: !!openModalBtn,
      closeBtn: !!closeModalBtn,
      form: !!form
    });
    // Check if edit buttons are found even if other elements aren't
    if (editButtons.length === 0) {
        console.error('No edit buttons found with class .icon-btn.edit-btn');
    }
    return;
  }

  // Open modal with "Add Item" button
  openModalBtn.addEventListener('click', () => {
    console.log('Opening modal with Add Item button...');
    modal.style.display = 'block';
  });

  // Open modal with Edit buttons
  editButtons.forEach(button => {
      button.addEventListener('click', () => {
          console.log('Opening modal with Edit button...');
          modal.style.display = 'block';
          // Here you would typically load the item data into the modal form
          // based on the specific item row the button is in.
      });
  });

  // Close modal
  closeModalBtn.addEventListener('click', () => {
    console.log('Closing modal...');
    modal.style.display = 'none';
  });

  // Close modal when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      console.log('Closing modal via outside click...');
      modal.style.display = 'none';
    }
  });

  // Handle photo upload
  if (addPhotoBtn && photoInput && photoPreview) {
    addPhotoBtn.addEventListener('click', () => {
      console.log('Opening photo upload...');
      photoInput.click();
    });

    photoInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        console.log('Photo selected:', file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
          photoPreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted...');
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to your backend
    console.log('Form data:', data);
    
    // Close modal after submission
    modal.style.display = 'none';
  });

  console.log('Modal initialization complete');
}

// Make the initialization function available globally
window.initItemsModal = initItemsModal;

// Remove this DOMContentLoaded listener - initialization is handled by the page
// document.addEventListener('DOMContentLoaded', function() {
//   if (window.initItemsModal) window.initItemsModal();
// });
