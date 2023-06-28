function digitalClock() {
    var date = new Date(); //current date and time
    var hours = date.getHours(); //current hours
    var minutes = date.getMinutes(); //current minutes
    var seconds = date.getSeconds(); //current seconds

    //Displaying "0" before time elements if less than "10"
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('clock').innerHTML = hours + ":" + minutes + ":" + seconds; 

    setTimeout(digitalClock, 1000); //1 second will be the delay
}

digitalClock();
