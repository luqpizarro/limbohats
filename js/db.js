/*class Gorras {
    constructor (nombre, modelo, tipo, color, precio, stock, img, id){
        this.nombre = nombre;
        this.modelo = modelo;
        this.tipo = tipo;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.id = id
    }
};


const truckerDiezGris = new Gorras ('Gorra Maradona', 'diez', 'Trucker', 'Gris', 4600, true, './assets/img/GORRAS/$4600/trucker 10 gris.jpg', 1);
const truckerGatoGris = new Gorras ('Gorra Gato', 'gato', 'trucker', 'gris', 4600, true, './assets/img/GORRAS/$4600/trucker gato gris.jpg', 2);
const truckerLimboBlancoYNegro = new Gorras ('Gorra Calavera Limbo', 'limbo', 'trucker', 'blanco y negro', 4600, true, './assets/img/GORRAS/$4600/trucker limbo blanco y negro.jpg', 3);
const truckerLimboVerde = new Gorras ('Gorra Calavera Limbo', 'limbo', 'trucker', 'verde', 4600, true, './assets/img/GORRAS/$4600/trucker limbo verde.jpg', 4);
const truckerTreceNegro = new Gorras ('Gorra Numero 13', 'trece', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/trucker 13 negro.jpg', 5);
const truckerFlorNegro = new Gorras ('Gorra Flor Tradi', 'flor', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/trucker flor negro.jpg', 6);
const truckerSerpienteBlancoYNegro = new Gorras ('Gorra Serpiente', 'serpiente', 'trucker', 'blanco y negro', 5000, true, './assets/img/GORRAS/$5000/trucker serpiente blanco y negro.jpg', 7);
const truckerCalaveraGris = new Gorras ('Gorra Calavera Limbo', 'calavera', 'trucker', 'gris', 5000, true, './assets/img/GORRAS/$5000/truker calavera colorida gris.jpg', 8);
const truckerLMBNegro = new Gorras ('Gorra Numero Trece', 'limbo', 'trucker', 'negro', 5000, true, './assets/img/GORRAS/$5000/truker lmb negro.jpg', 9);
const baseballCangrejoNegro = new Gorras ('Gorra Cangrejo', 'cangrejo', 'baseball', 'negro', 5500, true, './assets/img/GORRAS/$5500/baseball cangrejo negro.jpg', 10);
const baseballFlorGris = new Gorras ('Gorra Flor Tradi', 'flor', 'baseball', 'gris', 5500, true, './assets/img/GORRAS/$5500/baseball flor gris.jpg', 11);
const baseballFlorVioleta = new Gorras ('Gorra Flor Tradi', 'flor', 'baseball', 'violeta', 5500, true, './assets/img/GORRAS/$5500/baseball flor violeta.jpg', 12);
const baseballIpaVerde = new Gorras ('Gorra IPA', 'ipa', 'baseball', 'verde', 5500, true, './assets/img/GORRAS/$5500/baseball ipa verde.jpg', 13);
const snapCalaveraAmarillo = new Gorras ('Gorra Calavera Skull', 'calavera', 'snap', 'amarillo', 5500, true, './assets/img/GORRAS/$5500/snap calavera amarillo y negro.jpg', 14);
const snapGatoRojo = new Gorras ('Gorra Gato', 'gato', 'snap', 'rojo', 5500, true, './assets/img/GORRAS/$5500/snap gato rojo.jpg', 15);
const snapIpaVerde = new Gorras ('Gorra IPA', 'ipa', 'snap', 'verde', 5500, true, './assets/img/GORRAS/$5500/snap ipa verde.jpg', 16);
const snapLimboHatsNegro = new Gorras ('Gorra Limbo Tattoo', 'limbo', 'snap', 'negro', 5500, true, './assets/img/GORRAS/$5500/snap limbo hats negro.jpg', 17);
const snapLMBArgBlanco = new Gorras ('Gorra Limbo Argentina', 'limbo', 'snap', 'blanco', 5500, true, './assets/img/GORRAS/$5500/snap lmb arg blanco.jpg', 18);
const snapLimboRadioactivoNegro = new Gorras ('Gorra Limbo Radioactivo', 'limbo', 'snap', 'negro', 5500, true, './assets/img/GORRAS/$5500/snap limbo radioactivo negro.jpg', 19);
const baseballTreceNegro = new Gorras ('Gorro Numero 13', 'trece', 'baseball', 'negro', 6500, true, './assets/img/GORRAS/$6500/baseball 13 negro.jpg', 20);
const baseballCadenaNegro = new Gorras ('Gorra Cadenas', 'cadena', 'baseball', 'negro', 6500, true, './assets/img/GORRAS/$6500/baseball cadena negro.jpg', 21);
const baseballCalaveraAmarillo = new Gorras ('Gorra Calavera Skull', 'calavera', 'baseball', 'amarillo', 6500, true, './assets/img/GORRAS/$6500/baseball calavera.jpg', 22);
const baseballPlanetaGris = new Gorras ('Gorra Saturno', 'planeta', 'baseball', 'gris', 6500, true, './assets/img/GORRAS/$6500/baseball planeta gris.jpg', 23);
const SnapTreceNegro = new Gorras ('Gorra Numero 13', 'trece', 'snap', 'negro', 6500, true, './assets/img/GORRAS/$6500/snap 13 negro.jpg', 24);
const SnapCadenaBlancoYNegro = new Gorras ('Gorra Cadenas', 'cadena', 'snap', 'blanco y negro', 6500, true, './assets/img/GORRAS/$6500/snap cadena blanca y negra.jpg', 25);
const SnapCalaveraBlancoYNegro = new Gorras ('Gorra Calavera Skull', 'calavera', 'snap', 'blanco y negro', 6500, true, './assets/img/GORRAS/$6500/snap calavera.jpg', 26);
const SnapGatoNegro = new Gorras ('Gorra Gato', 'gato', 'snap', 'negro', 6500, true, './assets/img/GORRAS/$6500/snap gato grande negro.jpg', 27);


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
*/
