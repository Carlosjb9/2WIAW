
import {Nau} from "../classes/Nau.js";
import {Tripulant} from "../classes/Tripulant.js";
import {pathImatges} from "./../PalasAteneaConstants.js";
import {Donnager, Leonidas, Rocinante, Morrigan, Scirocco} from "./nausInicialitzador.js";


let llistaNaus = [];
llistaNaus.push(Donnager, Leonidas, Rocinante, Morrigan, Scirocco);

let AmosBurton = new Tripulant("M-101", "Amos", "Burton", "Mecànic", 4, true, "MCRN-151", false, "Amos_Burton.webp");
let NaomiNagata = new Tripulant("M-102", "Naomi", "Nagata", "Cap d’enginyeria", 4, true, "MCRN-151", false, "Naomi_Nagata.webp");
let JamesHolden = new Tripulant("J-101", "James", "Holden", "Capità", 1, true, "MCRN-151", false, "James_Holden.webp");
let Komarov = new Tripulant("J-102", "Vladimir", "Komarov", "Coronel", 1, true, "MCRN-574", false, "Vladimir_Komarov.jpg");
let Leonov = new Tripulant("J-103", "Aleksei", "Leonov", "General", 1, true, "MCRN-574", false, "Aleksey_Leonov.jpg");
let Patata = new Tripulant("P-999", "Patata", "Voladora", "Jefe Supremo", 1, true, "-1", false, "Patata_Voladora.jpg");

let llistaTripulants = [];
llistaTripulants.push(AmosBurton, NaomiNagata, JamesHolden, Komarov, Leonov, Patata);


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
    var nodeTextTd3 = document.createTextNode("TRIPULANTS");
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
    var nodeText = document.createTextNode(nauTmp.nom + " (");
    nouA.appendChild(nodeText);
    nodeText = document.createTextNode(nauTmp.id);
    nouA.appendChild(nodeText);
    nodeText = document.createTextNode(nauTmp.nom + ")");
    nouA.appendChild(nodeText);
    nouTd1.appendChild(nouA);

    nouTr.appendChild(nouTd1);


    // 2a COLUMNA:
    var nouTd2 = document.createElement("TD");
    nouTd2.setAttribute("align", "center");
    var nodeText = document.createTextNode("TRIPULANTS: " + nauTmp.tripulacio.length);
    nouTd2.appendChild(nodeText);
    nouTd2.appendChild(nouBR);
    var nodeText = document.createTextNode("DATA ALTA: " + nauTmp.dataAlta.toLocaleDateString());           // Fer la llista linkable als tripulants.
    nouTd2.appendChild(nodeText);
    var nouBR = document.createElement("BR");
    nouTd2.appendChild(nouBR);
    var nodeText = document.createTextNode("DATA BAIXA: " + nauTmp.dataBaixa.toLocaleDateString());         // Fer la llista linkable als tripulants.
    nouTd2.appendChild(nodeText);

    nouTr.appendChild(nouTd2);


    // 3a COLUMNA:
    var nouTd3 = document.createElement("TD");
    //nouTd3.setAttribute("align", "center");       // Una altre forma és la següent línia.
    nouTd3.style.alignContent = "center";
    let nouDiv = document.createElement("DIV");
    nouDiv.setAttribute("id", nauTmp.id);
    nouDiv.style.color = "red";
    var nodeTextTd3 = document.createTextNode("NO HI HA DADES");
    nouDiv.appendChild(nodeTextTd3);
    nouTd3.appendChild(nouDiv);       

    /*
    AQUEST INPUT TYPE TEXT OCULT NO EL FAREM SERVIR:
    let inputCamuflat = document.createElement("input");
    inputCamuflat.setAttribute("id", nauTmp.id);
    inputCamuflat.style.visibility = "hidden";
    nouTd3.appendChild(inputCamuflat);
    */
    nouTr.appendChild(nouTd3);

    taula.appendChild(nouTr);
}



export function veureNausEnTaula() {
    let taula = document.getElementById("taulaNaus");

    // Sinó esborrem el contingut de la taula, cada vegada que fem un "veureNausEnTaula()" ens afegirà
    // a la taula le dades de les naus mostrades anteriorment.
    taula.innerHTML = "";

    // Aquest codi es per si de cas la taula creada en nausAmbDOM.html NO té un títol i si ja el tingués no el machaqués:
    if (document.getElementById("titolTaula") == null) {
        var nouCaption = document.createElement("caption");
        nouCaption.setAttribute("id", "titolTaula");
        //nouCaption.id = "titolTaula";		            // Una altre forma de fer.
        var nodeTextCaption = document.createTextNode("Dades de les naus");
        nouCaption.appendChild(nodeTextCaption);
        taula.appendChild(nouCaption);
    }

    pintarTitolColumnesTaula(taula);

    // Anem a pintar totes les naus:
    for (let i = 0; i < llistaNaus.length; i++) {
        pintarDadesNauEnFila(taula, llistaNaus[i]);
    }
}



