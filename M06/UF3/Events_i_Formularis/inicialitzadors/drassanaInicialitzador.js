export {veureDadesMollsDrassana, veureQuantitatPecesRecanviADemanar}

function veureDadesMollsDrassana(estacio) {
    let paragraf = document.getElementById("paragrafDelBody");
    paragraf.innerHTML = "ESTAT DELS MOLLS DE LA DRASSANA DE L'ESTACIO " + estacio.nom + ": <br>";
    paragraf.innerHTML = paragraf.innerHTML + estacio.veureEstatMolls() + estacio.hiHaCapMollLliure();

    estacio.patata = "patata voladora";         // ERROR: hem ficat en el constructor de EstacioPalasAtenea "Object.preventExtensions(this);" de manera que no es pot afegir/elminar propietats dels objectes creats a partir de la classe EstacioPalasAtenea.
    console.log("estacio.nom = " + estacio.nom);
    console.log("estacio.patata = " + estacio.patata);
}


function veureQuantitatPecesRecanviADemanar(estacio) {
    let paragraf = document.getElementById("paragrafDelBody");
    paragraf.innerHTML = "NÚMERO DE PECES GASTADES EN REPARACIONS: <br>" ;
    paragraf.innerHTML = paragraf.innerText + estacio.veureQuantitatPecesRecanviADemanar();
}