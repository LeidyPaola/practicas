// Práctica 1: Tipo de dato
document.getElementById("btn1").addEventListener("click", function() {
    let input = document.getElementById("dataInput").value;
    let tipo = typeof(input);

    if (!isNaN(input) && input !== '') {
        tipo = 'number';
    } else if (input.toLowerCase() === 'true' || input.toLowerCase() === 'false') {
        tipo = 'boolean';
    }

    document.getElementById("output1").innerText = `El tipo de dato es: ${tipo}`;
});

// Práctica 2: Condicionales
document.getElementById("btn2").addEventListener("click", function() {
    let variable = document.getElementById("conditionalInput").value;
    let resultado;

    if (!isNaN(variable) && variable !== '') {
        resultado = variable * 8;
    } else if (typeof(variable) === "string" && variable !== '') {
        resultado = "Estoy concatenando " + variable;
    } else {
        resultado = "No es ni string ni number";
    }

    document.getElementById("output2").innerText = resultado;
});

// Práctica 3: Cambio de fondo
const btn3 = document.getElementById("btn3");

function random(numero) {
    return Math.floor(Math.random() * (numero + 1));
}

btn3.addEventListener("click", () => {
    const rdnColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.background = rdnColor;
});

// Práctica 4: Número primo
document.getElementById("btn4").addEventListener("click", function() {
    let numero = parseInt(document.getElementById("primoInput").value);
    let esPrimo = true;

    if (numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    if (esPrimo) {
        document.getElementById("output4").innerText = `El número ${numero} es primo.`;
    } else {
        document.getElementById("output4").innerText = `El número ${numero} no es primo.`;
    }
});
