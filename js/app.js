//VARIABLES Y SELECCIONADORES
    //Seleccionadores del filtro de busqueda
let modelo = document.getElementById('modelo');
let tipo = document.getElementById('tipo');
let minimo = document.getElementById('minimo');
let maximo = document.getElementById('maximo');
let color = document.getElementById('color');
    //Seleccionadores de Inicio y Creacion de cuenta
let botonInicio = document.getElementById('inicioSesion');
let botonCrearCuenta = document.getElementById('crearCuenta');
    //Seleccionar contenedor de gorras
let contenedorGorras = document.getElementById('contenedorGorras');
    //Seleccionar contenedor carrito
let contenedorCarrito = document.getElementById('contenedorCarrito');
let contenedorTotalPagar = document.getElementById('totalPagar');
let botonEliminarCarrito = document.getElementById('btnEliminarCarrito');

let usuario = document.getElementById('usuario').value;
let contrasenia = document.getElementById('contrasenia').value;
let btnEliminar;

let datosBusqueda = {
    modelo: '',
    tipo: '',
    minimo: '',
    maximo: '',
    color: '',
};
let articulosCarrito = [];
let usuariosDB = [];

//EVENT LISTENERS
//EVENTO DE CARGA DE PAGINA
document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    usuariosDB = JSON.parse(localStorage.getItem('usuarios')) || [];

    mostrarGorras();
    mostrarCarrito();
});

// EVENTOS DE FILTRO DE GORRAS
modelo.addEventListener('input', e => {
    datosBusqueda.modelo = e.target.value;
    filtarGorra();
});

tipo.addEventListener('input', e => {
    datosBusqueda.tipo = e.target.value;
    filtarGorra();
});

minimo.addEventListener('input', e => {
    datosBusqueda.minimo = parseInt(e.target.value);
    filtarGorra();
});

maximo.addEventListener('input', e => {
    datosBusqueda.maximo = parseInt(e.target.value);
    filtarGorra();
});

color.addEventListener('input', e => {
    datosBusqueda.color = e.target.value;
    filtarGorra();
});

//EVENTOS DE USUARIO
botonInicio.addEventListener('click', verificarUsuario);
botonCrearCuenta.addEventListener('click', almacenarUsuario);

botonEliminarCarrito.addEventListener('click', eliminarCarrito);


//CLASSES
class UI {
    //Imprime el carrito en el DOM
    carritoHTML() {
        articulosCarrito.map( gorra => {
            const divCarrito = document.createElement('div');
            divCarrito.classList.add('d-flex', 'align-items-center', 'justify-content-center', 'm-2', 'p-1');
            divCarrito.setAttribute("id", "carritoEntero");
            divCarrito.innerHTML = `
                <img src="${gorra.img}" class="w-25 rounded" alt="foto de gorra">
                <p class="text-center text-light flex-grow-1">${gorra.nombre} - Precio: $ ${gorra.precio}</p>
                <button type="button" id="${gorra.id}-gorra" onclick="eliminarGorra(${gorra.id})" class="btn btn-danger rounded eliminar-gorra">X</button>
            `;
            contenedorCarrito.appendChild(divCarrito);

            btnEliminar = document.getElementById(`${gorra.id}-gorra`);
            btnEliminar.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.parentNode.remove();
        });

        });
    };

    //Imprime mensajes en el DOM
    imprimirMensaje(mensaje, tipo, lugar) {
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;

        tipo === 'error' ? divMensaje.classList.add('alert', 'alert-danger', 'border', 'border-danger', 'text-center', 'border-3', 'text-danger', 'mt-3') : divMensaje.classList.add('alert', 'alert-success', 'border', 'border-success', 'text-center', 'border-3', 'text-success', 'mt-3');

        lugar.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 2000);
    };

    limpiarHTML() {
        // limpiar los resultados anteriores
        while(contenedorGorras.firstChild) {
            contenedorGorras.removeChild(contenedorGorras.firstChild);
        };
    };

    // Elimina las gorras del carrito en el DOM
    vaciarCarrito() {
        while(contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        };
    };


    // Imprime gorras en el DOM
    imprimirGorras(gorra) {
        const gorraHTML = document.createElement('div');
        gorraHTML.classList.add('row', 'justify-content-center', 'align-items-center', 'col-sm-12', 'col-md-5', 'col-lg-3', 'my-4');
        gorraHTML.innerHTML = `
            <div class="card text-center" style="width: 18rem;">
                <img src="${gorra.img}" class="card-img-top" alt="foto de gorra">
                <div class="card-body">
                    <h5 class="card-title">${gorra.nombre}</h5>
                    <p class="mt-1 mb-1"> Precio: $ ${gorra.precio}</p>
                    <p class="mt-1 mb-1"> Tipo: ${gorra.tipo}</p>
                    <p class="mt-1 mb-1"> Color: ${gorra.color}</p>
                    <button type="button" id="${gorra.id}" class="btn btn-dark mt-3">Agregar al Carrito</button>
                </div>
            </div>
        `;
        contenedorGorras.appendChild(gorraHTML);
        
        // EVENTO PARA AGREGAR ITEMS AL CARRITO
        const boton = document.getElementById(`${gorra.id}`);
        boton.addEventListener('click', (e) => {
            e.preventDefault()
            agregarCarrito(gorra);

            swal({
                title: "Muy bien!",
                text: "Gorra Agregada al Carrito",
                icon: "success",
                timer: 1500,
            });
        });
    };
};

const ui = new UI;


//FUNCIONES

