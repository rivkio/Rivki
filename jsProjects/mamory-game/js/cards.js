import { random, shuffle } from './utils.js';

export function createGameImageArray(length) {
    //given 8 elements-> 4 different cards * 2

    let arr = [];
    while (arr.length < length / 2) {
        const index = random(1, 22);
        const src = `asset/dalle_${index}.png`;
        if (!arr.includes(src)) {
            arr.push(src);
        }
    }

    arr = arr.concat(arr);

    // arr = arr.sort((a, b) => Math.random() - 0.5);

    arr = shuffle(arr);
    return arr;
}

