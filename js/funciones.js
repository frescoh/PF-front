function graficar_porcentaje(div_porcentaje){
    let numero_porcentaje = div_porcentaje.innerHTML.slice(0,div_porcentaje.innerHTML.length-1);
    let counter=0;
    setInterval(() => {
       if(counter==numero_porcentaje){
        clearInterval;
       }else{
        counter+=1;
        div_porcentaje.innerHTML=counter+"%" 
       }
    }, 30);
}