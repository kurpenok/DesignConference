var counter = 0;
var counter_speaker = 0;

document.getElementById("header").style.height = window.innerHeight + "px";

function menu(params) {
    if (counter == 0){
        var menu = document.getElementById("menu");
        var head = document.getElementById("header");
        var modal = document.getElementById("modal-menu")
        modal.style.animation = "show 1s";
        modal.style.opacity = 1;
        modal.style.display = "block";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/close.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(60%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(60%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(60%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(60%)";
        head.style.backgroundColor = "#998f00";
        counter++;
        document.onmousewheel=document.onwheel=function(){ 
            return false;
        };
    }else{
        var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.animation = "back 1s";
        modal.style.opacity = 0;
        menu.src = "images/menu.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(100%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(100%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(100%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(100%)";
        head.style.backgroundColor = "#ffef00";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
        };
    }
};

function link(params) {
    var head = document.getElementById("header");
        var menu = document.getElementById("menu");
        var modal = document.getElementById("modal-menu")
        modal.style.display = "none";
        menu.style.zIndex = "999";
        modal.style.zIndex = "1";
        menu.src = "images/menu.png";
        modal.style.filter = "brightness(100%)";
        document.getElementById("message").style.transitionProperty = "filter";
        document.getElementById("message").style.filter = "brightness(100%)";
        document.getElementById("header-second").style.transitionProperty = "filter";
        document.getElementById("header-second").style.filter = "brightness(100%)";
        document.getElementById("header-third").style.transitionProperty = "filter";
        document.getElementById("header-third").style.filter = "brightness(100%)";
        document.getElementById("header-four").style.transitionProperty = "filter";
        document.getElementById("header-four").style.filter = "brightness(100%)";
        head.style.backgroundColor = "#ffef00";
        counter--;
        document.onmousewheel=document.onwheel=function(){ 
            return true;
    };
}

function next(params) {
    var speaker_1 = document.getElementById("speaker-1");
    var speaker_2 = document.getElementById("speaker-2");
    var speaker_3 = document.getElementById("speaker-3");
    var sergey_modal = document.getElementsByClassName("modal-sergey-speaker");
    var maria_modal = document.getElementsByClassName("modal-maria-speaker");
    var yana_modal = document.getElementsByClassName("modal-yana-speaker");
    var close = document.getElementsByClassName("modal-close")
    speaker_1.src = "images/sergey.png";
    speaker_2.src = "images/maria.png";
    speaker_3.src = "images/yana.png";
    counter_speaker++;
    speaker_1.onclick = function(){
        sergey_modal.style.display = "block";
    }
    speaker_2.onclick = function(){
        maria_modal.style.display = "block";
    }
    speaker_3.onclick = function(){
        yana_modal.style.display = "block";
    }
    // close.onclick = 
}
function prev(params) {
    var speaker_1 = document.getElementById("speaker-1");
    var speaker_2 = document.getElementById("speaker-2");
    var speaker_3 = document.getElementById("speaker-3");
    var fllip_modal = document.getElementsByClassName("modal-fillip-speaker");
    var alexandra_modal = document.getElementsByClassName("modal-alexandra-speaker");
    var alexey_modal = document.getElementsByClassName("modal-alexey-speaker");
    speaker_1.src = "images/fillip.png";
    speaker_2.src = "images/alexandra.png";
    speaker_3.src = "images/alexey.png";
    speaker_1.onclick = function(){
        sergey_modal.style.display = "block";
    }
    speaker_2.onclick = function(){
        maria_modal.style.display = "block";
    }
    speaker_3.onclick = function(){
        yana_modal.style.display = "block";
    }
}

function speaker_modal() {
    var modal = document.getElementById("modal-speaker");
    modal.style.display = "block";
    document.onmousewheel=document.onwheel=function(){ 
        return false;
    };
    var close = document.getElementsByClassName("modal-close");
    close.onclick = function(){
            modal.style.display = "none";
            document.onmousewheel=document.onwheel=function(){ 
                return true;
            };
        }
}

function tab1(params) {
    document.getElementById("tab1").style.backgroundColor = "#ffef00";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab2").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab2(params) {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "#ffef00";
    document.getElementById("tab3").style.backgroundColor = "white";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab3").style.borderColor = "#ffef00";
};
function tab3(params) {
    document.getElementById("tab1").style.backgroundColor = "white";
    document.getElementById("tab2").style.backgroundColor = "white";
    document.getElementById("tab3").style.backgroundColor = "#ffef00";
    document.getElementById("tab1").style.borderColor = "#ffef00";
    document.getElementById("tab2").style.borderColor = "#ffef00";
};

function year1(params) {
    document.getElementById("year1").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year2(params) {
    document.getElementById("year2").style.backgroundColor = "#ffef00";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year3(params) {
    document.getElementById("year3").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year4").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
    document.getElementById("year4").style.borderColor = "#ffef00";
};
function year4(params) {
    document.getElementById("year4").style.backgroundColor = "#ffef00";
    document.getElementById("year2").style.backgroundColor = "white";
    document.getElementById("year3").style.backgroundColor = "white";
    document.getElementById("year1").style.backgroundColor = "white";
    document.getElementById("year2").style.borderColor = "#ffef00";
    document.getElementById("year3").style.borderColor = "#ffef00";
    document.getElementById("year1").style.borderColor = "#ffef00";
};