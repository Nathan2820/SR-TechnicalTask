let btnOne = document.getElementById("modal-button-one");
let btnTwo = document.getElementById("modal-button-two");
let modal = document.getElementById("modal");
let span = document.getElementById("close");
let input = document.getElementById("text-input");
let header = document.getElementById("header");

btnOne.onclick = function() {
    modal.style.display = "block";
}

btnTwo.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

input.onkeyup = function() {
    header.innerHTML = "Hi, I'm " + input.value;
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}