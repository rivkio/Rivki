// array mapping:
const divs = [1, 2, 3, 4]
    .map(a => {
        const div = document.createElement('div');
        div.innerText = `${a}`;
        return div;
    });

divs.forEach(div => document.body.append(div));



['a', 'b', 'c', 'd']
    .forEach((item) => console.log(item));

['a', 'b', 'c', 'd']
    .forEach((item, index) => console.log(index + ")" + item));
//0) a
//1) b
['a', 'b', 'c', 'd'].forEach()
['a', 'b', 'c', 'd']
    .forEach((item, i) => {
        document.body.innerHTML +=
            `<div style='background: ${i % 2 == 0 ? 'black' : 'white'}'>
                    ${item}
            </div>`;
    });



let hello = '123';

[1, 2, 3, 4].forEach((item, index) => {
    document.body.innerHTML += `${hello} ${item}`
})

[1, 2].map((a, index) => a + 1)