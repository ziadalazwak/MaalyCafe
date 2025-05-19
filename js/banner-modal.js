// Modal open/close logic for Add Banner (similar to stores-modal.js)
const openBannerBtn = document.getElementById('openAddBannerModal');
const bannerModal = document.getElementById('addBannerModal');
const closeBannerBtn = document.getElementById('closeAddBannerModal');
const photoDrop = document.getElementById('bannerPhotoDrop');
const photoInput = document.getElementById('bannerPhoto');

if (openBannerBtn && bannerModal && closeBannerBtn) {
    openBannerBtn.onclick = function() {
        bannerModal.style.display = 'flex';
    };
    closeBannerBtn.onclick = function() {
        bannerModal.style.display = 'none';
    };
    window.onclick = function(event) {
        if (event.target === bannerModal) {
            bannerModal.style.display = 'none';
        }
    };
}
// Photo upload logic
if (photoDrop && photoInput) {
    photoDrop.onclick = function() {
        photoInput.click();
    };
    photoInput.onchange = function(e) {
        if (photoInput.files && photoInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(ev) {
                let img = photoDrop.querySelector('img.preview');
                if (!img) {
                    img = document.createElement('img');
                    img.className = 'preview';
                    photoDrop.insertBefore(img, photoDrop.firstChild);
                }
                img.src = ev.target.result;
                photoDrop.querySelector('.plus').style.display = 'none';
                photoDrop.querySelector('.photo-text').textContent = 'Change Photo';
            };
            reader.readAsDataURL(photoInput.files[0]);
        }
    };
}
// Prevent form submission default (for demo)
const addBannerForm = document.getElementById('addBannerForm');
if (addBannerForm) {
    addBannerForm.onsubmit = function(e) {
        e.preventDefault();
        bannerModal.style.display = 'none';
        // Here you can add logic to actually add the banner
    };
}
