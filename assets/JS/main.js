
const container = document.querySelector('.container')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const luckPhrase = document.querySelector('.screen2 .luck p')
const button = document.querySelector('.button')

container.addEventListener('click', (e) => {
    let t = e.target

    if (t.classList.contains('cookie')) {
        luckPhrase.innerHTML = phrase(rand())

        clikcToggle()
    }

    if (t.classList.contains('button')) {
        clikcToggle()
    }

})

function clikcToggle() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function phrase(n) {
    const luck = ['Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.', 'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.', 'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.', 'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.', 'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.', 'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.', 'O que me preocupa não é o grito dos maus. É o silêncio dos bons.', 'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.', 'Você precisa fazer aquilo que pensa que não é capaz de fazer.', 'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.', 'Não encontre defeitos, encontre soluções. Qualquer um sabe queixar-se.']

    return luck[n]
}

function rand() {
    return Math.round(Math.random() * 10)
}