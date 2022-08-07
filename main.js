// SIMULACRO APP WEB DE PLANES ALIMENTICIOS.



function saludar() {
    alert("Bienvenido a 4 Your Health. A continuación ingresa tus datos para que armemos tu plan alimenticio.")
}

function despedir() {
    alert("Gracias por confiar en 4 Your Health")
}

saludar();


let nombre = prompt("Ingresa tu nombre");
let edad = Number(prompt("Hola " + nombre + " " + "ingresa tu edad"));
let peso = Number(prompt("Ingresa tu peso en KG"));



// OBJETO APLICADO A LOS PLANES DE ALIMENTACIÓN
const planes = {
    fase1: "\nComas alimentos naturales ricos en vitamina A y C",
    fase2: "\nComas con frecuencia vegetales de color verde, amarillo y anaranjado intenso.",
    fase3: "\nDisminuyas el consumo de embutidos y carnes ahumadas."
}

const nutricionista = [ "Dario Gomez", "Ezequiel Duré", "Franciso Díaz"]


if ((edad <= 20) || (peso <= 55)) {

    alert("Tu nutricionista " + nutricionista[0] + " " + "te recomienda que:" + " " + planes.fase1);
}

else if ((edad <= 40) || (peso <= 65)) {

    alert("Tu nutricionista " + nutricionista[1] + " " + "te recomienda que:" + " " + planes.fase2);
}

else {

    alert("Tu nutricionista " + nutricionista[2] + " " + "te recomienda que:" + " " + planes.fase3);
}

despedir();