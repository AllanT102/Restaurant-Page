import aboutIcon from '/src/images/about.png';
import profile from '/src/images/profile.png';
import ramen from '/src/images/ramen.png';

import '/src/styles/homepage.scss';

let content;

export default function homepage() {
    content = document.createElement('div');
    content.append(aboutSection(), reviewsSection(), bestMenuSection());
    content.classList.add('content')

    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        i % 2 === 0 ? children[i].classList.add('right') : children[i].classList.add('left');
    }
    return content;
};

function aboutSection() {
    const section = document.createElement('div');
    const left = document.createElement('div');

    const icon = new Image();
    icon.src = aboutIcon;

    const text = document.createElement('p');
    text.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

    const title = document.createElement('h1');
    title.textContent = "FUMETSU RAMEN"

    section.classList.add('about-section')
    icon.classList.add('section-icon')
    text.classList.add('section-text')
    left.classList.add('about-section-left')
    setTimeout(() => {
        section.classList.add('active-right')
    }, 200)

    left.append(title, text);
    section.append(left, icon);
    return section;
}

function reviewsSection() {
    const section = document.createElement('div');
    section.classList.add('review-section');

    const leftArrow = document.createElement('i');
    const rightArrow = document.createElement('i');
    leftArrow.classList.add('left-arrow', 'arrow');
    rightArrow.classList.add('right-arrow', 'arrow');
    
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card-div')
    const r1 = '"Great service, food, atmosphere and prices make this a special place."';
    const r2 = '"I love brining my kids here."';
    const r3 = '"Ramen hits hard."';
    const r4 = '"The shoyu ramen is crazy good."';
    const r5 = '"Love the staff, they are always super nice."';
    const r6 = '"Dont know what else to say other than SUPER IDOL DE XIAO LONG."';
    const r7 = '"If you scrolled this far, you deserve a cookie"';
    const r8 = '"I love their variety!"';
    const r9 = '"Wow you, really deserve another cookie."';
    cardDiv.append(blankCard(), reviewCard(r1), reviewCard(r2), reviewCard(r3), reviewCard(r4), reviewCard(r5), reviewCard(r6), reviewCard(r7), reviewCard(r8), reviewCard(r9), blankCard());
    
    section.append(leftArrow, cardDiv, rightArrow);
    
    leftArrow.addEventListener('click', () => {
        if (cardDiv.scrollLeft < 3800) cardDiv.scrollBy(500,0);
        // cardDiv.prepend(cardDiv.lastChild)
    });
    rightArrow.addEventListener('click', () => {
        if (cardDiv.scrollLeft > 300) cardDiv.scrollBy(-500,0);
        // cardDiv.append(cardDiv.firstChild);
    });
    return section;
}

function blankCard() {
    const card = document.createElement('div');
    card.classList.add('blank-card')
    return card;
}


function reviewCard(p) {
    const card = document.createElement('div');
    const text = document.createElement('p');
    const profileImg = new Image();
    profileImg.src = profile;
    text.textContent = p;
    card.classList.add('review-card');
    text.classList.add('card-text');
    profileImg.classList.add('profile-img');
    card.append(text, profileImg);
    return card;
}

function bestMenuSection() {
    const section = document.createElement('div');
    const textDiv = document.createElement('div');
    const text = document.createElement('p');
    const img = new Image();
    img.src = ramen;
    text.textContent = "Shoyu is the most popular Tokyo ramen and most likely the ramen you will first come across when visiting a ramen shop. Shoyu means soy sauce and has a clear brown appearance with a deep, rich soy sauce aroma. It's made from chicken bones, beef, pork or seafood is sometimes also used in the broth. The taste is usually a salty and light taste as the broth is clear and the noodles used are usually thin curly noodles. Shoyu ramen is known to be one of the oldest known ramen in Japan which most closely resembles the original Chinese version that first came to Japan. It is our award winning dish.";
    const title = document.createElement('h1');
    title.textContent = "Shoyu Ramen #BestSeller"

    section.classList.add('menu-section')
    img.classList.add('section-icon')
    text.classList.add('section-text')
    textDiv.classList.add('about-section-left')
  
    textDiv.append(title, text);
    section.append(textDiv, img);
    return section;
}

function reveal() {
    const children = content.children;
    for (let i = 0; i < children.length; i++) {
        let child = children[i];

        let height = child.getBoundingClientRect().bottom;
        let windowHeight = window.innerHeight;

        if (height > windowHeight + 200 || height < 200) child.classList.contains('left') ? child.classList.remove('active-left') : child.classList.remove('active-right');
        else if (height > 0 && height < windowHeight && i % 2 === 0) child.classList.add('active-right');
        else if (height > 0 && height < windowHeight && i % 2 !== 0) child.classList.add('active-left');
    }
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
window.addEventListener('load', () => {
    const cardDiv = document.querySelector('.card-div')
    cardDiv.scrollTo(1000,0)
})

