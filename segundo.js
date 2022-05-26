function mensaje(){
    alert("mensaje");
}

window.addEventListener('DOMContentLoaded', () => {
    
    //document.querySelector("button").addEventListener("click",mensaje);
    console.log(location.href);
    
    document.querySelector("button").addEventListener("click",()=>{
        setTimeout(()=>{location.assign("https://www.google.es/")},5000);
        //location.assign("https://www.google.es/");
    });

    document.querySelector("button:nth-child(2)").addEventListener("click",(evt)=>{
        //alert(evt.type);
        const nombre = "Antonio"
        evt.target.textContent = 'Hola';
        document.querySelector("div").innerHTML='<span>Texto generado desde JS</span>'
    });
    document.querySelector('button:nth-of-type(3)').addEventListener("click",(evt)=>{
        evt.target.style.backgroundColor="yellow";
        evt.target.style.width="20vw";
    });
    /*const primero = document.querySelector('article#primero');
    primero.querySelector("div")*/

    document.querySelector('button:last-of-type').addEventListener("click",(evt)=>{
        evt.target.classList.toggle('estilos');
    });
});
