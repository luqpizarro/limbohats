class Gorras {
    constructor (nombre, modelo, tipo, color, precio, stock, img){
        this.nombre = nombre;
        this.modelo = modelo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        this.img= img;
    }
};


const truckerDiezGris = new Gorras ('trucker diez gris', 'diez', 'trucker', 'gris', 4600, true, './assets/img/GORRAS/$4600/trucker 10 gris.jpg');
const truckerGatoGris = new Gorras ('trucker gato gris', 'gato', 'trucker', 'gris', 4600, true, './assets/img/GORRAS/$4600/trucker gato gris.jpg');
const truckerLimboBlancoYNegro = new Gorras ('trucker limbo blanco y negro', 'limbo', 'trucker', 'blanco y negro', 4600, true, './assets/img/GORRAS/$4600/trucker limbo blanco y negro.jpg');
const truckerLimboVerde = new Gorras ('trucker limbo verde', 'limbo', 'trucker', 'verde', 4600, true, './assets/img/GORRAS/$4600/trucker limbo verde.jpg');
const truckerTreceNegro = new Gorras ('trucker trece negro', 'trece', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/trucker 13 negro.jpg');
const truckerFlorNegro = new Gorras ('trucker flor negro', 'flor', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/trucker flor negro.jpg');
const truckerSerpienteBlancoYNegro = new Gorras ('trucker serpiente blanco y negro', 'serpiente', 'trucker', 'blanco y negro', 5000, true, './assets/img/GORRAS/$5000/trucker serpiente blanco y negro.jpg');
const truckerCalaveraGris = new Gorras ('trucker calavera gris', 'calavera', 'trucker', 'gris', 5000, true, './assets/img/GORRAS/$5000/truker calavera colorida gris.jpg');
const truckerLMBNegro = new Gorras ('trucker lmb negro', 'limbo', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/truker lmb negro.jpg');
const baseballCangrejoNegro = new Gorras ('baseball cangrejo negro', 'cangrejo', 'baseball', 'negro', 5500, true, './assets/img/GORRAS/$5500/baseball cangrejo negro.jpg');
const baseballFlorGris = new Gorras ('baseball flor gris', 'flor', 'baseball', 'gris', 5500, true, './assets/img/GORRAS/$5500/baseball flor gris.jpg');
const baseballFlorVioleta = new Gorras ('baseball flor violeta', 'flor', 'baseball', 'violeta', 5500, true, './assets/img/GORRAS/$5500/baseball flor violeta.jpg');
const baseballIpaVerde = new Gorras ('baseball ipa verde', 'ipa', 'baseball', 'verde', 5500, true, './assets/img/GORRAS/$5500/baseball ipa verde.jpg');
const snapCalaveraAmarillo = new Gorras ('snap calavera amarillo', 'calavera', 'snap', 'amarillo', 5500, true, './assets/img/GORRAS/$5500/snap calavera amarillo y negro.jpg');
const snapGatoRojo = new Gorras ('snap gato rojo', 'gato', 'snap', 'rojo', 5500, true, './assets/img/GORRAS/$5500/snap gato rojo.jpg');
const snapIpaVerde = new Gorras ('snap ipa verde', 'ipa', 'snap', 'verde', 5500, true, './assets/img/GORRAS/$5500/snap ipa verde.jpg');
const snapLimboHatsNegro = new Gorras ('snap limbo hats negro', 'limbo', 'snap', 'negro', 5500, true, './assets/img/GORRAS/$5500/snap limbo hats negro.jpg');
const snapLMBArgBlanco = new Gorras ('snap lmb argentina blanco', 'lmb', 'snap', 'blanco', 5500, true, './assets/img/GORRAS/$5500/snap lmb arg blanco.jpg');
const snapLimboRadioactivoNegro = new Gorras ('snap limbo radioactivo negro', 'limbo', 'snap', 'negro', 5500, true, './assets/img/GORRAS/$5500/snap limbo radioactivo negro.jpg');
const baseballTreceNegro = new Gorras ('baseball trece negro', 'trece', 'baseball', 'negro', 6500, true, './assets/img/GORRAS/$6500/baseball 13 negro.jpg');
const baseballCadenaNegro = new Gorras ('baseball cadena negro', 'cadena', 'baseball', 'negro', 6500, true, './assets/img/GORRAS/$6500/baseball cadena negro.jpg');
const baseballCalaveraAmarillo = new Gorras ('baseball calavera amarillo', 'calavera', 'baseball', 'amarillo', 6500, true, './assets/img/GORRAS/$6500/baseball calavera.jpg');
const baseballPlanetaGris = new Gorras ('baseball planeta gris', 'planeta', 'baseball', 'gris', 6500, true, './assets/img/GORRAS/$6500/baseball planeta gris.jpg');
const SnapTreceNegro = new Gorras ('snap trece negro', 'trece', 'snap', 'negro', 6500, true, './assets/img/GORRAS/$6500/snap 13 negro.jpg');
const SnapCadenaBlancoYNegro = new Gorras ('snap cadena blanco y negro', 'cadena', 'snap', 'blanco y negro', 6500, true, './assets/img/GORRAS/$6500/snap cadena blanca y negra.jpg');
const SnapCalaveraBlancoYNegro = new Gorras ('snap calavera blanco y negro', 'calavera', 'snap', 'blanco y negro', 6500, true, './assets/img/GORRAS/$6500/snap calavera.jpg');
const SnapGatoNegro = new Gorras ('snap gato negro', 'gato', 'snap', 'negro', 6500, true, './assets/img/GORRAS/$6500/snap gato grande negro.jpg');


const gorras = [
    truckerDiezGris, 
    truckerGatoGris, 
    truckerLimboBlancoYNegro,
    truckerLimboVerde,
    truckerTreceNegro,
    truckerFlorNegro,
    truckerSerpienteBlancoYNegro,
    truckerCalaveraGris,
    truckerLMBNegro,
    baseballCangrejoNegro,
    baseballFlorGris,
    baseballFlorVioleta,
    baseballIpaVerde,
    snapCalaveraAmarillo,
    snapGatoRojo,
    snapIpaVerde,
    snapLimboHatsNegro,
    snapLMBArgBlanco,
    snapLimboRadioactivoNegro,
    baseballTreceNegro,
    baseballCadenaNegro,
    baseballCalaveraAmarillo,
    baseballPlanetaGris,
    SnapTreceNegro,
    SnapCadenaBlancoYNegro,
    SnapCalaveraBlancoYNegro,
    SnapGatoNegro
]

