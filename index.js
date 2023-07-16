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
        }, 100);
        cel.classList.add("remove");
        setTimeout(() => {
            cel.classList.remove("show");
            cel.classList.remove("remove");
        }, 300);
        cel.classList.add("show");
    };
}

let lig = document.getElementById('bg');
let l;
for (var n = 0; n < 50; n++) {
    let g = lig.innerHTML;
    lig.innerHTML = g + '<div class="pulsev2"></div>';
}


const d = document.getElementsByClassName("pulsev2");
var m = 0;
var h = -70;
h.toFixed(1);
m.toFixed(1);
var k;
setInterval(frame, 1);

function frame() {
    for (k = 0; k < d.length; k++) {
        if (k <= d.length / 2)
            h -= ((((d.length / 2) - k) * 100) / (d.length));
        if (k > d.length / 2)
            h -= (((k - (d.length / 2)) * 100) / (d.length));
        d[k].style.background = 'hsla(' + (180 + (((((d.length / 2) - k) * ((d.length / 2) - k)) * 720) / (d.length * d.length))) + ',100%,70%)'
        if (h == 700) {
            h = -70;
            m = 0;
        }
        if (h > 300) {
            m = (((h - 300) * (((k - (d.length / 2)) / d.length))) / 10);
            d[k].style.transform = 'rotate(' + ((m * 900) / (h - 300)) + 'deg) scaleX(' + (((h - 300)) / 20) + ')'
        }
        if (h <= 300) {
            d[k].style.transform = 'rotate(0deg) scaleX(' + ((((300 - h)) / 25)) + ')'
        }
        d[k].style.top = (10 + (((m + k) * 90) / d.length)) + '%';
        d[k].style.left = (h / 5) + "%";
        m = 0
        if (k <= d.length / 2)
            h += ((((d.length / 2) - k) * 100) / (d.length));
        if (k > d.length / 2)
            h += (((k - (d.length / 2)) * 100) / (d.length));
        if (k == (d.length - 1) && h != 700) {
            h+=1;
        }
    }
}