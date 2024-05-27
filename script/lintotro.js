
let estadoLinterna = false;
let sonidoBatman = document.querySelector("#bati_encendido");
let sonidoBoton = document.querySelector("#bati_click");
let batman = document.querySelector("#batman");
let batmanBoton = document.querySelector("#bati_boton");

//evento
//batmanBoton.addEventListener("click",controlarLinterna);
//const son = ()=>{} si tiene un solo parametro se puede obviar el parentesisr

batmanBoton.addEventListener=('click',() =>controlarLinterna())

const controlarLinterna = ()=> {
    if(!estadoLinterna) {
        estadoLinterna = !estadoLinterna;
        sonidoLinterna();
        batman.classList.add("batman_activo"); 
        } else {
           estadoLinterna = !estadoLinterna;
           sonidoLinterna();
           batman.classList.remove("batman_activo");
    }
    
    
} 

const sonidoLinterna=()=>{
    if(sonidoBatman.paused) {
        sonidoBoton.play();
        sonidoBatman.play();
    }else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0; 
    //vuelve el sonido al principio 
}

}