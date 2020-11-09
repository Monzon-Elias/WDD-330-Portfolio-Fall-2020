//=================================================================  
//========================== ANIMATIONS ===========================
//=================================================================

var d = document.getElementById("dancing"); //store the button in a vabiable
d.innerText = "dance Fred!"; // set the button text
var fred = document.getElementsByClassName('dancer')[0];
fred.style.display = "none";
fred.style.margin = "0";
fred.style.padding = "0";
fred.style.animation = "setup 2s ease-out, dance 2s 2s ease-out infinite";

function dance() {
    fred.style.display = "inline-block";
    if (d.innerText == "dance Fred!") {
        fred.style.animationPlayState = "running";
        d.innerText = "stop Fred";
    }
    else {
        d.innerText = "dance Fred!";
        fred.style.animationPlayState = "paused";
    }
}

//=================================================================  
//========================== TRANSFORMS ===========================
//=================================================================

var f = document.getElementsByClassName("flip-card-inner");
var fb = document.getElementsByClassName("flip-card-back");
var leo = document.getElementsByClassName("leonidas-container");
function flipping() {
    setTimeout(myTimeout1, 500)
    setTimeout(myTimeout2, 1000)
    setTimeout(myTimeout3, 1500)
    setTimeout(myTimeout4, 2500)
    setTimeout(myTimeout5, 5000)
}
function myTimeout1() {
    f[0].style.transform = "rotateY(180deg)";
    fb[0].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout2() {
    f[1].style.transform = "rotateY(180deg)";
    fb[1].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout3() {
    f[2].style.transform = "rotateY(180deg)";
    fb[2].firstElementChild.style.animation = "scaling .4s linear .2s backwards";
}
function myTimeout4() {
    leo[0].style.display = "block";
    leo[0].style.animation = "roar .1s linear both infinite";
}
function myTimeout5() {
    leo[0].style.display = "none";
    for (var i = 0; i < fb.length; i++) {
        f[i].style.transform = "rotateY(0deg)";
    }
}
