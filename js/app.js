let pregunta = prompt('Que estilo de gorra queres? SNAP, TRUCKER o BASEBALL?').toLowerCase()
console.log(pregunta)
let contador = 0
gorras.forEach( (gorra) => {
    if(pregunta === gorra.tipo) {
        contador++
        console.log(contador)
    }
})
let alerta = alert(`Hay ${contador} modelos distintos`)
console.log(`Hay ${contador} modelos distintos`)




//VARIABLES Y SELECCIONADORES
let modelo = document.getElementById('modelo');
let tipo = document.getElementById('tipo');
let minimo = document.getElementById('minimo');
let maximo = document.getElementById('maximo');
let color = document.getElementById('color');

let datosBusqueda = {
    modelo: '',
    tipo: '',
    minimo: '',
    maximo: '',
    color: '',
};

console.log(datosBusqueda);


//EVENT LISTENERS

document.addEventListener('DOMContentLoaded', () => {
    mostrarGorras(gorras);
})

modelo.addEventListener('input', e => {
    datosBusqueda.modelo = e.target.value;
    filtarGorra();
})

tipo.addEventListener('input', e => {
    datosBusqueda.tipo = e.target.value;
    filtarGorra();
})

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtarGorra();
})

maximo.addEventListener('input', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtarGorra();
})

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    filtarGorra();
    console.log(datosBusqueda);
})



//FUNCIONES

function limpiarHTML() {
    // Leer el elemento Resultado
    const contenedor = document.querySelector('#contenedorGorras');

    // limpiar los resultados anteriores
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}


// Esta Funcion muestra las gorras en el html
function mostrarGorras(gorras) {
    //Reset HTML
    limpiarHTML();
    //Seleccionar contenedor de gorras
    const contenedor = document.querySelector('#contenedorGorras');

    //Construir HTML con los datos de la busqueda
    gorras.forEach(gorra => {

        const gorraHTML = document.createElement('div');
        gorraHTML.classList.add('col-sm-12', 'col-md-5', 'col-lg-3', 'my-4');
        gorraHTML.innerHTML = `
            <figure class="galeria">
                <img src="${gorra.img}" class="imgStyle" alt="foto de gorra">
            </figure>
        `;
        contenedor.appendChild(gorraHTML);
    });
}

function error() {
    limpiarHTML();
    
    const contenedor = document.querySelector('#contenedorGorras');

    const errorHTML = document.createElement('div');
    errorHTML.innerHTML = `
    <div class="alert alert-danger text-center" role="alert">
        Ninguna gorra encontrada
    </div>
    `;
    contenedor.appendChild(errorHTML);

    setTimeout(() => {
        errorHTML.remove();
        mostrarGorras(gorras);
    }, 2000);
}

function filtarGorra() {
    const resultado = gorras.filter(filtrarModelo).filter(filtrarTipo).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor);

    if(resultado.length){
        mostrarGorras(resultado);
    } else {
        error();
    }
}

function filtrarModelo(gorra) {
    if(datosBusqueda.modelo){
        return gorra.modelo === datosBusqueda.modelo;
    }
    return gorra;
}

function filtrarTipo(gorra) {
    if(datosBusqueda.tipo){
        return gorra.tipo === datosBusqueda.tipo;
    }
    return gorra;
}

function filtrarMinimo(gorra) {
    if(datosBusqueda.minimo){
        return gorra.precio >= datosBusqueda.minimo;
    }
    return gorra;
}

function filtrarMaximo(gorra) {
    if(datosBusqueda.maximo){
        return gorra.precio <= datosBusqueda.maximo;
    }
    return gorra;
}

function filtrarColor(gorra) {
    if(datosBusqueda.color){
        return gorra.color === datosBusqueda.color;
    }
    return gorra;
}