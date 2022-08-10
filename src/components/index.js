import Icon from '/src/images/test.jpg'

function component() {
    const content = document.createElement('div');
    const myIcon = new Image();
    myIcon.src = Icon;
    const text = document.createElement('p');
    text.textContent = "this restaurant is amazing";
    content.append(myIcon, text);
    return content;
}

document.body.appendChild(component());