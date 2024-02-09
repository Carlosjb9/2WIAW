// PER EXPORTAR TAMBÉ PODRIEM FER (EN COMPTES DE FICAR UN export AL DEVANT DE TOT EL QUE VOLEM EXPORTAR):
//  export {PalasAtenea, veurePecesRecanviDrassana, veureDemanarPecesRecanvi,...};
import {TIPUSNAUS, pathImatges} from "./PalasAteneaConstants.js";


function visualitzarDadesNau(nauTmp) {
    let textAreaSistemaSeguiment = document.getElementById("textAreaId");
    textAreaSistemaSeguiment.value = nauTmp.veureDadesEnSistemaSeguiment();
}


function marcarNau(nauTmp) {
    document.getElementById("btnCalcularSolucioDeTir").disabled = false;

    document.getElementById("nauMarcadaComObjectiuPosX").value = nauTmp.posicio[0];
    document.getElementById("nauMarcadaComObjectiuPosY").value = nauTmp.posicio[1];
    document.getElementById("nauMarcadaComObjectiuId").value = nauTmp.id;

    let textAreaSistemaSeguiment = document.getElementById("textAreaId");
    textAreaSistemaSeguiment.value = textAreaSistemaSeguiment.value + "\r\n\r\n" + "MARCAT OBJECTIU.";
}


export function pintarNausIEstacio(estacio) {
    let divSistemaSeguiment = document.getElementById("divPantallaSeguiment");

    let ImgTmp = document.createElement("IMG");
    ImgTmp.setAttribute("src", pathImatges + "mcrn.jpg");
    ImgTmp.setAttribute("width", "75");
    ImgTmp.setAttribute("class", "absolute");
    let posicio = "right:500px; top:400px;";
    ImgTmp.setAttribute("style", posicio);
    ImgTmp.setAttribute("id", "img_estacioMcrn");

    divSistemaSeguiment.appendChild(ImgTmp);
    
    for (let nauTmp of estacio.nausDetectades) {
        ImgTmp = document.createElement("IMG");
        ImgTmp.setAttribute("src", pathImatges + nauTmp.imatge);
        ImgTmp.setAttribute("width", "75");
        ImgTmp.setAttribute("class", "absolute");
        let posicio = "right:" + nauTmp.posicio[0] + "px; top:" + nauTmp.posicio[1] + "px;";
        ImgTmp.setAttribute("style", posicio);
        ImgTmp.setAttribute("id", "img_" + nauTmp.id);

        divSistemaSeguiment.appendChild(ImgTmp);

        ImgTmp.addEventListener("mouseover", function() {visualitzarDadesNau(nauTmp);});
        ImgTmp.addEventListener("click", function() {marcarNau(nauTmp)});
    }
}


export function calcularSolucioDeTir() {
    let textAreaSistemaSeguiment = document.getElementById("textAreaId");
    textAreaSistemaSeguiment.value = textAreaSistemaSeguiment.value + "\r\n\r\n" + "CALCULANT SOLUCIÓ DE TIR...";

    function activarBtnDispararMissil(){
        textAreaSistemaSeguiment.value = textAreaSistemaSeguiment.value + "\r\n\r\n" + "SOLUCIÓ DE TIR COMPLETADA.";

        document.getElementById("btnCalcularSolucioDeTir").disabled = true;
        document.getElementById("btnDispararRaigLaser").disabled = false;
    }

    setTimeout(activarBtnDispararMissil, 3000);
}


export function dispararRaigLaser(){
    let c = document.getElementById("raigLaser");
    let ctx = c.getContext("2d");
    ctx.beginPath();        // Si no fem això, a partir de la 2a vegada que creem un raig se li suma els creats previament.
    //c.setAttribute("class", "absolute");
    ctx.moveTo(460,400);
    let posXObjectiu = 960 - document.getElementById("nauMarcadaComObjectiuPosX").value;
    let posYObjectiu = document.getElementById("nauMarcadaComObjectiuPosY").value;
    ctx.lineTo(posXObjectiu,posYObjectiu);
    ctx.strokeStyle = "red";
    ctx.stroke();
        
    document.getElementById("btnDispararRaigLaser").disabled = true;

    let imgNau;
    function esborrarRaigLaser(ctx){
        ctx.clearRect(0,0,1000,800);        // Esborra tots els píxels que hi ha dins del rectangle determinat per
                                            // les coordenades passades (la més petita i la més gran del rectangle).

        let nauId = document.getElementById("nauMarcadaComObjectiuId").value;
        imgNau = document.getElementById("img_" + nauId);
        imgNau.src = pathImatges + "explosio.jpeg";

        setTimeout(esborrarExplosio, 1000);
    }

    function esborrarExplosio(){
        let nauId = document.getElementById("nauMarcadaComObjectiuId").value;
        imgNau = document.getElementById("img_" + nauId);
        imgNau.style.visibility = "hidden";
    }

    setTimeout(esborrarRaigLaser, 1500, ctx);
}


