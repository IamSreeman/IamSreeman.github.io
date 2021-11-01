function theme_set(toggled) {
    document.getElementById('style-dark').disabled = toggled;
    document.getElementById('style-light').disabled = !toggled;
    
}

function theme_toggle() {
    theme_set(!document.getElementById('style-dark').disabled);
}