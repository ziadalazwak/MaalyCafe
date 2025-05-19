// Custom Date Picker Modal for changing the date label
const drDatePickerHtml = `
  <div class="dr-modal-overlay" id="dr-datepicker-modal-overlay">
    <div class="dr-modal dr-datepicker-modal">
      <button class="dr-modal-close" id="dr-datepicker-modal-close">&times;</button>
      <div class="dr-modal-title">Select Date</div>
      <div class="dr-datepicker-row">
        <select id="dr-datepicker-day" class="dr-datepicker-select"></select>
        <select id="dr-datepicker-month" class="dr-datepicker-select"></select>
        <select id="dr-datepicker-year" class="dr-datepicker-select"></select>
        <button class="dr-modal-btn" id="dr-datepicker-set-btn">Set</button>
      </div>
    </div>
  </div>
`;

function showDrDatePickerModal() {
  if (document.getElementById('dr-datepicker-modal-overlay')) return;
  document.body.insertAdjacentHTML('beforeend', drDatePickerHtml);
  document.getElementById('dr-datepicker-modal-close').onclick = closeDrDatePickerModal;
  document.getElementById('dr-datepicker-modal-overlay').onclick = function(e) {
    if (e.target === this) closeDrDatePickerModal();
  }
  // Populate selects
  const daySel = document.getElementById('dr-datepicker-day');
  const monthSel = document.getElementById('dr-datepicker-month');
  const yearSel = document.getElementById('dr-datepicker-year');
  // Days
  for (let i = 1; i <= 31; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i.toString().padStart(2, '0');
    daySel.appendChild(opt);
  }
  // Months
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  for (let i = 0; i < 12; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.textContent = months[i];
    monthSel.appendChild(opt);
  }
  // Years (2020-2030)
  for (let i = 2020; i <= 2030; i++) {
    let opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    yearSel.appendChild(opt);
  }
  // Set current values
  const dateLabel = document.querySelector('.date-label');
  if (dateLabel) {
    const parts = dateLabel.textContent.split(' ');
    if (parts.length === 3) {
      daySel.value = parseInt(parts[0]);
      monthSel.value = months.findIndex(m => m.toUpperCase() === parts[1]);
      yearSel.value = parseInt(parts[2]);
    }
  }
  document.getElementById('dr-datepicker-set-btn').onclick = function() {
    const d = daySel.value.padStart(2, '0');
    const m = months[parseInt(monthSel.value)];
    const y = yearSel.value;
    if (dateLabel) dateLabel.textContent = `${d} ${m.toUpperCase()} ${y}`;
    closeDrDatePickerModal();
  }
}

function closeDrDatePickerModal() {
  const modal = document.getElementById('dr-datepicker-modal-overlay');
  if (modal) modal.remove();
}

window.addEventListener('DOMContentLoaded', function() {
  const dateLabel = document.querySelector('.date-label');
  if (dateLabel) {
    dateLabel.style.cursor = 'pointer';
    dateLabel.title = 'Click to change date';
    dateLabel.addEventListener('click', showDrDatePickerModal);
  }
});
