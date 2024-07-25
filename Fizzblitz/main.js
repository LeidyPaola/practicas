const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function bltfitz(n){
    salida =[]
    for ( let i = 1; i<=n; i++){
        if (i%3 == 0 & i%5 == 0){
            salida.push("FitzBitz")
        } else if( i%3 == 0){
            salida.push("Fitz")
        } else if (i%5 == 0){
            salida.push("Blitz")
        }
    }
    return salida
}


entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    //let secuencia = ["hola","mundo"]
    let secuencia = bltfitz(numero) // ToDo: tengo que cambiar esta función, liso cambiado
    secuencia.forEach((dato)=>{
        let hijo = document.createElement("h3")
        hijo.innerHTML = dato // ToDo:tengo que cambiar esta función, Listo cambiado
        texto.appendChild(hijo)
    })
})