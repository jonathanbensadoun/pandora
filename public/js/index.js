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
        // rocket = document.querySelector('.a-logo');
        rocket= event.target
        // console.log(rocket);
        
        rocket.classList.add('takeoff');

                // possé un event en fin anamtion animationend
    },
    handleEndAnimation: function(event){
        const divAnimated = event.target;
        divAnimated.classList.remove('takeoff')
    },
    init: function(){
        rocket = document.querySelector('.a-logo');
        // console.log(rocket);
        rocket.addEventListener('click',takeOff.handleClickRocket);
        rocket.addEventListener('animationend',takeOff.handleEndAnimation)
    }
}
const slide ={

}
menuBurger.init();
takeOff.init();