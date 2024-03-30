function paginaCargada(){
    const botonMenu = document.querySelector('#boton-menu');
    const navegacion = document.querySelector("#navegacion");
    const botonCerrar = document.querySelector("#boton-cerrar");
    botonMenu.addEventListener('click',function(evento){
        navegacion.style.display = "flex";
        document.body.style.overflowY = "hidden";
    });
    botonCerrar.addEventListener("click",function(){
        navegacion.removeAttribute("style");
        document.body.removeAttribute("style");
    });
    // console.log(botonMenu)
}
window.addEventListener('DOMContentLoaded',paginaCargada);