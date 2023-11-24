const menuBurger = {
    handleClickMenuBurger: function() {
            const menu = document.querySelector('.container-burger-menu');
            menu.classList.toggle('hidden');
    },
    init: function(){
        const btnMenuBurger = document.querySelector('.btn-menu');
        btnMenuBurger.addEventListener('click',menuBurger.handleClickMenuBurger);



    }


}
menuBurger.init();