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

setMenuOpening();