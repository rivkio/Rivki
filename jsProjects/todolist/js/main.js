import { Shopping } from "./shopping.js";
import { ShoppingList } from "./shoppingList.js";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm';

const inputName = document.getElementById('input-name');
const addButton = document.getElementById('btn-add');
const shevi = document.getElementById('shopping-list');


const shoppingList = new ShoppingList();

// inputName.addEventListener('input', function () {
//     // הגדרת הצבע של ה־input בעת הקלדה
//     this.style.backgroundColor = '#cb90a9';
// });

addButton.addEventListener('click', (e) => {
    const name = inputName.value;

    const shopping = new Shopping(nanoid(), name);
    shoppingList.add(shopping);
    console.log(shopping);
    inputName.value = "";

    render();
});


function render() {
    shevi.innerHTML = "";
    shoppingList.array.forEach(s => {

        const li = document.createElement('li');
        li.classList = 'liClass'
        const form = document.createElement('form')
        form.classList.add()
        form.classList = 'form2';

        const input = document.createElement('input');
        input.type = 'text';
        input.classList.add;
        input.classList = 'listInput';
        input.required = true;
        input.placeholder = 'Product';
        input.value = s.name;


        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.classList.add('deleteBtn');
        deleteButton.classList.add('bx', 'bx-trash');

        deleteButton.addEventListener('click', () => {
            shoppingList.remove(s.id);
            render();
        });


        const favoriteButton = document.createElement('button');
        favoriteButton.type = 'button';
        favoriteButton.className = 'favBtn';
        favoriteButton.innerHTML = s.favorite ? '<i class="bx bxs-heart"></i>' : '<i class="bx bx-heart"></i>';
        favoriteButton.addEventListener('click', () => {
            //save to array:
            shoppingList.toggleFavorite(s.id);
            //show the updated html:
            render();
        });

        // const icon = c.favorite ? 'bi-star-fill' : 'bi-star';
        // favoriteButton.innerHTML = ` ${icon};


        form.appendChild(input);
        form.appendChild(deleteButton);
        form.appendChild(favoriteButton);


        li.appendChild(form);


        shevi.appendChild(li);
    });
}

render();