function filtrarNausAmbCheckbox(tipusNausIndex, estacio) {
    console.log("tipusNausIndex = " + tipusNausIndex);

    // Comprovar si el checkbox està actiu o ha estat desactivat.
}


function filtrarNausAmbBotons(tipusNausIndex, estacio) {
    //if (document.getElementById("button_" + tipusNaus[tipusNausIndex]).style.background == "green") {     
    // ERROR en la línia anterior: no va perquè segons la versió del navegador surt "green none repeat scroll 0% 0%" en comptes
    // de només "green" que és l'únic estil que jo vaig ficar en la funció pintarCheckboxTipusNaus().
    if (document.getElementById("button_" + TIPUSNAUS[tipusNausIndex]).value == "activat") {
        document.getElementById("button_" + TIPUSNAUS[tipusNausIndex]).style.background = "red";
        document.getElementById("button_" + TIPUSNAUS[tipusNausIndex]).value = "desactivat";

        for (let nauTmp of estacio.nausDetectades) {
            //console.log("nauTmp.tipus = " + nauTmp.tipus);
            if (nauTmp.tipus == tipusNausIndex) {
                document.getElementById("img_" + nauTmp.id).style.visibility = "hidden";
            }
        }
    } else {
        document.getElementById("button_" + TIPUSNAUS[tipusNausIndex]).style.background = "green";
        document.getElementById("button_" + TIPUSNAUS[tipusNausIndex]).value = "activat";

        for (let nauTmp of estacio.nausDetectades) {
            if (nauTmp.tipus == tipusNausIndex) {
                document.getElementById("img_" + nauTmp.id).style.visibility = "visible";
            }
        }
    }
}


export function pintarCheckboxTipusNaus(estacio) {
    //const TIPUSNAUS = ["", "corbeta", "fragata", "destructor", "creuer", "acuirasat", "transport"];
    //btnDispararMissil.addEventListener("click", function() {sistemaDeSeguiment.dispararMissil();});

    let paragrafTipusNaus = document.getElementById("paragrafTipusNaus");

    let btnTmp;

    for (let i = 1; i < TIPUSNAUS.length; i++) {
        btnTmp = document.createElement("button");
        btnTmp.setAttribute("id", "button_" + TIPUSNAUS[i]);
        btnTmp.innerHTML = TIPUSNAUS[i].toUpperCase();
        btnTmp.setAttribute("style", "background:green; ");
        btnTmp.setAttribute("value", "activat");

        paragrafTipusNaus.appendChild(btnTmp);

        let nouBR = document.createElement("BR");       // SI TREIEM AQUESTA LÍNIA FORA DEL BUCLE for, NO FUNCIONA EL SALT DE LINIA...
        paragrafTipusNaus.appendChild(nouBR);

        btnTmp.addEventListener("click", function(){filtrarNausAmbBotons(i, estacio);});

        //paragrafTipusNaus.innerHTML = paragrafTipusNaus.innerHTML  + "<br>";    // SI FEM AIXÒ A LLAVORS EL addEventListener() NO FUNCIONA.
    }
    
    
    let checkboxTmp;
    let labelTmp;

    for (let i = 1; i < TIPUSNAUS.length; i++) {
        checkboxTmp = document.createElement("INPUT");
        checkboxTmp.setAttribute("type", "checkbox");
        checkboxTmp.setAttribute("id", "checkbox_" + TIPUSNAUS[i]);
        checkboxTmp.setAttribute("name", "checkbox_" + TIPUSNAUS[i]);
        checkboxTmp.setAttribute("value", i);
        //checkboxTmp.setAttribute("checked", false);           // NO FUNCIONA.
        checkboxTmp.checked = true;                             // SÍ FUNCIONA.
        //console.log(checkboxTmp);

        labelTmp = document.createElement("LABEL");
        labelTmp.setAttribute("for", "checkbox_" + TIPUSNAUS[i]);
        labelTmp.innerHTML = TIPUSNAUS[i].toUpperCase();
        //console.log(labelTmp);

        paragrafTipusNaus.appendChild(checkboxTmp);
        paragrafTipusNaus.appendChild(labelTmp);
        
        let nouBR = document.createElement("BR");
        paragrafTipusNaus.appendChild(nouBR);
    //    paragrafTipusNaus.innerHTML = paragrafTipusNaus.innerHTML  + "<br>";  // SI FEM AIXÒ A LLAVORS EL addEventListener() NO FUNCIONA.

        checkboxTmp.addEventListener('change', function(){filtrarNausAmbCheckbox(i, estacio);});
    }
    
}