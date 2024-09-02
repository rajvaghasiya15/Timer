let hours = 0;
let minutes = 0;
let seconds = 0;

function timer() {
    let input = Number(document.getElementById("input").value);
    hours = Math.floor(input / 3600);
    let minutes1 = hours * 3600;
    let minutes2 = Math.abs(input - minutes1);
    minutes = Math.floor(minutes2 / 60);
    seconds = minutes * 60;
    seconds = minutes2 - seconds;
}

function hourss() {
    timer();
    let span_h = document.getElementById("span_h");
    if (span_h.classList[0] === 'hidden') {
        span_h.classList.remove("hidden");
        span_h.classList.add("visible");
    } else {
        span_h.classList.remove("visible");
        span_h.classList.add("hidden");
    }
    span_h.innerText = hours;
}

function minutess() {
    timer();
    let span_m = document.getElementById("span_m");
    if(span_m.classList[0] === "hidden"){
        span_m.classList.remove("hidden");
        span_m.classList.add("visible");
    } else {
        span_m.classList.remove("visible");
        span_m.classList.add("hidden");
    }
    span_m.innerText= minutes;
}

function secondss() {
    timer();
    let span_s = document.getElementById("span_s");
    if(span_s.classList[0] === "hidden"){
        span_s.classList.remove("hidden");
        span_s.classList.add("visible");
    } else {
        span_s.classList.remove("visible");
        span_s.classList.add("hidden");
    }
    span_s.innerText= seconds;

}



