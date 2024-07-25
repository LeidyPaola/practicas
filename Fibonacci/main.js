const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function numberToText(n, textoUsar) {
    let text = ""
    for (let i = 1; i <= n; i++) {
        text += textoUsar
    }
    return text
}

function fibo(n) {
    let salida = [0, 1]
    if (n == 1) {
        salida = [0]
    } else if (n == 2) {
        salida = [0, 1]
    } else {
        for (let i = 3; i <= n; i++) {
            let dato = salida[i - 2] + salida[i - 3]
            salida.push(dato)
            console.log(salida)
        }
    }
    return salida
}

entrada.addEventListener("input", (evento) => {
    numero = evento.target.value
    console.log(numero)
})

btn.addEventListener("click", () => {
    let secuencia = fibo(numero)
    texto.innerHTML = "" // Limpiar contenido previo
    secuencia.forEach((dato) => {
        let hijo = document.createElement("h3")
        hijo.innerHTML = numberToText(dato, "|")
        texto.appendChild(hijo)
    })
})
