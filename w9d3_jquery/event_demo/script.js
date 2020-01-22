var el = document.getElementById("c");

function capturingOnClick1(ev) {
    el.innerHTML += "DIV event capture from a<br>";
}

function capturingOnClick2(ev) {
    el.innerHTML += "A event capture from b<br>";
    // ev.preventDefault();
    // ev.stopPropagation();
}

function bubblingOnClick1(ev) {
    el.innerHTML += "DIV event bubbling<br>";
}

function bubblingOnClick2(ev) {
    el.innerHTML += "A event bubbling<br>";
}

// The 3rd parameter useCapture makes the event listener capturing (false by default)



document.getElementById("a").addEventListener("click", capturingOnClick1);
document.getElementById("b").addEventListener("click", capturingOnClick2);
document.getElementById("a").addEventListener("click", bubblingOnClick1);
document.getElementById("b").addEventListener("click", bubblingOnClick2);


