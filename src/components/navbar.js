import '/src/styles/navbar.scss';
import initHome from './homepage';
import initMenu from './menu';

export default function navbar() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    navbar.append(createTab("Home"), createTab("Menu"));
    return navbar;
}

function createTab(tabname) {
    const tab = document.createElement('div');
    tab.textContent = tabname;
    tab.classList.add('tab')
    if (tabname === "Home") tab.addEventListener('click', initHome);
    else tab.addEventListener('click', initMenu);
    return tab;
}