const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")


function pares(n){
// dime si es par o no el numero %2
return n%2==0
}


entrada.addEventListener("input",(evento)=>{
    numero = evento.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    let esPar = pares(numero) // ToDo: tengo que cambiar esta función
        if (esPar){ // mirar que va dentro de este if
            let hijo = document.createElement("h3")
            hijo.innerHTML ="es par"  // mirar que va aqui
            texto.appendChild(hijo)
        }else{
            let hijo = document.createElement("h3")
            hijo.innerHTML ="no es par"  // mirar que va aqui
            texto.appendChild(hijo)
        }

})