const campo = document.getElementById('campo');
let i = 0;
let venceu = false;

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
        if (i % 2 === 0) {
            if (btn.textContent == '') {
                if (i >= 9) {
                    vitoria()
                    return
                }
                btn.textContent = 'X';
                i += 1;
                console.log(i)
                vitoria()
                if (venceu == true) {
                    i = 10
                }
            }
        }
         else {
            if (btn.textContent == ''){
                if (i >= 9) {
                    vitoria()
                    return
                }
                btn.textContent = 'O';
                i += 1;
                console.log(i) 
                vitoria()
                if (venceu == true) {
                    i = 10
                }
            }
            
        }
    }
});

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