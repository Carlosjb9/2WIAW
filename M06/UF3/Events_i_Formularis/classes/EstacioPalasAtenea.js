import { Drassana } from "./Drassana.js";

export class EstacioPalasAtenea extends Drassana {
    nom = "Estació de seguiment Palas Atenea";
    nausDetectades = [];         // Objectes Nau de les naus que té localitzades l'estació, tant les que estan als molls com les que estan en l'espai.
    mapaTripulants = new Map();


    constructor() {
        super();
        Object.preventExtensions(this);     // D'aquesta manera evitem que ningú amplii l'objecte afegint/eliminant propietats i mètodes.
    }

    inicialitzarNausDetectades(arrayNausdetectades) {
        // Ens arriba nausInicials = [Donnager, Leonidas, Rocinante, Morrigan, Scirocco];   
        this.nausDetectades = arrayNausdetectades;
    }

    inicialitzarPecesRecanviLLiuresIUtilitzades(arrayPecesInicials) {
        //console.log("modelId = " + arrayPecesInicials[0].modelId);
        //console.log("nom = " + arrayPecesInicials[0].nom);
        //console.log("peces[] = " + arrayPecesInicials[0].peces);

        for (let i = 0; i < arrayPecesInicials.length; i++) {
            //console.log("------modelId = " + arrayPecesInicials[i].modelId);

            let pecesLLiures = arrayPecesInicials[i].peces.filter(function (element) {
                return element[1];

            });

            let nomPeces = [];
            for (let y = 0; y < pecesLLiures.length; y++) {
                nomPeces.push(pecesLLiures[y][0]);
            }

            this.pecesRecanvi.push([arrayPecesInicials[i].modelId, nomPeces]);
            //console.log("nomPeces = " + nomPeces);

            let pecesGastades = arrayPecesInicials[i].peces.filter(function (element) {
                if (element[1] == false) {
                    return true;
                } else {
                    return false;
                };
            });

            nomPeces = [];
            for (let y = 0; y < pecesGastades.length; y++) {
                nomPeces.push(pecesGastades[y][0]);
            }

            this.demanarPecesRecanvi.push([arrayPecesInicials[i].modelId, nomPeces]);


        }
    }

    veureNausDetectades() {
        let paragraf = document.getElementById("paragrafDelBody");
        paragraf.style.color = "green";
        paragraf.innerHTML = "NAUS DETECTADES PER L'ESTACIÓ: <br>";

        let dadesNausDetectades = this.nausDetectades.map(function (element) {
            //console.log(element.id);
            //console.log(element.toString());

            return element.toString();
        });

        for (let dadaTmp of dadesNausDetectades) {
            paragraf.innerHTML = paragraf.innerHTML + "&nbsp; &nbsp; &nbsp;" + dadaTmp + "<br>";
        }

        //let paragraf_1 = document.getElementById("paragrafDelBody");
        //paragraf_1.appendChild(paragraf);
    }


}