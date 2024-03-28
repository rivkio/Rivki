const url = 'https://rickandmortyapi.com/api/character/?page=1';

const rickAndMorty = document.getElementById('mortyAndRick-container');


async function fetchRickMorty() {
    // rickAndMorty.innerHTML = null;
    const url = 'https://rickandmortyapi.com/api/character/?page=1';

    const res = await fetch(url);

    const json = await res.json();

    console.log(json);

    json.results.forEach(a => {
        const div = document.createElement('div');
        div.classList = 'box';

        const name = document.createElement('h2');
        name.innerText = a.name;

        const species = document.createElement('p');
        species.classList = 'paragraph1';
        species.innerHTML = a.species;

        const origin = document.createElement('p');
        origin.classList = 'paragraph2';
        origin.innerText = a.origin.name;

        const image = document.createElement('img');
        image.classList = 'photo';
        image.src = a.image ?? 'images/placeholder.jpg';


        div.appendChild(origin);
        div.appendChild(species);
        div.appendChild(name);
        div.appendChild(image);

        rickAndMorty.appendChild(div);
    });
}

fetchRickMorty();
