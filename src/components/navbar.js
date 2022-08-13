import '/src/styles/navbar.scss';

export default function component() {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');
    
    navbar.append(createTab("Home"), createTab("Menu"));
    return navbar;
}

function createTab(tabname) {
    const tab = document.createElement('div');
    tab.textContent = tabname;
    tab.classList.add('tab')
    return tab;
}