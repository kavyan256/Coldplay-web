// Navbar Hide on Scroll
let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById('navbar');

window.onscroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        navbar.style.top = '0';
    } else {
        navbar.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
};

// Mute/Unmute Video Button
const video = document.getElementById('hero-video');
const muteBtn = document.getElementById('mute-btn');

muteBtn.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        muteBtn.textContent = 'Mute';
    } else {
        video.muted = true;
        muteBtn.textContent = 'Unmute';
    }
});