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

// --- Search Logic ---
const searchBar = document.querySelector('.search-bar');
searchBar.style.cursor = 'pointer';
searchBar.addEventListener('click', () => {
  const searchTerm = prompt('Enter date (e.g. 12 JUN 2025):');
  if (searchTerm) {
    dateLabel.textContent = searchTerm.toUpperCase();
  }
});

// --- Table Border Styling (for clarity, JS not needed, use CSS) ---
// (Table border handled in CSS)
