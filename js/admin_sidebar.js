// Utility to highlight the active menu item based on attribute for admin sidebar
function activateAdminSidebar() {
  var sidebar = document.querySelector('[include-html="components/admin_sidebar.html"]');
  if (sidebar) {
    var active = sidebar.getAttribute('active-menu');
    var items = sidebar.querySelectorAll('.menu li');
    items.forEach(function(item) {
      if (item.textContent.trim() === active) {
        item.classList.add('active');
        if (!item.querySelector('.dot')) {
          var dot = document.createElement('span');
          dot.className = 'dot';
          item.appendChild(dot);
        }
      }
    });
  }
}
// Wait for sidebar to be included then activate
window.addEventListener('DOMContentLoaded', function() {
  // Small delay to ensure include-html is processed
  setTimeout(activateAdminSidebar, 100);
});
