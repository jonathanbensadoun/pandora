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
        // console.log(rocket);
        if(rocket.classList.contains('takeoff')){
            rocket.classList.remove('takeoff');            
        }
        rocket.classList.add('takeoff');
                
    },
    init: function(){
        rocket = document.querySelector('.a-logo');
        // console.log(rocket);
        rocket.addEventListener('click',takeOff.handleClickRocket);
    }
}
const slide ={

}
menuBurger.init();
takeOff.init();