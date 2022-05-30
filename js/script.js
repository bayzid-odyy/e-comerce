const bar = document.querySelector("#bar");
const menu = document.querySelector("#nav_links");

bar.addEventListener("click", mobileMenu);

function mobileMenu(){
    menu.classList.toggle("active");
}


const hideMobileMenu = () => {
    const menuBar = document.querySelector(".active");

    if(window.innerWidth <= 768 && menuBar){
        menu.classList.remove("active");
    
    }
}

menu.addEventListener("click", hideMobileMenu)