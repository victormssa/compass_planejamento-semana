setInterval(function clock() {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    minutes = zero(minutes);
    document.getElementById('hour').textContent = hour + ':' + minutes;

    function zero(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }
},1000)
clock();