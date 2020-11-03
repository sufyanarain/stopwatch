var min = 0;
var sec = 0;
var msec = 0;
var set;


var minheading = document.getElementById("min");
var secheading = document.getElementById("sec");
var msecheading = document.getElementById("msec");

function timer() {
    msec++
    msecheading.innerHTML = msec;

    if (msec >= 100) {
        sec++
        secheading.innerHTML = sec;
        msec = 0;
    }

    if (sec >= 60) {
        min++
        minheading.innerHTML = min;
        sec = 0
    }
}


function start() {

    set = setInterval(timer, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("paus").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("lap").disabled = false;
    // document.getElementById("start").style.backgroundColor = "blue";

}


function stop() {
    clearInterval(set)
    document.getElementById("start").disabled = false;
    document.getElementById("paus").disabled = true;
    document.getElementById("lap").disabled = true;



}
var mdata;

function lap() {

    var m = min;
    var s = sec;
    var ms = msec;
    mdata = document.getElementById("data1");
    var abc = mdata.innerHTML += m + " m: " + s + " s: " + ms + " ms" + "<br>";

}

function reset() {
    minheading.innerHTML = 0;
    secheading.innerHTML = 0;
    msecheading.innerHTML = 0;

    min = 0;
    sec = 0;
    msec = 0;

    stop()
    document.getElementById("start").disabled = false;
    document.getElementById("reset").disabled = true;
    mdata.innerHTML = null;


}