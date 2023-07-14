let items = document.querySelectorAll(".slider .item");
let names = document.querySelectorAll(".slider .item .item-name");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;

    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt
            }) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt
            }) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = "blur(5px)";
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
};
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
};

let navs = document.getElementsByClassName("navs");
let cel = document.getElementById("navitems");
let b = document.getElementsByClassName("menu");

b[0].onclick = function () {
    if (b[0].classList.contains("fa-bars")) {
        b[0].classList.add("zero");
        setTimeout(() => {
            b[0].classList.remove("fa-bars");
            b[0].classList.add("fa-xmark");
            b[0].classList.remove("zero");
        }, 300);
    } else {
        b[0].classList.add("zero");
        setTimeout(() => {
            b[0].classList.remove("fa-xmark");
            b[0].classList.add("fa-bars");
            b[0].classList.remove("zero");
        }, 300);
    }
};

for (var j = 0; j < navs.length; j++) {
    navs[j].onclick = function () {
        b[0].classList.add("zero");
        setTimeout(() => {
            b[0].classList.remove("fa-xmark");
            b[0].classList.add("fa-bars");
            b[0].classList.remove("zero");
        }, 300);
        cel.classList.add("remove");
        setTimeout(() => {
            cel.classList.remove("show");
            cel.classList.remove("remove");
        }, 300);
    };
}
