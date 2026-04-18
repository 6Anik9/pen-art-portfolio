window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.getElementById('main-content');
        
        // Loader Fade Out
        loader.style.transition = 'opacity 0.6s ease';
        loader.style.opacity = '0';
        
        // Show Content
        content.style.display = 'block';
        
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.opacity = '1';
        }, 600);
    }, 2000); // 2-second delay for the sketchbook effect
});