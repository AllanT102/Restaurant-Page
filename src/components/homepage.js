import aboutIcon from '/src/images/about.png';

import '/src/styles/homepage.scss';

let content;

export default function homepage() {
    content = document.createElement('div');
    content.append(aboutSection(), reviewsSection(), bestMenuSection(), bestMenuSection(), bestMenuSection());
    content.classList.add('content')

    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        i % 2 === 0 ? children[i].classList.add('right') : children[i].classList.add('left');
    }
    return content;
};

function aboutSection() {
    const section = document.createElement('div');

    const icon = new Image();
    icon.src = aboutIcon;

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    section.classList.add('about-section')
    icon.classList.add('section-icon')
    text.classList.add('section-text')
    setTimeout(() => {
        section.classList.add('active-right')
    }, 200)

    section.append(text, icon);
    return section;
}

function reviewsSection() {
    const section = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    section.classList.add('review-section')
    text.classList.add('section-text');

    section.append(text);
    return section;
}

function bestMenuSection() {
    const section = document.createElement('div');

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    
    section.classList.add('review-section')
    text.classList.add('section-text');

    section.append(text);
    return section;
}

function reveal() {
    const children = content.children;
    console.log(children.length);
    for (let i = 1; i < children.length; i++) {
        let child = children[i];
        if (child === content.firstChild) continue;
        let height = child.getBoundingClientRect().top;
        if (height < 900 && i % 2 === 0) child.classList.add('active-right');
        else if (height < 900 && i % 2 !== 0) child.classList.add('active-left');
        else child.classList.remove('active-left');
    }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);


