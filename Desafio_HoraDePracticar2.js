//1
let listaGenerica = [];

//2
let lenguagesDeProgramacion = ["JavaScript", "C", "C#", "Kotlin", "Python"];

//3
lenguagesDeProgramacion.push("Java", "Ruby", "GoLang");

//4
function mostrarLenguajes() {
    for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

//5
function mostrarLenguajesEnOrdenInverso() {
    for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
        console.log(lenguagesDeProgramacion[i]);
    }
}

//6
function calcularPromedioDeElementosEnLaLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return "el promedio es  " + (suma / lista.length);
}

//7
function mostarNumerosMayorYMenorDeLaLista(lista) {
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    console.log("Mayor: " + mayor + ", Menor: " + menor);
}

//8
function sumarElementosDeLaLista(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return "La suma de los elementos es: " + suma;
}

//9
function devolverIndicesDeElementosEnLista(lista, elemento) {
    let indices = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === elemento) {
            indices.push(i);
        }
    }
    return indices.length > 0 ? indices : "Elemento no encontrado";
}

//10
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        return "Las listas deben tener el mismo tamaño";
    }
    let listaCombinada = [];
    for (let i = 0; i < lista1.length; i++) {
        listaCombinada.push(lista1[i] + lista2[i]);
    }
    return listaCombinada;
}

//11
function elevarAlCuadrado(lista) {
    let listaCuadrados = [];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrados.push(lista[i] * lista[i]);
    }
    return listaCuadrados;
}
