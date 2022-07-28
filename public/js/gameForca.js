import lista  from "./palavras.js"

const input = document.querySelector('.input')
const enviar = document.querySelector('.enviar')
const chances = document.querySelector('.chances')
let palavra = geraPalavra()
const sep = palavra.split('')
let casa = undefined
let jogadas = 5
let letra =''
let acertos = 0
console.log(palavra)

enviar.addEventListener('click', (e) => {
        
        if (e.target == enviar) {
            
            if (input.value != '') {
                if (input.value.length == 1) {
                    letra = input.value
                    checkLetra()
                    input.value = '';
                    console.log(letra)
                    if (!sep.includes(letra)) {
                        jogadas -= 1
                    }
                    if (jogadas == 0) {
                        chances.innerHTML = `Você perdeu :( <br>
                            A palavra era: ${palavra}`
                        document.body.style.backgroundColor = "red";
                        vitoria()    
                        enviar.disabled = true
                    } else {
                        if (acertos == 5) {
                            vitoria()
                        } else {
                            chances.innerHTML = `Chances restantes: ${jogadas}`
                        }
                        
                        
                    }
                    } else {
                        alert('você deve digitar somente uma letra!')
                        input.value = ''
                }
            }    else {
                alert('Você deve digitar uma letra!')
                }
        }    
})

function vitoria() {
    if (acertos == 5) {
        chances.innerHTML = 'Você ganhou! :)'
        enviar.disabled = true
        document.body.style.backgroundColor = "blue"
    }
}

function checkLetra() {
    if (letra == palavra[0]) {
        casa = document.getElementById('1')
        casa.innerText = letra
        casa.style.backgroundColor = "lightblue"
        acertos += 1
    }
    if (letra == palavra[1]) {
        casa = document.getElementById('2')
        casa.innerText = letra
        casa.style.backgroundColor = "lightblue"
        acertos += 1
    }
    if (letra == palavra[2]) {
        casa = document.getElementById('3')
        casa.innerText = letra
        casa.style.backgroundColor = "lightblue"
        acertos += 1
    }
    if (letra == palavra[3]) {
        casa = document.getElementById('4')
        casa.innerText = letra
        casa.style.backgroundColor = "lightblue"
        acertos += 1
    }
    if (letra == palavra[4]) {
        casa = document.getElementById('5')
        casa.innerText = letra
        casa.style.backgroundColor = "lightblue"
        acertos += 1
    }
}

function random(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
 
function geraPalavra() {
    const aleatorio = random(0, (lista.length - 1))
    let palavra = lista[aleatorio]
    return palavra
}