//______________________________________________________________________________
//Esta parte agrega y valida que los datos de los nuevos usuarios sean correctos
function almacenarUsuario(e) {
    e.preventDefault();

    let usuarioNuevo = document.getElementById('usuarioNuevo').value;
    let contraseniaNuevo = document.getElementById('contraseniaNuevo').value;
    let emailNuevo = document.getElementById('emailNuevo').value;

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const emailValido = validarEmail(emailNuevo);

    if (usuarioNuevo === '' || usuarioNuevo.length <= 5 || contraseniaNuevo.length < 8 || contraseniaNuevo === '' || !emailValido) {
        ui.imprimirMensaje('Datos Incorrectos', 'error', mensaje);
    } else {
        agregarUsuario();

}

function agregarUsuario() {
    // Verificar si el localStorage ha sido eliminado
    if (!localStorage.getItem('usuarios')) {
        usuariosDB = [];
    }

    const nuevoUsuario = {
        usuario: usuarioNuevo,
        contrasenia: contraseniaNuevo,
        email: emailNuevo,
    };

    usuariosDB.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosDB));

    let formulario = document.getElementById('form');
    formulario.reset ();
    ui.imprimirMensaje('Usuario Agregado Correctamente', 'exito', mensaje);


    setTimeout(() => {
        location.reload();
    }, 2500);
    };
};


function verificarUsuario(e) {
    e.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));
    let usuarioEncontrado = usuarios.find( user => user.usuario === usuario && user.contrasenia === contrasenia);

    if(usuarioEncontrado) {
        ui.imprimirMensaje('Iniciando sesion...', 'exito', formInicioSesion);

        const userId = document.getElementById('checkUser');

        const divUser = document.createElement('p');
        divUser.innerHTML = `Hola ${usuario}`;
        userId.appendChild(divUser);

        const formInicio = document.getElementById('formInicioSesion');
        formInicio.reset();
        return;
    };  
    
    usuarios.some( user => user.usuario === usuario && contrasenia != user.contrasenia) ? ui.imprimirMensaje('Contraseña incorrecta', 'error', formInicioSesion) : ui.imprimirMensaje('Usuario No Encontrado, Cree Su Cuenta', 'error', formInicioSesion);
};


//___________________________________________
// Esta Funcion muestra las gorras en el html
async function mostrarGorras() {
    //Reset HTML
    ui.limpiarHTML();   

    try {
        const response = await fetch("../JSON/db.json");
        const data = await response.json();
        const gorras = data;
        //Construir HTML con los datos de la busqueda
        gorras.forEach(gorra => {
            ui.imprimirGorras(gorra);            
        });
    } catch (err) {
        return console.error(err);
    };
};

//____________________________________________
// Estas funciones hacen la logica del carrito
function agregarCarrito(gorra) {
    // Verificar si el localStorage ha sido eliminado
    if (!localStorage.getItem('carrito')) {
        articulosCarrito = [];
    };
    
    articulosCarrito.push(gorra);
    ui.vaciarCarrito();
    ui.carritoHTML();
    sumaTotalCarrito(articulosCarrito);
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
};

function mostrarCarrito() {
    if (!articulosCarrito || articulosCarrito.length === 0) {
        return;
    };

    ui.vaciarCarrito();
    //ui.limpiarTotal()
    ui.carritoHTML();
    sumaTotalCarrito(articulosCarrito);
};

function sumaTotalCarrito(carrito){
    
    let total = 0;

    carrito.forEach(producto => {
        total += producto.precio;
    });

    const divTotal = document.createElement('div');
        divTotal.classList.add('m-2','mt-3','p-1');
        divTotal.id = 'totalPagar'
        divTotal.innerHTML = `
            <hr class="text-light">
            <p class="text-center text-light flex-grow-1">Total a pagar $ ${total}</p>
        `;
        contenedorCarrito.appendChild(divTotal);
};

function eliminarCarrito() {
    
    if(localStorage.getItem('carrito')) {
        localStorage.removeItem('carrito');
        const carritoEntero = document.getElementById('contenedorCarrito');
        carritoEntero.remove();
    };
};

function eliminarGorra(gorra){
    const id = gorra;
    articulosCarrito = articulosCarrito.filter( gorro => gorro.id != id);
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
    sumaTotalCarrito(articulosCarrito)
}

//_______________________________________________________________________
// Esta parte crea la funcion de filtrar la gorra y cada parte del filtro
async function filtarGorra() {
    //Reset HTML
    ui.limpiarHTML();     

    try {
        const response = await fetch("../JSON/db.json");
        const data = await response.json();
        const gorras = data;
        const resultado = gorras.filter(filtrarModelo).filter(filtrarTipo).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor);
        if (resultado.length > 0) {
            resultado.forEach((gorra) => {
                ui.imprimirGorras(gorra);
            });
        } else {
            ui.limpiarHTML();
            ui.imprimirMensaje('Ninguna Gorra Encontrada', 'error', contenedorGorras);
        };
    } catch (err) {
        return console.error(err);
    };
};

function filtrarModelo(gorra) {
    if(datosBusqueda.modelo){
        return gorra.modelo === datosBusqueda.modelo;
    };
    return gorra;
};

function filtrarTipo(gorra) {
    if(datosBusqueda.tipo){
        return gorra.tipo === datosBusqueda.tipo;
    };
    return gorra;
};

function filtrarMinimo(gorra) {
    if(datosBusqueda.minimo){
        return gorra.precio >= datosBusqueda.minimo;
    };
    return gorra;
};

function filtrarMaximo(gorra) {
    if(datosBusqueda.maximo){
        return gorra.precio <= datosBusqueda.maximo;
    };
    return gorra;
};

function filtrarColor(gorra) {
    if(datosBusqueda.color){
        return gorra.color === datosBusqueda.color;
    };
    return gorra;
};