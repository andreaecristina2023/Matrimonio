let startY = 0;
document.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; });
document.addEventListener('touchend', (e) => {
    const endY = e.changedTouches[0].clientY;
    if (endY - startY > 100 && window.scrollY === 0) location.reload();
});