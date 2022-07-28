const campo = document.getElementById('campo');
let venceu = false;
let i = 0
let btn;
const casa1 = document.querySelector('#casa1')
const casa2 = document.querySelector('#casa2')
const casa3 = document.querySelector('#casa3')
const casa4 = document.querySelector('#casa4')
const casa5 = document.querySelector('#casa5')
const casa6 = document.querySelector('#casa6')
const casa7 = document.querySelector('#casa7')
const casa8 = document.querySelector('#casa8')
const casa9 = document.querySelector('#casa9')

campo.addEventListener('click', function(e) {
    btn = e.target;
    if (btn.classList.contains('casa')) {
        if (btn.textContent == '') {
            if (i >= 9) {
                vitoria()
                return
            }
            btn.textContent = 'X';
            i += 1;
            vitoria()
            if (i < 9 && venceu == false) {

                bot()
            } else {
                vitoria()
            }
            
            console.log(i)
            vitoria()
            if (venceu == true) {
                i = 10
            }
            
            
        }
         
    }
});

function random(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function bot() {
    casaBot = random(1, 9)
    console.log(`casa do bot:${casaBot}`)
    while (true) {
        if (casaBot == 1) {
            btn = document.getElementById('casa1')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 2) {
            btn = document.getElementById('casa2')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 3) {
            btn = document.getElementById('casa3')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 4) {
            btn = document.getElementById('casa4')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 5) {
            btn = document.getElementById('casa5')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 6) {
            btn = document.getElementById('casa6')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 7) {
            btn = document.getElementById('casa7')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 8) {
            btn = document.getElementById('casa8')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }
        if (casaBot == 9) {
            btn = document.getElementById('casa9')
            if (btn.textContent == '') {
                btn.textContent = 'O'
                i +=1
                break
            } else {
                casaBot = random(1, 9)
                continue
            }
        }

    }
}

const resultado = document.querySelector('.resultado')

function vitoria(){
    if (casa1.textContent == 'X' & casa2.textContent == 'X' & casa3.textContent === 'X') {
        resultado.textContent = 'j1 venceu!';
        venceu = true
        resultado.style.background = 'blue';

    }
    if (casa4.textContent =='X' && casa5.textContent == 'X' && casa6.textContent == 'X') {
        resultado.textContent = 'j1 venceu!';
        venceu = true
        resultado.style.background = 'blue';
    }
    if (casa7.textContent =='X' && casa8.textContent == 'X' && casa9.textContent == 'X') {
        resultado.textContent = 'j1 venceu!'
        venceu = true
        resultado.style.background = 'blue';

    }
    if (casa1.textContent =='X' && casa4.textContent == 'X' && casa7.textContent == 'X') {
        resultado.textContent = 'j1 venceu!';
        venceu = true
        resultado.style.background = 'blue';

    }
    if (casa2.textContent =='X' && casa5.textContent == 'X' && casa8.textContent == 'X') {
        resultado.textContent = 'j1 venceu!'
        venceu = true
        resultado.style.background = 'blue';
    }
    if (casa3.textContent =='X' && casa6.textContent == 'X' && casa9.textContent == 'X') {
        resultado.textContent = 'j1 venceu!'
        venceu = true
        resultado.style.background = 'blue';
    }
    if (casa1.textContent =='X' && casa5.textContent == 'X' && casa9.textContent == 'X') {
        resultado.textContent = 'j1 venceu!'
        venceu = true
        resultado.style.background = 'blue';
    }
    if (casa3.textContent =='X' && casa5.textContent == 'X' && casa7.textContent == 'X') {
        resultado.textContent = 'j1 venceu!'
        venceu = true
        resultado.style.background = 'blue';
    }
    ////////////////////////////////////////////////////////////////
    if (casa1.textContent == 'O' & casa2.textContent == 'O' & casa3.textContent === 'O') {
        resultado.textContent = 'j2 venceu!';
        venceu = true
        resultado.style.background = 'red';

    }
    if (casa4.textContent =='O' && casa5.textContent == 'O' && casa6.textContent == 'O') {
        resultado.textContent = 'j2 venceu!';
        resultado.style.background = 'red';
        venceu = true
    }
    if (casa7.textContent =='O' && casa8.textContent == 'O' && casa9.textContent == 'O') {
        resultado.textContent = 'j2 venceu!'
        venceu = true
        resultado.style.background = 'red';
    }
    if (casa1.textContent =='O' && casa4.textContent == 'O' && casa7.textContent == 'O') {
        resultado.textContent = 'j2 venceu!';
        venceu = true
        resultado.style.background = 'red';

    }
    if (casa2.textContent =='O' && casa5.textContent == 'O' && casa8.textContent == 'O') {
        resultado.textContent = 'j2 venceu!'
        venceu = true
        resultado.style.background = 'red';
    }
    if (casa3.textContent =='O' && casa6.textContent == 'O' && casa9.textContent == 'O') {
        resultado.textContent = 'j2 venceu!'
        venceu = true
        resultado.style.background = 'red';
    }
    if (casa1.textContent =='O' && casa5.textContent == 'O' && casa9.textContent == 'O') {
        resultado.textContent = 'j2 venceu!'
        venceu = true
        resultado.style.background = 'red';
    }
    if (casa3.textContent =='O' && casa5.textContent == 'O' && casa7.textContent == 'O') {
        resultado.textContent = 'j2 venceu!'
        venceu = true
        resultado.style.background = 'red';
    }
    if (i == 9) {
        if (!venceu) {
            resultado.textContent = 'empate!'
            resultado.style.background = 'green';
        }
        

    }
}

const reset = document.querySelector('#reset')
reset.addEventListener('click', function() {
    i = 0;
    casa1.textContent = '';
    casa2.textContent = '';
    casa3.textContent = '';
    casa4.textContent = '';
    casa5.textContent = '';
    casa6.textContent = '';
    casa7.textContent = '';
    casa8.textContent = '';
    casa9.textContent = '';
    i = 0;
    venceu = false
    resultado.textContent = 'resultado'
    resultado.style.background = '';
})