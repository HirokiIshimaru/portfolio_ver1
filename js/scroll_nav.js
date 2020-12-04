'use strict';

{
    window.addEventListener('scroll',()=>{

        let scroll = window.pageYOffset;
        let menu = document.getElementById('nav_title');
        console.log(window.scrollY);
        if(scroll>=450){
            menu.style.display="flex";
            menu.style.transition="ease 0.5s all";
            menu.style.opacity="1";
            menu.style.transform="translateX(0px)";
        }else{
            menu.style.opacity="0";
            menu.style.transform="translateX(-100px)";
        }
    });
}
