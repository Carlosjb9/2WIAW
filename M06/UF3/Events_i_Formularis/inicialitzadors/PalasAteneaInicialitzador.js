import { EstacioPalasAtenea } from "./../classes/EstacioPalasAtenea.js";
import { Donnager, Leonidas, Rocinante, Morrigan, Scirocco } from "./nausInicialitzador.js";
import { pecesInicials } from "./pecesDeRecanviInicialitzador.js";
import {pathImatges} from "./../PalasAteneaConstants.js";


// PER EXPORTAR TAMBÉ PODRIEM FER (EN COMPTES DE FICAR UN export AL DEVANT DE TOT EL QUE VOLEM EXPORTAR):
//  export {PalasAtenea, veurePecesRecanviDrassana, veureDemanarPecesRecanvi,...};

let nausInicials = [Donnager, Leonidas, Rocinante, Morrigan, Scirocco];
export let PalasAtenea = new EstacioPalasAtenea();
PalasAtenea.inicialitzarNausDetectades(nausInicials);
PalasAtenea.inicialitzarPecesRecanviLLiuresIUtilitzades(pecesInicials);


export function veurePecesRecanviDrassana() {
    let paragraf = document.createElement("p");
    paragraf.innerHTML = "PECES DE RECANVI DISPONIBLES EN LA DRASSANA: <br>";
    paragraf.innerHTML = paragraf.innerHTML + PalasAtenea.veurePecesRecanvi();
    paragraf.style.color = "green";
    let paragraf_1 = document.getElementById("paragrafDelBody");
    paragraf_1.appendChild(paragraf);
}


export function veureDemanarPecesRecanvi() {
    let paragraf = document.createElement("p");
    paragraf.innerHTML = "PECES DE RECANVI GASTADES EN REPARACIONS EN LA DRASSANA: <br>";
    paragraf.innerHTML = paragraf.innerHTML + PalasAtenea.veureDemanarPecesRecanvi();
    paragraf.style.color = "red";
    let paragraf_1 = document.getElementById("paragrafDelBody");
    paragraf_1.appendChild(paragraf);
}



export function crearLListaDesplegableNaus() {
    /*
    let paragraf = document.createElement("p");
    paragraf.innerText = PalasAtenea.nom + "\n DEPARTAMENTS: " + DEPARTAMENTS +
        "\n Donnager.toString(): " + Donnager.toString();
    paragraf.style.color = "red";
    paragraf.innerText = paragraf.innerText + "\n" + PalasAtenea.veureNausDetectades();
    let paragraf_1 = document.getElementById("paragrafDelBody");
    paragraf_1.appendChild(paragraf);
    */

    let llistaNaus = document.getElementById("llistaNaus");

    llistaNaus.length = 0;

    let opcioNova = document.createElement("option");
    opcioNova.value = "-1";
    opcioNova.text = "----Sel·lecciona una nau----";
    llistaNaus.appendChild(opcioNova);

    for (let i = 0; i < PalasAtenea.nausDetectades.length; i++) {
        let opcioNova = document.createElement("option");
        opcioNova.value = PalasAtenea.nausDetectades[i].id;
        opcioNova.text = PalasAtenea.nausDetectades[i].nom;
        llistaNaus.appendChild(opcioNova);
    }
}


function pintarTitolColumnesTaula(taula) {
    var nouTr = document.createElement("TR");

    var nouTd1 = document.createElement("TD");
    nouTd1.style.textAlign = "center";
    var nouB = document.createElement("B");
    var nodeTextTd1 = document.createTextNode("NAU");
    nouB.appendChild(nodeTextTd1);
    nouTd1.appendChild(nouB);
    nouTr.appendChild(nouTd1);

    var nouTd2 = document.createElement("TD");
    nouTd2.style.textAlign = "center";
    var nouB = document.createElement("B");
    var nodeTextTd2 = document.createTextNode("TRIPULACIO");
    nouB.appendChild(nodeTextTd2);
    nouTd2.appendChild(nouB);
    nouTr.appendChild(nouTd2);

    var nouTd3 = document.createElement("TD");
    nouTd3.style.textAlign = "center";
    var nouB = document.createElement("B");
    var nodeTextTd3 = document.createTextNode("REPARACIONS");
    nouB.appendChild(nodeTextTd3);
    nouTd3.appendChild(nouB);
    nouTr.appendChild(nouTd3);

    taula.appendChild(nouTr);

    //return taula;
}


