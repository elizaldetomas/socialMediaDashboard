const preferTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const switchTheme = document.getElementById('input-switch-theme');

const setTheme = color => {
    document.documentElement.setAttribute('site-theme', color);
    localStorage.setItem('theme', color);
    let parentSwitch = switchTheme.parentNode;
    color == 'light'? parentSwitch.classList.add('switchLight'): parentSwitch.classList.remove('switchLight');
}

switchTheme.addEventListener('click', (e) => {
    let temaAlCambiar = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(temaAlCambiar);
});

setTheme(localStorage.getItem('theme') || preferTheme);