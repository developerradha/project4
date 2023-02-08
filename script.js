var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);   
}
console.log(copyAllButtons);

function buttonColorChange(buttonThings){
    //console.log(buttonThings.value);
    if (buttonThings.value === 'red') {
        buttonRed();
    } else if(buttonThings.value === 'green') {
        buttonGreen();
    } else if (buttonThings.value === 'reset') {
        buttonColorReset();
    } else if(buttonThings.value === 'random') {
        randomColors();
    }
}

function buttonRed(){
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
} 

function buttonGreen(){
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}


function buttonColorReset(){
    for (let i= 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    var choices = ['btn-primary','btn-danger','btn-success','btn-warning'];
    
    for (let i=0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random()*4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
} 

