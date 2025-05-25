// Simple HTML include utility for static projects
async function includeHTML() {
  const elements = document.querySelectorAll('[include-html]');
  const promises = [];

  elements.forEach((el) => {
    const file = el.getAttribute('include-html');
    if (file) {
      const promise = fetch(file)
        .then(resp => {
        if (resp.ok) {
            return resp.text();
          }
          throw new Error(`Failed to load ${file}`);
        })
        .then(html => {
          el.innerHTML = html;
        })
        .catch(e => {
          console.error(`Error loading component ${file}:`, e);
        el.innerHTML = "Error loading component.";
        });
      
      promises.push(promise);
    }
  });

  // Wait for all components to load
  await Promise.all(promises);
  console.log('All components loaded');
}

// Export the function for use in other scripts
window.includeHTML = includeHTML;
