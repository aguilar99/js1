function mensaje(){
    alert("mensaje");
}

window.addEventListener('DOMContentLoaded', () => {
    
    document.querySelector("button").addEventListener("click",mensaje);

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
});
