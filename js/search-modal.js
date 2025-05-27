document.addEventListener('DOMContentLoaded', function() {
  const searchModal = document.getElementById('searchModal');
  const searchSection = document.querySelector('.search-section');
  const searchIcon = document.querySelector('.search-icon-wrapper');
  const searchText = document.querySelector('.search-text');
  const modalContent = searchModal ? searchModal.querySelector('.search-modal-content') : null;

  // Function to open modal
  function openSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'flex';
    }
  }

  // Function to close modal
  function closeSearchModal() {
    if (searchModal) {
      searchModal.style.display = 'none';
    }
  }

  // Event listeners for opening modal
  if (searchSection) {
    searchSection.addEventListener('click', openSearchModal);
  }
  searchIcon.addEventListener('click', openSearchModal);
  searchText.addEventListener('click', openSearchModal);

  // Close modal when clicking outside
  if (searchModal) {
    searchModal.addEventListener('click', function(event) {
      if (event.target === searchModal) {
        closeSearchModal();
      }
    });
  }

  // Prevent clicks inside the modal content from closing the modal
  if (modalContent) {
    modalContent.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  }
});