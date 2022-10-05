//DOM Elements
const activityForm = document.getElementById('activityForm');
const cardContainerSegunda = document.querySelector('#segunda');
const cardContainerTerca = document.querySelector('#terca');
const cardContainerQuarta = document.querySelector('#quarta');
const cardContainerQuinta = document.querySelector('#quinta');
const cardContainerSexta = document.querySelector('#sexta');
const cardContainerSabado = document.querySelector('#sabado');
const cardContainerDomingo = document.querySelector('#domingo');
const activityInput = activityForm['activity'];
const dayInput = activityForm['day'];
const timeInput = activityForm['time'];

const buttonSegunda = document.querySelector('.main__section--segunda');
const buttonTerca = document.querySelector('.main__section--terca');
const buttonQuarta = document.querySelector('.main__section--quarta');
const buttonQuinta = document.querySelector('.main__section--quinta');
const buttonSexta = document.querySelector('.main__section--sexta');
const buttonSabado = document.querySelector('.main__section--sabado');
const buttonDomingo = document.querySelector('.main__section--domingo');
const segunda = document.querySelector('.a');
const terca = document.querySelector('.b');
const quarta = document.querySelector('.c');
const quinta = document.querySelector('.d');
const sexta = document.querySelector('.e');
const sabado = document.querySelector('.f');
const domingo = document.querySelector('.g');
const validatorSegunda = true;

const activities = JSON.parse(localStorage.getItem("activities")) || [];

const addActivity = (activity, day, time) => {
    activities.push({
        activity,
        day,
        time
    });
    
    localStorage.setItem("activities", JSON.stringify(activities));
    
    return { activity, day, time };
};

const createActivityElement = ({activity, day, time}) => {
    /*
    li(card),
    div(card__time card__time--segunda),
    p(),
    div(card__info),
    div(card__info--segunda),
    p(),
    button()
    */
    if (day == 'segunda') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--segunda');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--segunda');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerSegunda.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
  
    }
    if (day == 'terça') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--terca');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--terca');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerTerca.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
    if (day == 'quarta') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--quarta');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--quarta');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerQuarta.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
    if (day == 'quinta') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--quinta');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--quinta');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerQuinta.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
    if (day == 'sexta') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--sexta');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--sexta');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerSexta.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
    if (day == 'sabado') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--sabado');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--sabado');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerSabado.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
    if (day == 'domingo') {
        // Create Elements
        const activityLi = document.createElement('li');
        activityLi.setAttribute('class', 'card');
        
        const activityDiv1 = document.createElement('div');
        activityDiv1.setAttribute('class', 'card__time card__time--domingo');
        
        const activityTimeText = document.createElement('p');
        
        const activityDiv2 = document.createElement('div');
        activityDiv2.setAttribute('class', 'card__info');
        
        const activityDiv3 = document.createElement('div');
        activityDiv3.setAttribute('class', 'card__info--domingo');
        
        const activityDescriptionText = document.createElement('p');
        
        const activityButton = document.createElement('button');
        activityButton.setAttribute('class', 'activityRemoveButton');
        
        // Fill the content
        activityDescriptionText.innerText = activity;
        activityTimeText.innerText = time;
        activityButton.innerText = 'Apagar';
        
        // Add to the DOM
        cardContainerDomingo.appendChild(activityLi);
        activityLi.appendChild(activityDiv1);
        activityDiv1.append(activityTimeText);
        activityLi.appendChild(activityDiv2);
        activityDiv2.appendChild(activityDiv3);
        activityDiv2.append(activityDescriptionText);
        activityDiv2.appendChild(activityButton);
    }
} 

activities.forEach(createActivityElement);

activityForm.onsubmit = (e) => {
    e.preventDefault();
    alert('Item enviado.');
    
    const newActivity = addActivity(
        activityInput.value,
        dayInput.value,
        timeInput.value
    );
    
    createActivityElement(newActivity);
    activityInput.value = "";
    dayInput.value = "";
    timeInput.value = "";
}

function test() {
    alert('test');
}

function clickSegunda() {
    buttonSegunda.classList.toggle('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.remove('active')
    segunda.classList.toggle('off')
    terca.classList.add('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
}

function clickTerca() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.toggle('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.remove('active')
    terca.classList.toggle('off')
    segunda.classList.add('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
}

function clickQuarta() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.toggle('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.remove('active')
    quarta.classList.toggle('off')
    segunda.classList.add('off')
    terca.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
}

function clickQuinta() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.toggle('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.remove('active')
    quinta.classList.toggle('off')
    segunda.classList.add('off')
    quarta.classList.add('off')
    terca.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
}

function clickSexta() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.toggle('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.remove('active')
    sexta.classList.toggle('off')
    segunda.classList.add('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    terca.classList.add('off')
    sabado.classList.add('off')
    domingo.classList.add('off')
}

function clickSabado() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.toggle('active')
    buttonDomingo.classList.remove('active')
    sabado.classList.toggle('off')
    segunda.classList.add('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    terca.classList.add('off')
    domingo.classList.add('off')
}

function clickDomingo() {
    buttonSegunda.classList.remove('active')
    buttonTerca.classList.remove('active')
    buttonQuarta.classList.remove('active')
    buttonQuinta.classList.remove('active')
    buttonSexta.classList.remove('active')
    buttonSabado.classList.remove('active')
    buttonDomingo.classList.toggle('active')
    domingo.classList.toggle('off')
    segunda.classList.add('off')
    quarta.classList.add('off')
    quinta.classList.add('off')
    sexta.classList.add('off')
    sabado.classList.add('off')
    terca.classList.add('off')
}