let today = new Date();
let date = today.getDate();
monName = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Agosto", "Outubro", "Novembro", "Dezembro")
month = monName [today.getMonth()];
year = today.getFullYear();

setInterval(function calendar() {
    document.getElementById('calendar').textContent = date + " de " + month + " de " + year;
},1000)
calendar();