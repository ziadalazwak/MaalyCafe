// --- Date Navigation Logic ---
const dateLabel = document.querySelector('.date-label');
const preBtn = document.querySelector('.date-btn:first-of-type');
const nextBtn = document.querySelector('.date-btn:last-of-type');

let currentDate = new Date(2025, 5, 12); // 12 JUN 2025 (month is 0-indexed)

function updateDateLabel() {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  dateLabel.textContent = currentDate.toLocaleDateString('en-GB', options).replace(/ /g, ' ').toUpperCase();
}

preBtn.addEventListener('click', () => {
  currentDate.setDate(currentDate.getDate() - 1);
  updateDateLabel();
});
nextBtn.addEventListener('click', () => {
  currentDate.setDate(currentDate.getDate() + 1);
  updateDateLabel();
});

// --- Modal Logic ---
document.addEventListener('DOMContentLoaded', function() {
  // Search Modal Logic
  const searchBar = document.querySelector('.search-bar');
  const searchModal = document.getElementById('dailyReportSearchModal');
  const closeSearchModal = document.getElementById('closeDailyReportSearchModal');

  searchBar.style.cursor = 'pointer';
  searchBar.title = 'Click to search';

  searchBar.addEventListener('click', function() {
    const modal = document.getElementById('dailyReportSearchModal');
    modal.style.display = 'flex';
    setTimeout(() => {
      modal.classList.add('active');
    }, 10);
  });

  closeSearchModal.addEventListener('click', function() {
    const modal = document.getElementById('dailyReportSearchModal');
    modal.classList.remove('active');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  });

  searchModal.addEventListener('click', function(e) {
    if (e.target === searchModal) {
      searchModal.classList.remove('active');
      setTimeout(() => {
        searchModal.style.display = 'none';
      }, 300);
    }
  });

  // Date Selection Modal Logic
  const dateSelectionModal = document.getElementById('dateSelectionModal');
  const closeDateSelectionModal = document.getElementById('closeDateSelectionModal');
  const selectDateBtn = document.getElementById('selectDateBtn');
  const selectedDateInput = document.getElementById('selectedDateInput');

  if (dateLabel) {
    dateLabel.style.cursor = 'pointer';
    dateLabel.title = 'Click to change date';
    dateLabel.addEventListener('click', function(){
        dateSelectionModal.style.display = 'flex';
        // Optional: Set the date picker value to the current displayed date
        // try {
        //     const parts = dateLabel.textContent.split(' ');
        //     if(parts.length === 3) {
        //         const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        //         const day = parts[0];
        //         const monthIndex = monthNames.indexOf(parts[1]);
        //         const year = parts[2];
        //         if(monthIndex !== -1) {
        //             const date = new Date(year, monthIndex, day);
        //             selectedDateInput.valueAsDate = date;
        //         }
        //     }
        // } catch (e) {
        //     console.error('Error setting date picker value:', e);
        // }
    });
  }

  closeDateSelectionModal.addEventListener('click', function() {
    dateSelectionModal.style.display = 'none';
  });

  selectDateBtn.addEventListener('click', function() {
    // Update the date label with the selected date
    if (selectedDateInput.value) {
      const selectedDate = new Date(selectedDateInput.value);
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      dateLabel.textContent = selectedDate.toLocaleDateString('en-GB', options).replace(/ /g, ' ').toUpperCase();
      currentDate = selectedDate; // Update currentDate variable as well
    }
    dateSelectionModal.style.display = 'none';
  });

  // Close modal if clicking outside the modal content
  dateSelectionModal.addEventListener('click', function(e) {
    if (e.target === dateSelectionModal) {
      dateSelectionModal.style.display = 'none';
    }
  });
});

// --- Table Border Styling (for clarity, JS not needed, use CSS) ---
// (Table border handled in CSS)
