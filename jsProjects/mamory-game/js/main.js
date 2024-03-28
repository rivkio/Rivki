import { createGameImageArray } from "./cards.js";


const grid = document.getElementById('grid-container');

let card1 = null;

function flip(event) {
    const card = event.currentTarget; //div

    if (card === card1) {
        //        card.classList.add('wobble');
        return; //ignore 
    }

    card.classList.toggle('flip');

    if (card1 == null) {
        console.log("1st time");
        card1 = card;
    } else {
        console.log("2nd time")
        //check for match!
        if (card1.dataset.id == card.dataset.id) {
            card.removeEventListener('click', flip);
            card1.removeEventListener('click', flip);
            card1 = null;
        } else {
            setTimeout(() => {
                card.classList.remove('flip');
                card1.classList.remove('flip');
                card1 = null;
            }, 1000)
        }
    }
}

const images = createGameImageArray(8);

images.forEach(s => {
    const div = document.createElement('div');
    div.classList.add('card')
    div.addEventListener('click', flip);
    const back = document.createElement('img');
    back.classList.add('back')
    back.src = 'asset/question_mark.png';
    back.alt = 'card-back';

    const front = document.createElement('img');
    front.classList.add('front');
    front.src = s;
    front.alt = s
        .replace('.asset/', '')
        .replace('.png', '');
    //div.setAttribute('data-id', front.alt);
    div.dataset.id = front.alt;

    div.appendChild(back);
    div.appendChild(front);

    grid.appendChild(div);
});
