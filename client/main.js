const buttonSegunda = document.querySelector('.main__section--segunda');
const buttonTerca = document.querySelector('.main__section--terca');
const buttonQuarta = document.querySelector('.main__section--quarta');
const buttonQuinta = document.querySelector('.main__section--quinta');
const buttonSexta = document.querySelector('.main__section--sexta');
const buttonSabado = document.querySelector('.main__section--sabado');
const buttonDomingo = document.querySelector('.main__section--domingo');
const segunda = document.querySelector('a');
const terca = document.querySelector('b');
const quarta = document.querySelector('c');
const quinta = document.querySelector('d');
const sexta = document.querySelector('e');
const sabado = document.querySelector('f');
const domingo = document.querySelector('g');

buttonSegunda.addEventListener('click', () => {
    terca.classList.add('off')
    segunda.classList.remove('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
});

buttonTerca.addEventListener('click', () => {
    segunda.classList.add('off')
    terca.classList.remove('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
});