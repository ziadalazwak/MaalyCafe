// Toggle invoice sidebar visibility
window.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.pos-sidebar');
  const toggleBtn = document.getElementById('sidebar-toggle-btn');

  // Hide sidebar initially
  if (sidebar) sidebar.style.display = 'none';

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', function() {
      if (sidebar.style.display === 'none') {
        sidebar.style.display = 'flex';
      } else {
        sidebar.style.display = 'none';
      }
    });
  }
});
