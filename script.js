let [seconds, minutues, hourse] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let timer = null;

function stopWatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutues++;
        if(minutues == 60){
            minutues = 0;
            hourse++;

        }
    }

    let h = hourse < 10 ? "0" + hourse: + hourse;
    let m = minutues < 10 ? "0" +minutues: + minutues;
    let s = seconds < 10 ? "0" + seconds: + seconds;

    displayTime.innerText = h + ":" + m + ":" + s;
}

function watchStart(){
    if(timer !== null ){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop(){
   clearInterval(timer);
}
function watchRestert(){
    clearInterval(timer);
    [seconds, minutues, hourse] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}