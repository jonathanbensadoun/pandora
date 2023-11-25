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
const takeOff ={
    rocket : null,
    handleClickRocket: function(event){
        event.preventDefault();
        rocket = document.querySelector('.a-logo');
        console.log(rocket);
        rocket.classList.add('takeoff')
        rocket.classlits.remove('takeoff')
    },
    init: function(){
        rocket = document.querySelector('.a-logo');
        console.log(rocket);
        rocket.addEventListener('click',this.handleClickRocket);
    }
}
const slide ={

}
menuBurger.init();
takeOff.init();