export function showHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'flex';
}

export function hideHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'none';
}