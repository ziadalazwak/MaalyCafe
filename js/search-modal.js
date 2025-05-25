document.addEventListener('DOMContentLoaded', function() {
  const searchModal = document.getElementById('searchModal');
  const searchSection = document.querySelector('.search-section');
  const searchIcon = document.querySelector('.search-icon-wrapper');
  const searchText = document.querySelector('.search-text');

  // Function to open modal
  function openSearchModal() {
    searchModal.style.display = 'block';
  }

  // Function to close modal
  function closeSearchModal() {
    searchModal.style.display = 'none';
  }

  // Event listeners for opening modal
  searchSection.addEventListener('click', openSearchModal);
  searchIcon.addEventListener('click', openSearchModal);
  searchText.addEventListener('click', openSearchModal);

  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
    if (event.target === searchModal) {
      closeSearchModal();
    }
  });
});