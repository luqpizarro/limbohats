
//VARIABLES Y SELECCIONADORES
let modelo = document.getElementById('modelo');
let tipo = document.getElementById('tipo');
let minimo = document.getElementById('minimo');
let maximo = document.getElementById('maximo');
let color = document.getElementById('color');
let botonInicio = document.getElementById('inicioSesion');
let botonCrearCuenta = document.getElementById('crearCuenta')



let datosBusqueda = {
    modelo: '',
    tipo: '',
    minimo: '',
    maximo: '',
    color: '',
};

let articulosCarrito = [];
let usuariosDB = [];



//CLASSES
class UI {
    imprimirMensaje(mensaje, tipo, lugar) {
        const divMensaje = document.createElement('div');
        divMensaje.textContent = mensaje;

        tipo === 'error' ? divMensaje.classList.add('alert', 'alert-danger', 'border', 'border-danger', 'text-center', 'border-3', 'text-danger', 'mt-3') : divMensaje.classList.add('alert', 'alert-success', 'border', 'border-success', 'text-center', 'border-3', 'text-success', 'mt-3');

        lugar.appendChild(divMensaje)

        setTimeout(() => {
            divMensaje.remove();;
        }, 2000);
    }

    limpiarHTML() {
        // Leer el elemento Resultado
        const contenedor = document.querySelector('#contenedorGorras');
    
        // limpiar los resultados anteriores
        while(contenedor.firstChild) {
            contenedor.removeChild(contenedor.firstChild);
        }
    }

    // Elimina las gorras del carrito en el DOM
    vaciarCarrito() {

        while(contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }   
}

const ui = new UI;

//EVENT LISTENERS
//EVENTO DE CARGA DE PAGINA
document.addEventListener('DOMContentLoaded', () => {
    articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    usuariosDB = JSON.parse(localStorage.getItem('usuarios')) || [];

    mostrarGorras(gorras);
})


// EVENTOS DE FILTRO DE GORRAS
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

//EVENTOS DE USUARIO
botonInicio.addEventListener('click', verificarUsuario);
botonCrearCuenta.addEventListener('click', almacenarUsuario);

//EVENTOS DE CARRITO

//FUNCIONES

//Esta parte agrega y valida que los datos de los nuevos usuarios sean correctos
function almacenarUsuario(e) {
    e.preventDefault()

    let usuarioNuevo = document.getElementById('usuarioNuevo').value;
    let contraseniaNuevo = document.getElementById('contraseniaNuevo').value;
    let emailNuevo = document.getElementById('emailNuevo').value;

    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const emailValido = validarEmail(emailNuevo)

    if (usuarioNuevo === '' || usuarioNuevo.length <= 5 || contraseniaNuevo.length < 8 || contraseniaNuevo === '' || !emailValido) {
        console.log ('datos incorrecto')
        ui.imprimirMensaje('Datos Incorrectos', 'error', mensaje)
    } else {
        agregarUsuario()

}

function agregarUsuario() {
    // Verificar si el localStorage ha sido eliminado
    if (!localStorage.getItem('usuarios')) {
        usuariosDB = [];
    }

    const nuevoUsuario = {
        usuario: usuarioNuevo,
        contrasenia: contraseniaNuevo,
        email: emailNuevo
    };

    usuariosDB.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosDB))

    let formulario = document.getElementById('form')
    formulario.reset ()
    ui.imprimirMensaje('Usuario Agregado Correctamente', 'exito', mensaje)


    setTimeout(() => {
        location.reload()
    }, 2500);
    }
}


function verificarUsuario(e) {
    e.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let contrasenia = document.getElementById('contrasenia').value;
    let usuarios = JSON.parse(localStorage.getItem('usuarios'));

    let usuarioEncontrado = usuarios.find( user => user.usuario === usuario && user.contrasenia === contrasenia)

    if(usuarioEncontrado) {
        console.log(`Hola ${usuario}`)
        ui.imprimirMensaje('Iniciando sesion...', 'exito', formInicioSesion)

        const userId = document.getElementById('checkUser')

        const divUser = document.createElement('p')
        divUser.innerHTML = `Hola ${usuario}`
        userId.appendChild(divUser)

        const formInicio = document.getElementById('formInicioSesion')
        formInicio.reset()
        return;
    } 
    
    usuarios.some( user => user.usuario === usuario && contrasenia != user.contrasenia) ? ui.imprimirMensaje('Contraseña incorrecta', 'error', formInicioSesion) : ui.imprimirMensaje('Usuario No Encontrado, Cree Su Cuenta', 'error', formInicioSesion);
}

// Esta Funcion muestra las gorras en el html
function mostrarGorras(gorras) {
    //Reset HTML
    ui.limpiarHTML();   
    //Seleccionar contenedor de gorras
    const contenedor = document.querySelector('#contenedorGorras');

    //Construir HTML con los datos de la busqueda
    gorras.forEach(gorra => {

        const gorraHTML = document.createElement('div');
        gorraHTML.classList.add('row', 'justify-content-center', 'align-items-center', 'col-sm-12', 'col-md-5', 'col-lg-3', 'my-4');
        gorraHTML.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${gorra.img}" class="card-img-top" alt="foto de gorra">
                <div class="card-body">
                    <h5 class="card-title">${gorra.nombre}</h5>
                    <p> Precio: $ ${gorra.precio}</p>
                    <p> Tipo: ${gorra.tipo}</p>
                    <p> Color: ${gorra.color}</p>
                    <button type="button" id="${gorra.id}" class="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        `;
        contenedor.appendChild(gorraHTML);

        // EVENTO PARA AGREGAR ITEMS AL CARRITO
        const boton = document.getElementById(`${gorra.id}`)
        boton.addEventListener('click', () => {
            agregarCarrito(gorra)

            swal({
                title: "Muy bien!",
                text: "Gorra Agregada al Carrito",
                icon: "success",
                timer: 1500
            });
        })
    });
}

function agregarCarrito(gorra) {
    // Verificar si el localStorage ha sido eliminado
    if (!localStorage.getItem('carrito')) {
        articulosCarrito = [];
    }

    articulosCarrito.push(gorra)
    console.log(articulosCarrito)
    
    ui.vaciarCarrito()
    articulosCarrito.map( gorra => {
        const divCarrito = document.createElement('div');
        divCarrito.innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">${gorra.nombre} - Precio: $ ${gorra.precio}</li>
        </ul>
        `

        const contenedorCarrito = document.getElementById('contenedorCarrito')
        contenedorCarrito.appendChild(divCarrito)
    })

    localStorage.setItem('carrito', JSON.stringify(articulosCarrito))

}

// Esta parte crea la funcion de filtrar la gorra y cada parte del filtro
function filtarGorra() {
    const resultado = gorras.filter(filtrarModelo).filter(filtrarTipo).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor);

    if(resultado.length) {
        mostrarGorras(resultado)
    } else {
        ui.limpiarHTML();
        ui.imprimirMensaje('Ninguna Gorra Encontrada', 'error', contenedorGorras);
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