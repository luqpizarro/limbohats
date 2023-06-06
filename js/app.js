let gorra = prompt('Que modelo de gorra buscas?');

console.log(`la gorra que buscas es ${gorra}`);


// Condicional

if (gorra === 'snap' || gorra === 'baseball' || gorra === 'trucker') {
    alert(`te mostraremos gorras ${gorra}`);
    console.log(`te mostraremos gorras ${gorra}`);
} else {
    alert('Ese modelo no esta disponible');
    console.log('Ese modelo no esta disponible');
};


// Condicional calculador de interes

let precio = parseInt(prompt('Precio de la gorra?'));
let cuotas = parseInt(prompt('En cuantas cuotas? 3, 6 o 9'));
const tresCuotas = 1.1;
const seisCuotas = 1.2;
const nueveCuotas = 1.3;

function precioFinal (precio, interes) {
    let resultado = precio * interes
    alert(`El valor total es de ${resultado}`)
}

function obtenerCuotas() {
    if (
        cuotas === 3 ||
        cuotas === 6 ||
        cuotas === 9 ||
        cuotas === 'tres' ||
        cuotas === 'seis' ||
        cuotas === 'nueve' ||
        cuotas === 'Tres' ||
        cuotas === 'Seis' ||
        cuotas === 'Nueve'
    ) {
        if (cuotas === 3 || cuotas === 'tres' || cuotas === 'Tres') {
        precioFinal(precio, tresCuotas);
        } else if (cuotas === 6 || cuotas === 'seis' || cuotas === 'Seis') {
        precioFinal(precio, seisCuotas);
        } else if (cuotas === 9 || cuotas === 'nueve' || cuotas === 'Nueve') {
        precioFinal(precio, nueveCuotas);
        }
    } else {
        console.error('Elija un formato válido');
        cuotas = parseInt(prompt('En cuantas cuotas? 3, 6 o 9'));
        obtenerCuotas();
    }
}

obtenerCuotas();





// Ciclos for

let tiposGorra = ['snap', 'baseball', 'trucker'];

console.log(tiposGorra);

for (let i = 0; i < tiposGorra.length; i++) {
    const modelos = tiposGorra[i];
    console.log(modelos);
};

