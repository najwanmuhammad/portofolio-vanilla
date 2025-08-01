const darkMode = () => {
    const themeButtons = document.querySelectorAll('#theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On Mount
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToogle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    };

    // Event Listeners
    themeButtons.forEach(btn => 
        btn.addEventListener('click', handleThemeToogle)
    );

};

export default darkMode;