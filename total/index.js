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
        cel.classList.add("show");
    };
}

let lig = document.getElementById('lig');
let l;
for (var h = 0; h < 95; h++) {
    let g = lig.innerHTML;
    lig.innerHTML = g + '<div class="ligs"></div>';
}

setInterval(getCursor, 100)

function getCursor() {
    var w = window.innerWidth;
    let d = document.getElementsByClassName('ligs');
    var t = null;
    if (w >= 1024)
        t = 20;

    if (w < 1024 && w > 800)
        t = 15;

    if (w <= 800)
        t = 10;

    for (let j = 0; j < d.length; j++) {
        d[j].style.right = (25 + (j * 50) / d.length) + '%';
        if (j <= ((d.length) / 4)) {
            d[j].style.animationDelay = ((((d.length / 4) - j) * t) / (d.length)) + 's';
        }

        if (j < ((d.length) / 2) && j > ((d.length) / 4)) {
            d[j].style.animationDelay = (((j - (d.length / 4)) * ((3 * t) / 4)) / (d.length)) + 's';
            d[j].style.background = 'linear-gradient(131.5deg, rgb(350,25,25)3%' + (90 - ((((((d.length) / 2) - 1 - j) * 1200) / (d.length)))) + '%, rgb(145, 145, 145) 0% 97% )'
        }

        if (j >= ((d.length) / 2) && j < ((3 * d.length) / 4))
            d[j].style.animationDelay = (((((3 * d.length) / 4) - j) * ((3 * t) / 4)) / (d.length)) + 's';

        if (j > ((3 * d.length) / 4))
            d[j].style.animationDelay = (((j - ((3 * d.length) / 4)) * t) / (d.length)) + 's';

        if (j >= ((d.length) / 2))
            d[j].style.background = 'rgb(350,25,25) '

    }
}