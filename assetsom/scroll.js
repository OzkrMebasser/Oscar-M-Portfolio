const navContainerBlur =document.getElementById("navBlur");

function scrollBlurNav(){
    if (window.scrollY > 550){
        navContainerBlur.classList.add("nav-container-blur");
    }else if (window.scrollY < 550){
        navContainerBlur.classList.remove("nav-container-blur")
    }
}
document.addEventListener("scroll", scrollBlurNav);


const ocultarHambNav =document.getElementById("noShow");

function noShowHambNav(){
    if (screenX && screenY < 900){
        ocultarHambNav.classList.remove("nav-container-NoShow")
        console.log("si funciona")
    }
}




// window.onload = function mobile(){
//     if( isMobile.any() ) {
//         document.getElementById('navBlur').style.backgroundColor = "black";
//        alert('Mobile'); 
//     }
// }