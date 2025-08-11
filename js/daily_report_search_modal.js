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

// Functions to show/hide the modal - Keep these global if they are called directly
function showDrSearchModal() {
  // Use the existing modal HTML in bills.html instead of inserting template
  const modal = document.getElementById('dateSearchModal');
  if (modal) modal.style.display = 'flex';
}

function closeDrSearchModal() {
  // Use the existing modal HTML in bills.html instead of removing template
  const modal = document.getElementById('dateSearchModal');
  if (modal) modal.style.display = 'none';
}

// Wrap initialization logic in a global function
window.initDailyReportSearchModal = function() {
    console.log('Initializing Daily Report/Bills Search Modal...');
    // Get references to the elements within the currently loaded page
    const openDateSearchBtn = document.getElementById("openDateSearch");
    const closeDateSearchModalBtn = document.getElementById("closeDateSearchModal");
    const dateSearchModal = document.getElementById("dateSearchModal"); // Get the modal element

    // Attach event listeners
    if (openDateSearchBtn) {
        console.log('Attaching click listener to openDateSearchBtn');
        openDateSearchBtn.onclick = function () {
            console.log('openDateSearchBtn clicked, showing modal');
            showDrSearchModal(); // Call the show function
        };
    }

    if (closeDateSearchModalBtn) {
        console.log('Attaching click listener to closeDateSearchModalBtn');
        closeDateSearchModalBtn.onclick = function () {
            console.log('closeDateSearchModalBtn clicked, hiding modal');
            closeDrSearchModal(); // Call the close function
        };
    }

    // Close modal when clicking outside content (assuming modal has id dateSearchModal)
    if (dateSearchModal) {
        console.log('Attaching click listener to dateSearchModal overlay');
        dateSearchModal.onclick = function (e) {
            if (e.target === this) {
                 console.log('Modal overlay clicked, hiding modal');
                 closeDrSearchModal();
            }
        };
    }
     console.log('Daily Report/Bills Search Modal initialization finished.');
};

// REMOVE: document.addEventListener('DOMContentLoaded', function() { ... });
// This initialization will now be triggered by page_initializer.js
