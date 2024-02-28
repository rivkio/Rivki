import { Shopping } from "./shopping.js";
import { ShoppingList } from "./shoppingList.js";
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid@5.0.6/+esm';

const inputName = document.getElementById('input-name');
const addButton = document.getElementById('btn-add');
const shevi = document.getElementById('shopping-list');


const shoppingList = new ShoppingList();

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
        deleteButton.classList.add;
        deleteButton.classList = 'deleteBtn'
        deleteButton.innerHTML = '<i class="bi bi-trash3 fs-2 text-white"></i>';
        deleteButton.addEventListener('click', () => {

            shoppingList.remove(s.id);
            render();
        })



        const favoriteButton = document.createElement('button');
        favoriteButton.type = 'button';
        favoriteButton.classList.add;
        favoriteButton.classList = 'favBtn'

        // const icon = c.favorite ? 'bi-star-fill' : 'bi-star';
        // favoriteButton.innerHTML = `<i class="bi ${icon} fs-2 text-white"></i>`;
        favoriteButton.addEventListener('click', () => {

            shoppingList.toggleFavorite(s.id);

            render();
        })

        form.appendChild(input);
        form.appendChild(deleteButton);
        form.appendChild(favoriteButton);


        li.appendChild(form);


        shevi.appendChild(li);
    });
}

render();