export function copiarRutaImatges(){
    // Volem copiar en el paràgraf el nom de les imatges que hi ha dins de la taula (no les que estan a fora).
    // No volem la ruta, només volem el nom de la imatge.
    // Quan agafis totes les imatges fica-les en un array. Ficar-les en 1 array (A) fent servir un bucle for-in i en
    // un altre array (B) fent servir un bucle for normal.
    // Comprova el tipus del contingut dels 2 arrays...
    // Aplica una funció a l'array (B) per obtenir per a cada imatge un "<br>" + el nom de la imatge (només el nom).

    let paragraf = document.getElementById("paragrafDelBody");
    let llistaImatgesNaus = document.getElementById("taulaNaus").getElementsByTagName("img");
    let llistaTmp = [];


    for (let imatgeTmp in llistaImatgesNaus) {
        // AIXÍ NO FUNCIONA: NO AGAFA VE EL CONTINGUT DE llistaImatgesNaus JA QUE EL CONTINGUT ÉS
        // DE TIPUS object (en realitat de tipus Object HTMLImageElement) I AIXÍ L'AGAFA COM SI FÓS DE TIPUS string.
        // AQUEST TIPUS DE BUCLE NO SERVEIX PER A RECORRER UN ARRAY I AGAFAR ELS SEUS VALORS.

        //llistaTmp.push(imatgeTmp);

        console.log("typeof(imatgeTmp) = " + typeof(imatgeTmp));
        console.log("imatgeTmp = " + imatgeTmp);
    }
    
    console.log("------------------------------------");

    for(let i = 0; i < llistaImatgesNaus.length; i++){
        llistaTmp.push(llistaImatgesNaus[i]);

        console.log("typeof(llistaImatgesNaus[" + i + "]) = " + typeof(llistaImatgesNaus[i]));
        console.log("llistaImatgesNaus[" + i + "] = " + llistaImatgesNaus[i]);
    }

    console.log("------------------------------------");
    
    console.log("llistaImatgesNaus = " + llistaImatgesNaus);
    console.log("llistaImatgesNaus.length = " + llistaImatgesNaus.length);
    console.log("llistaImatgesNaus[0] = " + llistaImatgesNaus[0]);
    console.log("llistaImatgesNaus[0].getAttribute('src') = " + llistaImatgesNaus[0].getAttribute("src"));

    let llistaDirsImatgesNaus = llistaTmp.map(function(element){
        let posBarra = element.getAttribute("src").lastIndexOf("/") + 1;
        let nomImatge = element.getAttribute("src").slice(posBarra);

        return "<br>" + nomImatge;
    });

    paragraf.innerHTML = llistaDirsImatgesNaus.toString();
}



export function assignarTripulantsANaus(veureNoAssignats) {
    // S'ha de recorrer els tripulants (llistaTripulants) i assignar-los a la fila de la nau adecuada.
    let nodeText;
    let nauAssignada;
    let taula = document.getElementById("taulaNaus");

    // Farem un mapa on clau = nauId i contingut els tripulants. Recorre els tripulants i anar fer inserts en
    // el mapa (quan ja existeixi una entrada previa a llavors fer un append i no un insert en el mapa).
    // El valor en el mapa serà un array amb els tripulants de la nau.
    // Quan el mapa estigui creat busquem les naus en la taula i en la 3a columna li afegim les dades dels tripulants.

    let mapaTripulantsVsNaus = new Map();
    let arrayTripulants = [];

    // Fico els tripulants en el mapa:
    for(let i = 0; i < llistaTripulants.length; i++){
        if (mapaTripulantsVsNaus.has(llistaTripulants[i].nauId)) {
            arrayTripulants = mapaTripulantsVsNaus.get(llistaTripulants[i].nauId);
            arrayTripulants.push(llistaTripulants[i]);
            mapaTripulantsVsNaus.set(llistaTripulants[i].nauId, arrayTripulants);
        } else {
            arrayTripulants = [llistaTripulants[i]];
            mapaTripulantsVsNaus.set(llistaTripulants[i].nauId, arrayTripulants);
        }
    }
    
    mapaTripulantsVsNaus.forEach(function(valor, clau){
        // Accedeixo al DIV de la 3a columna corresponent a la nau (clau = nauId) i
        // destruim el _DIV i creem un de nou assignant-lo al pare del DIV destruit:

        if (clau != "-1") {
            // Els tripulants amb nauId = -1 no estan assignats a cap nau.
            let divNau = document.getElementById(clau);        
            let pareDiv = divNau.parentNode;
            pareDiv.removeChild(divNau);
    
            let nouDiv = document.createElement("DIV");
            nouDiv.style.color = "green";
    
            // Creem 1 paràgraf (P) per a cada tripulant assignat a la nau i li ficarem les dades del tripulant:
            for(let i = 0; i < valor.length; i++){
                let nouP = document.createElement("P");
    
                let nodeText = document.createTextNode(valor[i].identificador);
    
                nouP.appendChild(nodeText);
    
                nouDiv.appendChild(nouP);
            }
    
            pareDiv.appendChild(nouDiv);
        } else {
            // Cas de tripulants que no estan assignats a cap nau (nauId = "-1").
            // Creem una nova fila en la taula (al final) amb 1 sola columna i fiquem allà aquests tripulants:

            if (veureNoAssignats) {
                for(let i = 0; i < valor.length; i++){

                    let nouTr = document.createElement("TR");
                    let nouTd = document.createElement("TD");
                    nouTd.setAttribute("colspan", "3");
                    nouTd.style.textAlign = "left";
                    let nouB = document.createElement("B");
                    let nodeText = document.createTextNode("TRIPULANTS SENSE NAU ASSIGNADA: " + valor[i].identificador);
                    nouB.appendChild(nodeText);
                    nouTd.appendChild(nouB);
                    nouTr.appendChild(nouTd);
    
                    taula.appendChild(nouTr);
                }   
    
            }

        }
    });
}