window.onload = function() {
    var height = document.documentElement.clientHeight;

document.getElementById("to_both").onclick = function(){
    $("html,body").animate({scrollTop: height}, 1000);
}


var next = document.getElementById("next");
var prew = document.getElementById("prew");
var prew1 = document.getElementById("prew1");
var next1 = document.getElementById("next1");

var slides = document.getElementsByClassName("slides__data");
for (i=0; i<slides.length; i++){
    slides[i].style.zIndex = slides.length - i;
}

next.onclick = function(){
    var activeEl = document.querySelector(".active");
    if(activeEl.nextElementSibling){
        activeEl.style.left = "-130%";
        activeEl.classList.remove("active");
        activeEl.nextElementSibling.classList.add("active");
    }
}
prew.onclick = function(){
    console.log("hi");
    var activeEl = document.querySelector(".active");
    if(activeEl.previousElementSibling){
        activeEl.previousElementSibling.style.left = "7%";
        activeEl.classList.remove("active");
        activeEl.previousElementSibling.classList.add("active");
    }
}

next1.onclick = function(){
    var activeEl = document.querySelector(".showing");
    if(activeEl.nextElementSibling){
        activeEl.style.left = "-130%";
        activeEl.classList.remove("showing");
        activeEl.nextElementSibling.classList.add("showing");
    }
}

prew1.onclick = function(){
    console.log("hi");
    var activeEl = document.querySelector(".showing");
    if(activeEl.previousElementSibling){
        activeEl.previousElementSibling.style.left = "7%";
        activeEl.classList.remove("showing");
        activeEl.previousElementSibling.classList.add("showing");
    }
}
}

