import {Ordenacio}  from "../llibreries/ordenacio.js";
//import * as Ordenacio from "../llibreries/ordenacio.js";

export class Drassana {
    molls;                      // Té 3 valors per posició: ID moll, actiu i ID de la nau que té. Crearem un objecte per a guardar aquest 2 valors.
    reparacions = [];           // La llista de totes les reparacions de totes les naus. Contingut per posició: reparacioId, estat (acabada, en curs, pendent de fer).
    pecesRecanvi = [];          // Array on cada posició són 2 valors (modelId i array dels num de sèrie dels objecte de tipus PeçaRecanvi). Són les peces disponibles per a fer servir en reparacions.
    demanarPecesRecanvi = [];   // Cada posició són 2 valors (modelId i la quantitat de peces que hem de demanar).
    tripulacio = [];            // Objectes de tipus Tripulant.
    nom = "nom de la Drassana";


    constructor() {
        this.molls = [{mollId: 1, actiu: true, nauId: "-1"},{mollId: 2, actiu: true, nauId: "-1"},{mollId: 3, actiu: true, nauId: "-1"},{mollId: 4, actiu: false, nauId: "-1"}];
    }

    veurePecesRecanvi() {
        let text = "";

        for (let i = 0; i < this.pecesRecanvi.length; i++) {
            let numSerie = this.pecesRecanvi[i][1];
            numSerie.sort(Ordenacio.ordenarAlfabeticament);

            text = text + "MODEL: " + this.pecesRecanvi[i][0] + "<br> PECES DISPONIBLES: " + numSerie + "<br>----------------<br>";
        }

        return text;
    }

    veureDemanarPecesRecanvi() {
        let text = "";

        for (let i = 0; i < this.demanarPecesRecanvi.length; i++) {
            let numSerie = this.demanarPecesRecanvi[i][1];
            numSerie.sort(Ordenacio.ordenarAlfabeticament);

            text = text + "MODEL: " + this.demanarPecesRecanvi[i][0] + "<br> PECES UTILITZADES: " + numSerie + "<br>----------------<br>";
        }

        return text;
    }

    veureQuantitatPecesRecanviADemanar(){
        let text = "";

        for (let i = 0; i < this.demanarPecesRecanvi.length; i++) {
            let quantitatNumsSeries = this.demanarPecesRecanvi[i][1].length;

            text = text + "MODEL: " + this.demanarPecesRecanvi[i][0] + "\n PECES UTILITZADES: " + quantitatNumsSeries + "\n----------------\n";
        }

        return text;
    }

    veureEstatMolls() {
        let text = "";

        // Extreiem els molls actius:
        let mollsAmbNau = this.molls.filter(function(elementTmp){
            return elementTmp.actiu;
        });

        for (let mollTmp of mollsAmbNau){
            text = text  + "MOLL: " + mollTmp.mollId + " ACTIU: " + mollTmp.actiu;

            if (mollTmp.nauId != "-1") {
                text = text  + " AMB LA NAU " + mollTmp.nauId + " ATRACADA.";
            }

            text = text  + "<br>";
        }

        return text;
    }

    hiHaCapMollLliure() {
        let existeixMollLliure = this.molls.some(function(mollTmp){
            if ((mollTmp.actiu) && (mollTmp.nauId == "-1")) {
                return true;
            } else {
                return false;
            }
        });

        return "EXISTEIX CAP MOLL LIURE?: " + existeixMollLliure;
    }
}


