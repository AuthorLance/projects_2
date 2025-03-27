document.querySelectorAll('.project-tile a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only for local links
        if (this.getAttribute('href').startsWith('projects/')) {
            e.preventDefault();
            window.open(this.getAttribute('href'), '_blank');
        }
    });
});