let turn = true;
let btnClicked = 0;
let btns = document.querySelectorAll('.btn');

btns.forEach(b => {
    b.addEventListener('click', btnClick)
});

function btnClick() {
    if (this.textContent != "") return
    btnClicked++

    if (turn) this.textContent = 'X'
    else this.textContent = 'O'

    //checkWin

    let obj = checkWin()
    if (obj.win) {
        let btns = document.querySelectorAll('.btn')

        btns[obj.pos[0]].style.color = "#cb90a9";
        btns[obj.pos[1]].style.color = "#cb90a9";
        btns[obj.pos[2]].style.color = "#cb90a9";




        setTimeout(() => {
            const div = document.createElement('div')
            div.innerHTML = `Well done  ${this.textContent} Win!! 🏆`
            div.style.background = '#f9fdff'
            div.style.color = '#5573a0'
            div.style.fontFamily = "Anta";
            div.style.fontWeight = '500'
            div.style.fontSize = '25px'
            div.style.width = '200px'
            div.style.height = '120px'
            div.style.border = '3px solid #6b6774'
            div.style.borderRadius = '10px'
            div.style.boxShadow = '1px 1px 4px 1px #cb90a9';
            div.style.fontWeight = '600'
            div.style.textAlign = 'center'
            div.style.display = 'flex'
            div.style.justifyContent = 'center'
            div.style.alignItems = 'center'
            div.style.position = 'absolute'
            div.style.top = '50%'
            div.style.left = '50%'
            div.style.marginTop = '-70px'
            div.style.marginLeft = '-90px'
            document.body.appendChild(div)
            setTimeout(() => {
                div.remove(); // תסיר את הדיב אחרי שנייה
                reset();
            }, 1500); // זמן המתנה במילישניות לאחר כניסה הדיב למסך
        }, 100);

    } else if (obj.isTie) {

        setTimeout(() => {
            const div = document.createElement('div')
            div.innerHTML = ' IS A TIE'
            div.style.background = '#f9fdff'
            div.style.color = '#5573a0'
            div.style.fontFamily = "Anta";
            div.style.fontWeight = '500'
            div.style.fontSize = '25px'
            div.style.width = '200px'
            div.style.height = '120px'
            div.style.border = '3px solid #6b6774'
            div.style.borderRadius = '10px'
            div.style.boxShadow = '1px 1px 4px 1px #cb90a9';
            div.style.fontWeight = '600'
            div.style.textAlign = 'center'
            div.style.display = 'flex'
            div.style.justifyContent = 'center'
            div.style.alignItems = 'center'
            div.style.position = 'absolute'
            div.style.top = '50%'
            div.style.left = '50%'
            div.style.marginTop = '-70px'
            div.style.marginLeft = '-90px'
            document.body.appendChild(div)
            setTimeout(() => {
                div.remove(); // תסיר את הדיב אחרי שנייה
                reset();
            }, 1500); // זמן המתנה במילישניות לאחר כניסה הדיב למסך
        }, 100);
    }

    turn = !turn
}

function reset() {
    let btns = document.querySelectorAll('.btn');
    turn = !turn
    btnClicked = 0;
    btns.forEach(b => {
        b.textContent = "";
        b.style.color = "";
    })
}

function checkWin() {
    let btns = document.querySelectorAll('.btn');
    let obj = { win: false, isTie: false, pos: [] }

    if (btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent != "")
        obj = { win: true, isTie: false, pos: [0, 1, 2] }
    else if (btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent != "")
        obj = { win: true, isTie: false, pos: [3, 4, 5] }
    else if (btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent != "")
        obj = { win: true, isTie: false, pos: [6, 7, 8] }

    else if (btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent != "")
        obj = { win: true, isTie: false, pos: [0, 3, 6] }
    else if (btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent != "")
        obj = { win: true, isTie: false, pos: [1, 4, 7] }
    else if (btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent != "")
        obj = { win: true, isTie: false, pos: [2, 5, 8] }

    else if (btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent != "")
        obj = { win: true, isTie: false, pos: [0, 4, 8] }
    else if (btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent != "")
        obj = { win: true, isTie: false, pos: [2, 4, 6] }
    else if (btnClicked == 9)
        obj.isTie = true;

    return obj;
}