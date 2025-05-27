// Simple HTML include utility for static projects
function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  elements.forEach(async (el) => {
    const file = el.getAttribute('include-html');
    if (file) {
      try {
        const resp = await fetch(file);
        if (resp.ok) {
          el.innerHTML = await resp.text();
        } else {
          el.innerHTML = "Component not found.";
        }
      } catch (e) {
        el.innerHTML = "Error loading component.";
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);