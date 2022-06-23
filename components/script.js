var text = `Аренда велосипедов с доставкой`;
var delay = 100; // cкорость
var elem = document.getElementById("rent-title");

var print_text = function (text, elem, delay) {
    if (text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function () {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
print_text(text, elem, delay);



let modal = document.querySelector('.popup-black');
let btn = document.querySelector('.feedback');
let span = document.getElementsByClassName("popup-close")[0];

btn.onclick = () => {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function changeText(ev) {
    if(ev.getAttribute('data-show') === "true") {
        ev.innerText = "Выбрано"
        ev.setAttribute('data-show', "false"); 
    }
    else {
        ev.innerText = "Убрано"
        ev.setAttribute('data-show', "true"); 
    }
}