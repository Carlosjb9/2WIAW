import * as Dates from "../llibreries/dates.js";
import {TIPUSNAUS} from "./../PalasAteneaConstants.js";

export class Nau {
    id;
    nom;
    tipus;                  // La pos. en TIPUSNAUS = ["", "corbeta", "fragata", "destructor", "creuer", "acuirasat"];
    dataAlta;
    dataBaixa;
    periodeQuilla;
    tripulacio = [];        // Objectes de tipus Tripulant.
    reparacions = [];       // Objectes de tipus Reparacio.
    departaments = [];
    imatge;
    web;
    posicio = [];

    constructor(id, nom, tipus, dataAlta, dataBaixa, periodeQuilla, imatge, web, posX, posY){
        this.id = id;
        this.nom = nom;
        this.tipus = tipus;
        this.dataAlta = Dates.crearData(dataAlta);
        this.dataBaixa = Dates.crearData(dataBaixa);
        this.periodeQuilla = periodeQuilla;
        this.imatge = imatge;
        this.web = web;
        this.posicio[0] = posX;
        this.posicio[1] = posY;
    }

    inicialitzarTripulacio(arrayTripulants) {

    }

    inicialitzarReparacions(arrayReparacions) {

    }

    veureDadesEnSistemaSeguiment(){
        return "NOM: " + this.nom + "\r\n" + "TIPUS: " + TIPUSNAUS[this.tipus].toUpperCase() + "\r\n" + 
                "ID: " + this.id + "\r\n" + "POSICIO: (" + this.posicio[0] + ", " + this.posicio[1] + ")";
    }

    veureAnysDeServei() {
        return this.dataBaixa - this.dataAlta;
    }

    get numTripulants() {
        return this.tripulacio.length;
    }

    toString() {
        return TIPUSNAUS[this.tipus].toUpperCase() + " " + this.nom + " (ID: " + this.id + ")";
    }
}