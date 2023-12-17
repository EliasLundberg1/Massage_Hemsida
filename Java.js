//Loggar så att man vet att scripten har laddats
console.log('Script loaded!');

// Kolla om dark mode är aktiverat när sidan laddas
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
    enableDarkMode();
}

//Det som aktiverar dark mode
function enableDarkMode() {
    // Lägg till dark mode-klassen så att hela sida blir i darkmode
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
    document.querySelector('nav').classList.add('dark-mode');
    document.querySelector('section').classList.add('dark-mode');
    document.querySelector('footer').classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

//Det som inaktiverar dark mode
function disableDarkMode() {
    // Ta bort dark mode-klassen så att allt kommer tillbaka till det normala
    document.body.classList.remove('dark-mode');
    document.querySelector('header').classList.remove('dark-mode');
    document.querySelector('nav').classList.remove('dark-mode');
    document.querySelector('section').classList.remove('dark-mode');
    document.querySelector('footer').classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
}

//Funktionen som gör att man kan byta mellan normal mode och dark mode
function toggleDarkMode() {
    // Byt läge för dark mode och kollar om den är på redan eller inte
    if (document.body.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}
