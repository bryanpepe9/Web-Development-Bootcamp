var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        var currentLetter = this.innerHTML

        makeSound(currentLetter)   
        
        buttonAnimation(currentLetter)

    })    
}

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key)

});

function makeSound(key) {
    switch(key) {
        case 'w':
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case 'a':
            var kickBass = new Audio("./sounds/kick-bass.mp3")
            kickBass.play();
            break;

        case 's':
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case 'd':
            var tomDrum1 = new Audio("./sounds/tom-1.mp3")
            tomDrum1.play();
            break;

        case 'j':
            var tomDrum2 = new Audio("./sounds/tom-2.mp3")
            tomDrum2.play();
            break;

        case 'k':
            var tomDrum3 = new Audio("./sounds/tom-3.mp3")
            tomDrum3.play();
            break;

        case 'l':
            var tomDrum4 = new Audio("./sounds/tom-4.mp3")
            tomDrum4.play();
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add('pressed');

    setTimeout(function() {
        activeButton.classList.remove('pressed');
    }, 100);d
}


