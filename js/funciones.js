function progreso(){
    const numero= document.querySelector(".numero");
    
}

function graficar_porcentaje(div_number){
    console.log("Ingresó a la funcion")
    let number = div_number;
    porcentaje= div_number.innerHTML.slice(0,div_number.innerHTML.length-1)
    console.log("El porcentaje es: "+porcentaje)
    let counter=0;
    setInterval(() => {
        if(counter==porcentaje){
            clearInterval();
        }else{
            counter+=1 ;
            div_number.innerHTML=counter+"%";
        }
       
    }, 18);
}