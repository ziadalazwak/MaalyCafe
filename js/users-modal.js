window.initUsersModal = function() {
  const modal = document.getElementById('newUserModal');
  const openBtn = document.querySelector('.add-user-btn');
  const closeBtn = document.getElementById('closeNewUserModal');

  if (!modal || !openBtn || !closeBtn) return;

  openBtn.addEventListener('click', function(e) {
    e.preventDefault();
    modal.style.display = 'flex';
  });

  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};

document.addEventListener('DOMContentLoaded', function() {
  if (window.initUsersModal) window.initUsersModal();
});
