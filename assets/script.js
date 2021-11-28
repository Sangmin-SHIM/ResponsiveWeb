function setMenuOpening() {

    let burger = document.querySelector('#burger'),
        menu = document.querySelector('#right-header');

    burger.onclick = function(e) {

        let target = e.currentTarget;

        if (target.classList.contains('close')) {

            target.classList.remove('close');
            menu.classList.remove('open');

        } else {

            target.classList.add('close');
            menu.classList.add('open');
        }
    }
}


function button1(){
    const card1 = document.querySelector(".card1");
    const button1 = document.querySelector("#button1");

     button1.addEventListener('click',()=>{
        if(card1.classList.contains('card1_button')){
         card1.classList.remove('card1_button');
        
        } else {
            card1.classList.add('card1_button');
        }
     })
}




function button2(){
    const card2 = document.querySelector(".card2");
    const button2 = document.querySelector("#button2");

     button2.addEventListener('click',()=>{
        if(card2.classList.contains('card2_button')){
         card2.classList.remove('card2_button');
        
        } else {
            card2.classList.add('card2_button');
        }
     })
}

function button3(){
    const card3 = document.querySelector(".card3");
    const button3 = document.querySelector("#button3");

     button3.addEventListener('click',()=>{
        if(card3.classList.contains('card3_button')){
         card3.classList.remove('card3_button');
        
        } else {
            card3.classList.add('card3_button');
        }
     })
}




// Execution
setMenuOpening();
button1();
button2();
button3();