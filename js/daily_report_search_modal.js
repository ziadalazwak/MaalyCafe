// Modal HTML template
const searchModalHtml = `
  <div class="dr-modal-overlay" id="dr-search-modal-overlay">
    <div class="dr-modal">
      <button class="dr-modal-close" id="dr-search-modal-close">&times;</button>
      <div class="dr-modal-section">
        <div class="dr-modal-title">Search By Date</div>
        <div class="dr-modal-row">
          <span class="dr-modal-icon">&#128269;</span>
          <input type="text" id="dr-start-date" class="dr-modal-input" placeholder="Start Date" onfocus="this.type='date'" onblur="if(!this.value)this.type='text'">
          <input type="text" id="dr-end-date" class="dr-modal-input" placeholder="End Date" onfocus="this.type='date'" onblur="if(!this.value)this.type='text'">
          <button class="dr-modal-btn">Search</button>
        </div>
      </div>
      <div class="dr-modal-section">
        <div class="dr-modal-title">Search By Time</div>
        <div class="dr-modal-row">
          <span class="dr-modal-icon">&#128269;</span>
          <input type="text" id="dr-start-time" class="dr-modal-input" placeholder="Start Time" onfocus="this.type='time'" onblur="if(!this.value)this.type='text'">
          <input type="text" id="dr-end-time" class="dr-modal-input" placeholder="End Time" onfocus="this.type='time'" onblur="if(!this.value)this.type='text'">
          <button class="dr-modal-btn">Search</button>
        </div>
      </div>
    </div>
  </div>
`;

function showDrSearchModal() {
  if (document.getElementById('dr-search-modal-overlay')) return;
  document.body.insertAdjacentHTML('beforeend', searchModalHtml);
  document.getElementById('dr-search-modal-close').onclick = closeDrSearchModal;
  document.getElementById('dr-search-modal-overlay').onclick = function(e) {
    if (e.target === this) closeDrSearchModal();
  }
}

function closeDrSearchModal() {
  const modal = document.getElementById('dr-search-modal-overlay');
  if (modal) modal.remove();
}

// Attach to search icon
window.addEventListener('DOMContentLoaded', function() {
  const searchIcon = document.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.style.cursor = 'pointer';
    searchIcon.addEventListener('click', showDrSearchModal);
  }
});
