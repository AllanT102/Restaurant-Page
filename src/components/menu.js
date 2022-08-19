import '/src/styles/menu.scss';
import omurice from '/src/images/omurice.png';
import ramen from '/src/images/ramen.png';
import sushi from '/src/images/sushi.png';
import desert from '/src/images/desert.png';

function menu() {
    const content = document.createElement('div');
    content.classList.add('menu-content');
    content.append(createMenuElement(ramen, "Shoyu Ramen"), createMenuElement(ramen, "Vegetarian Ramen"), createMenuElement(sushi, "Sushi Assortment"), createMenuElement(omurice, "Omurice"), createMenuElement(desert, "Mango Pudding"), createMenuElement(desert, "Passionfruit Pudding"));
    return content;
}

function createMenuElement(img, text) {
    const itemDiv = document.createElement('div');
    const desc = document.createElement('p');
    desc.textContent = text;
    const icon = new Image();
    icon.src = img;
    itemDiv.append(desc, icon);

    itemDiv.classList.add('item-div');
    return itemDiv;
}

function initMenu() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.append(menu());
}

export default initMenu