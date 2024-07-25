const botones = document.querySelectorAll("#btn")
const pantalla = document.querySelector("#pantalla")

console.log(pantalla.textContent)
botones.forEach( boton =>{
    boton.addEventListener("click",()=>{
        const botonApretado = boton.textContent
        if (pantalla.textContent == "Error!" || pantalla.textContent =="Infinity"){
            pantalla.textContent ="0"
        }
        else {
            if(botonApretado =="AC"){
                pantalla.textContent = "0"
            } 
            else if (botonApretado =="del"){
                if (pantalla.textContent.length == 1){
                    pantalla.textContent ="0"
                }else{
                    pantalla.textContent = pantalla.textContent.slice(0,-1)
                }
            } 
            else if (botonApretado =="="){
                try {
                    pantalla.textContent = eval(pantalla.textContent)
                } catch (error) {
                    pantalla.textContent = "Error!"
                }
            } 
            else{
                if(pantalla.textContent =="0"){
                    pantalla.textContent = botonApretado
                }else{
                    pantalla.textContent = pantalla.textContent + botonApretado
                }
            }
        }
    })
})