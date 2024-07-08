// console.log("hola mundo");
// numero = 3 
// typeof(numero);
// console.log("el tipo de dato es:", typeof(numero));

// cadenaDeTexto = "hola mundo";
// console.log("el tipo de dato es", typeof(cadenaDeTexto));

// booleano = true;
// console.log("the data type is: ", typeof(booleano));


// variable = 8;

// if(typeof(variable) == "number"){
//     resultado = variable*8
// }

// else if (typeof(variable) == "string"){
//     resultado = "estoy concatenando" + variable
// } else{
//     resultado = " no es ni sting ni number"
// }

// console.log(resultado)


// const btn = document.querySelector("button");

// function random(numero){
//     return Math.floor(Math.random()*(numero +1))
// }

// btn.addEventListener("click", ()=>{
//     const rdnColor = `rgb(${random(225)},${random(225)},${random(225)})`
//     document.body.style.background = rdnColor;
// });


numero = 5

// if (numero%2 !=0){
//     if (numero%3 !=0){
//         if(numero%4 !=0){
//             console.log("es priomo")
//         } else {
//             console.log("no es primo")
//         }
//     } else {
//         console.log("no es primo")
//     }
// }else{
//     console.log("no es primo")
// }




if(numero % 2 ==0){
    if (numero ==2){
        console.log("el 2 es primo")
    } else {
        console.log("el numero 2 no es primo")
    }
}else{
    if(numero % 3==0){
        if(numero== 3){
            console.log(" el 3 es numero primo")
        }else {
            console.log ("")
        }
    } else {
        if (numero % 5 ==0){
            if(numero ==5){
                console.log("el 5 si es primo")
            } else {
                console.log("el numero no es primo")
            }         
        }else {
            if( numero % 7 ==0){
                if(numero == 7){
                    console.log(" el 7 es primo")
                } else{
                    console.log("el numero no es primo")
                }
            }
        }
    } 
}