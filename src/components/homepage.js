import aboutIcon from '/src/images/about.png';

import '/src/styles/homepage.scss';

let content;

export default function homepage() {
    content = document.createElement('div');
    content.append(aboutSection());
    content.classList.add('content')
    return content;
};

function aboutSection() {
    const section = document.createElement('div');

    const icon = new Image();
    icon.src = aboutIcon;

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    section.classList.add('about-section')
    icon.classList.add('section-icon')
    text.classList.add('section-text')
    setTimeout(() => {
        section.classList.add('active')
    }, 200)

    section.append(text, icon);
    return section;
}

function reviewsSection() {
    const section = document.createElement('div');
}

function bestMenuSection() {
    const section = document.createElement('div');
}

function reveal() {
    const children = content.children;
    for (const child of children) {
        let height = child.getBoundingClientRect().top;
        if (height < 500) child.classList.add('active');
    }
}

window.addEventListener('scroll', reveal);