function pintarDadesNauEnFila(taula, nauTmp) {
    var nouTr = document.createElement("TR");

    // 1a COLUMNA:
    var nouTd1 = document.createElement("TD");
    nouTd1.style.textAlign = "center";
    var nouA = document.createElement("A");
    nouA.setAttribute("href", pathImatges + nauTmp.imatge);
    nouA.setAttribute("target", "_blank");
    var novaImg1 = document.createElement("IMG");
    novaImg1.setAttribute("src", pathImatges + nauTmp.imatge);
    novaImg1.setAttribute("width", "256");
    nouA.appendChild(novaImg1);
    nouTd1.appendChild(nouA);

    var nouBR = document.createElement("BR");
    nouTd1.appendChild(nouBR);
    var nouBR = document.createElement("BR");
    nouTd1.appendChild(nouBR);		// No funciona si fem un 2n "nouTd1.appendChild(nouBR)" si no tornem a crear un node amb createElement("BR").
    var nouA = document.createElement("A");
    nouA.setAttribute("href", nauTmp.web);
    nouA.setAttribute("target", "_blank");
    var nodeText = document.createTextNode(nauTmp.nom);
    nouA.appendChild(nodeText);
    nouTd1.appendChild(nouA);

    nouTr.appendChild(nouTd1);


    // 2a COLUMNA:
    var nouTd2 = document.createElement("TD");
    nouTd2.setAttribute("align", "center");
    var nodeText = document.createTextNode("TRIPULANTS: " + nauTmp.tripulacio.length);
    nouTd2.appendChild(nodeText);
    nouTd2.appendChild(nouBR);
    var nodeText = document.createTextNode("DATA ALTA: " + nauTmp.dataAlta.toLocaleDateString());       // Fer la llista linkable als tripulants.
    nouTd2.appendChild(nodeText);
    var nouBR = document.createElement("BR");
    nouTd2.appendChild(nouBR);
    var nodeText = document.createTextNode("DATA BAIXA: " + nauTmp.dataBaixa.toLocaleDateString());       // Fer la llista linkable als tripulants.
    nouTd2.appendChild(nodeText);

    nouTr.appendChild(nouTd2);


    // 3a COLUMNA:
    var nouTd3 = document.createElement("TD");
    nouTd3.setAttribute("align", "center");
    var nodeTextTd3 = document.createTextNode("REPARACIONS: " + nauTmp.reparacions.length);
    nouTd3.appendChild(nodeTextTd3);            // Veure el nº de reparacions pendents i les finalitzades.
    nouTr.appendChild(nouTd3);


    taula.appendChild(nouTr);
}



export function veureNausEnTaula(nauId) {
    // S'ha de comprovar si es crida a la funció amb 0 o 1 paràmetre. Farem servir arguments.
    // 0 paràmetres vol dir visualitzar totes les naus.
    // 1 paràmetre vol dir visualitzar només la nau que es passa per paràmetre.

    let taula = document.getElementById("taulaNaus");
    //console.log("arguments[0] = " + arguments[0]);
    //console.log("arguments.length = " + arguments.length);
    //console.log("nauId = " + nauId);

    // Sinó esborrem el contingut de la taula, cada vegada que fem un "veureNausEnTaula()" ens afegirà
    // a la taula le dades de les naus mostrades anteriorment.
    taula.innerHTML = "";

    // Aquest codi es per si de cas la taula creada en PalasAtena.html NO té un títol i si ja el tingués no el machaqués:
    if (document.getElementById("titolTaula") == null) {
        var nouCaption = document.createElement("caption");
        nouCaption.setAttribute("id", "titolTaula");
        //nouCaption.id = "titolTaula";		            // Una altre forma de fer.
        var nodeTextCaption = document.createTextNode("Dades de les naus");
        nouCaption.appendChild(nodeTextCaption);
        taula.appendChild(nouCaption);
    }

    pintarTitolColumnesTaula(taula);


    // Anem a agafar totes les naus que té detectada l'estació PalasAtenea:
    for (let i = 0; i < PalasAtenea.nausDetectades.length; i++) {
        //console.log(PalasAtenea.nausDetectades[i].id);

        if ((arguments.length == 1) && (typeof(arguments[0]) == "string")) {
            if (PalasAtenea.nausDetectades[i].id == arguments[0]) {
                // Anem a visualitzar només la nau que hem rebut per paràmetre:
                pintarDadesNauEnFila(taula, PalasAtenea.nausDetectades[i]);
            }
        } else {
            // Pinto totes les naus:
            pintarDadesNauEnFila(taula, PalasAtenea.nausDetectades[i]);
        }
    }



}