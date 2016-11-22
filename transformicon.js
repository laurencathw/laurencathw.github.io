

var hamburgerButton = document.getElementById('hamburgerButton');
var tf = false;
hamburgerButton.addEventListener('click', function(event){
    
    event.preventDefault(); // stops normal HTML functionality allows us to add our own functions without conflicts

    var barTop = document.getElementById('barTop');
    
    if(tf == true) {
        //do opposite here
        hamburgerAnimationBack();
        

    } else {
        hamburgerAnimation();
}
   

});

function hamburgerAnimation() {
    
    barTop.style.transform = 'rotate(45deg)';
    document.getElementById("barTop").style.top = "14px";

    barMiddle.classList.add('hidden');

    barBottom.style.transform = 'rotate(-45deg)';
    document.getElementById("barBottom").style.top = "0px";

    tf = true;

    //requestAnimationFrame(hamburgerAnimation);
}

function hamburgerAnimationBack() {
    
    barTop.style.transform = 'rotate(0deg)';
    document.getElementById("barTop").style.top = "0px";

    barMiddle.classList.remove('hidden');
    document.getElementById("barMiddle").style.top = "0px";

    barBottom.style.transform = 'rotate(0deg)';
    document.getElementById("barBottom").style.top = "0px";

    tf = false;
}

function hamburgerButtonAnimation() {
    
    document.getElementById("barTop").style.top = "0px";

    document.getElementById("barBottom").style.top = "0px";
}

