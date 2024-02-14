import { Tripulant } from "./../classes/Tripulant.js";
import { DEPARTAMENTS, pathImatges } from "./../PalasAteneaConstants.js";
import { PalasAtenea } from "./PalasAteneaInicialitzador.js";

let AmosBurton = new Tripulant(
  "M-101",
  "Amos",
  "Burton",
  "Mecànic",
  4,
  true,
  "MCRN-151",
  false,
  "Amos_Burton.webp"
);
let NaomiNagata = new Tripulant(
  "M-102",
  "Naomi",
  "Nagata",
  "Cap d’enginyeria",
  4,
  true,
  "MCRN-151",
  false,
  "Naomi_Nagata.webp"
);
let JamesHolden = new Tripulant(
  "J-101",
  "James",
  "Holden",
  "Capità",
  1,
  true,
  "MCRN-151",
  false,
  "James_Holden.webp"
);
let Komarov = new Tripulant(
  "J-102",
  "Vladimir",
  "Komarov",
  "Coronel",
  1,
  true,
  "Soyuz 1",
  false,
  "Vladimir_Komarov.jpg"
);
let Leonov = new Tripulant(
  "J-103",
  "Aleksei",
  "Leonov",
  "General",
  1,
  true,
  "Vosjod 2",
  false,
  "Aleksey_Leonov.jpg"
);

PalasAtenea.tripulacio.push(
  AmosBurton,
  NaomiNagata,
  JamesHolden,
  Komarov,
  Leonov
);

function obrirFormulari(tripulant) {
  var url = "formulariTripulant.html";
  localStorage.setItem("tripulant", tripulant);
  var newWindow = window.open("formulariTripulant.html");
  var tripulant = localStorage.getItem("tripulant");
  var id = tripulant.getId();
  var nom = tripulant.getNom();
  var cognom = tripulant.getCognom();
  var carrec = tripulant.getCarrec();
  var departament = tripulant.getDepId();
  var actiu = tripulant.getActiu();
  var nau = tripulant.getNauId();
  var personal = tripulant.getDeDressana();

  document.getElementById("id").setAttribute(value, id);
  document.getElementById("nom").setAttribute(value, nom);
  document.getElementById("id").setAttribute(value, cognom);
  document.getElementById("carrec").setAttribute(value, carrec);
  document.getElementById("departament").setAttribute(value, departament);
  document.getElementById("actiu").setAttribute(value, actiu);
  document.getElementById("nau").setAttribute(value, nau);
  document.getElementById("personal").setAttribute(value, personal);
}

function pintarTripulantEnTaula(tripulantTmp) {
  let taula = document.getElementById("taulaDadesTripulants");

  var nouTr = document.createElement("TR");

  // 1a COLUMNA:
  var nouTd1 = document.createElement("TD");
  nouTd1.style.textAlign = "center";
  var novaImg1 = document.createElement("IMG");
  novaImg1.setAttribute("src", pathImatges + tripulantTmp.imatge);
  novaImg1.setAttribute("width", "128");
  nouTd1.appendChild(novaImg1);

  nouTr.appendChild(nouTd1);

  // 2a COLUMNA:
  var nouTd2 = document.createElement("TD");
  nouTd2.setAttribute("align", "left");
  var nodeText = document.createTextNode(tripulantTmp.identificador);
  nouTd2.appendChild(nodeText);
  var nouBR = document.createElement("BR");
  nouTd2.appendChild(nouBR);
  var nodeText = document.createTextNode(tripulantTmp.desti); // Fer la llista linkable als tripulants.
  nouTd2.appendChild(nodeText);
  var nouBR = document.createElement("BR");
  nouTd2.appendChild(nouBR);
  var nodeText = document.createTextNode(
    "ÉS PERSONAL DE LA DRASSANA: " + tripulantTmp.personalDeDrassana
  ); // Fer la llista linkable als tripulants.
  nouTd2.appendChild(nodeText);

  nouTr.appendChild(nouTd2);

  // 3a COLUMNA:
  var nouTd3 = document.createElement("TD");
  nouTd3.setAttribute("align", "center");

  let checkboxTmp = document.createElement("INPUT");
  checkboxTmp.setAttribute("type", "checkbox");
  checkboxTmp.setAttribute("id", "checkbox_" + tripulantTmp.getId());
  checkboxTmp.setAttribute("name", "checkbox_" + tripulantTmp.getId());
  checkboxTmp.setAttribute("value", tripulantTmp.getId());
  if (arguments.length == 2) {
    //checkboxTmp.setAttribute("checked", false);           // NO FUNCIONA.
    checkboxTmp.checked = false; // SÍ FUNCIONA.
  } else {
    checkboxTmp.checked = true;
  }
  nouTd3.appendChild(checkboxTmp);

  // Veure el nº de reparacions pendents i les finalitzades.

  let buttonMapear = document.createElement("button");
  buttonMapear.setAttribute("type", "button");
  buttonMapear.setAttribute("id", "buttonMapear" + tripulantTmp.getId());
  buttonMapear.setAttribute("name", "buttonMapear" + tripulantTmp.getId());
  buttonMapear.setAttribute("value", tripulantTmp.getId());
  let textButton = document.createTextNode(tripulantTmp.getId());
  buttonMapear.appendChild(textButton);

  nouTd3.appendChild(buttonMapear);

  nouTr.appendChild(nouTd3);

  taula.appendChild(nouTr);

  buttonMapear.addEventListener("click", function () {
    obrirFormulari(tripulantTmp);
  });
}

function pintarTitolIColumnesTaula() {
  let taula = document.getElementById("taulaDadesTripulants");

  // Sinó esborrem el contingut de la taula, cada vegada que fem un "veureNausEnTaula()" ens afegirà
  // a la taula le dades de les naus mostrades anteriorment.
  taula.innerHTML = "";

  // Aquest codi es per si de cas la taula creada en PalasAtena.html NO té un títol i si ja el tingués no el machaqués:
  if (document.getElementById("titolTaula") == null) {
    var nouCaption = document.createElement("caption");
    nouCaption.setAttribute("id", "titolTaula");
    //nouCaption.id = "titolTaula";		            // Una altre forma de fer.
    var nodeTextCaption = document.createTextNode("Dades dels tripulants");
    nouCaption.appendChild(nodeTextCaption);
    taula.appendChild(nouCaption);
  }

  var nouTr = document.createElement("TR");

  var nouTd1 = document.createElement("TD");
  nouTd1.style.textAlign = "center";
  var nouB = document.createElement("B");
  var nodeTextTd1 = document.createTextNode("TRIPULANT");
  nouB.appendChild(nodeTextTd1);
  nouTd1.appendChild(nouB);
  nouTr.appendChild(nouTd1);

  var nouTd2 = document.createElement("TD");
  nouTd2.style.textAlign = "center";
  var nouB = document.createElement("B");
  var nodeTextTd2 = document.createTextNode("DADES");
  nouB.appendChild(nodeTextTd2);
  nouTd2.appendChild(nouB);
  nouTr.appendChild(nouTd2);

  var nouTd3 = document.createElement("TD");
  nouTd3.style.textAlign = "center";
  var nouB = document.createElement("B");
  var nodeTextTd3 = document.createTextNode("MAPEAR?");
  nouB.appendChild(nodeTextTd3);
  nouTd3.appendChild(nouB);
  nouTr.appendChild(nouTd3);

  taula.appendChild(nouTr);
}

function filtrarTripulantsAmbCheckbox() {
  pintarTitolIColumnesTaula();

  let llistaCheckboxsDepartaments = document
    .getElementById("checkboxsDepartaments")
    .getElementsByTagName("INPUT");

  for (let depIdTmp of llistaCheckboxsDepartaments) {
    if (depIdTmp.checked) {
      for (let tripulantTmp of PalasAtenea.tripulacio) {
        if (tripulantTmp.departamentId == depIdTmp.value) {
          pintarTripulantEnTaula(tripulantTmp);
        }
      }
    }
  }
}

export function crearCheckboxsDepartaments() {
  let checkboxsDepartaments = document.getElementById("checkboxsDepartaments");

  checkboxsDepartaments.innerHTML = "VEURE TRIPULANTS vs DEPARTAMENTS:";
  let nouBR = document.createElement("BR");
  checkboxsDepartaments.appendChild(nouBR);

  let checkboxTmp;
  let labelTmp;

  for (let i = 1; i < DEPARTAMENTS.length; i++) {
    checkboxTmp = document.createElement("INPUT");
    checkboxTmp.setAttribute("type", "checkbox");
    checkboxTmp.setAttribute("id", "checkbox_" + DEPARTAMENTS[i]);
    checkboxTmp.setAttribute("name", "checkbox_" + DEPARTAMENTS[i]);
    checkboxTmp.setAttribute("value", i);
    //checkboxTmp.setAttribute("checked", false);           // NO FUNCIONA.
    checkboxTmp.checked = false; // SÍ FUNCIONA.
    //console.log(checkboxTmp);

    labelTmp = document.createElement("LABEL");
    labelTmp.setAttribute("for", "checkbox_" + DEPARTAMENTS[i]);
    labelTmp.innerHTML = DEPARTAMENTS[i];
    //console.log(labelTmp);

    checkboxsDepartaments.appendChild(checkboxTmp);
    checkboxsDepartaments.appendChild(labelTmp);

    nouBR = document.createElement("BR");
    checkboxsDepartaments.appendChild(nouBR);
    //    paragrafTipusNaus.innerHTML = paragrafTipusNaus.innerHTML  + "<br>";  // SI FEM AIXÒ A LLAVORS EL addEventListener() NO FUNCIONA.

    checkboxTmp.addEventListener("change", function () {
      filtrarTripulantsAmbCheckbox();
    });
  }
}

export function tripulantsAlMap() {
  let numTripulantsPerTraslladar = 0;
  let mapaTripulants = PalasAtenea.mapaTripulants;

  console.log("mapaTripulants.size = " + mapaTripulants.size);

  let tripulantsPintatsEnTaula = document
    .getElementById("taulaDadesTripulants")
    .getElementsByTagName("input");

  //console.log("tripulantsPintatsEnTaula.length = " + tripulantsPintatsEnTaula.length);

  for (let checkboxTripulantTmp of tripulantsPintatsEnTaula) {
    if (checkboxTripulantTmp.checked) {
      numTripulantsPerTraslladar++;

      let tripulantObjecte = PalasAtenea.tripulacio.filter(function (
        tripulantTmp
      ) {
        console.log(
          "tripulantTmp.getId = " +
            tripulantTmp.getId() +
            ", checkboxTripulantTmp.value = " +
            checkboxTripulantTmp.value
        );

        if (tripulantTmp.getId() == checkboxTripulantTmp.value) {
          return true;
        } else {
          return false;
        }
      });
      // ALERTA!!!: tripulantObjecte és un array amb els objectes que compleixen la funció (return true).
      // Per tant per accedir a l'objecte (sempre hi haurà només 1 objecte que tingui un return true)
      // hem de fer tripulantObjecte[0].

      console.log(
        "tripulantObjecte = " +
          tripulantObjecte +
          ", tripulantObjecte[0] = " +
          tripulantObjecte[0] +
          ", tripulantObjecte[0].getId() = " +
          tripulantObjecte[0].getId()
      );

      mapaTripulants.set(checkboxTripulantTmp.value, tripulantObjecte[0]);
    } else {
      mapaTripulants.delete(checkboxTripulantTmp.value);
    }
  }

  alert(
    "S'han afegit " +
      numTripulantsPerTraslladar +
      " tripulants al Map() PalasAtenea.mapaTripulants"
  );

  if (mapaTripulants.size != numTripulantsPerTraslladar) {
    alert(
      "Hi ha més elements en el map dels que he afegit ara. PalasAtenea.mapaTripulants.size = " +
        mapaTripulants.size
    );
  }
  console.log("mapaTripulants.size = " + mapaTripulants.size);
}

export function veureTripulantsDelMap() {
  pintarTitolIColumnesTaula();

  PalasAtenea.mapaTripulants.forEach(function (valor, clau) {
    //console.log(valor);
    pintarTripulantEnTaula(valor, "patata");
  });
}

export function tripulantsForaDelMap() {
  // EXTREURE DEL MAP ELS TRIPULANTS QUE ESTIGUIN MARCATS AMB EL CHECKBOX.

  // ANEM A ESBORRAR DEL MAPA ELS MARCATS.
  let tripulantsPintatsEnTaula = document
    .getElementById("taulaDadesTripulants")
    .getElementsByTagName("input");

  for (let checkboxTripulantTmp of tripulantsPintatsEnTaula) {
    if (checkboxTripulantTmp.checked) {
      PalasAtenea.mapaTripulants.delete(checkboxTripulantTmp.value);
    }
  }
}

export function tripulacioVsMapaTripulants() {
  // QUE SURTIN TOTS ELS TRIPULANTS I NOMÉS ES DEIXI SEL·LECCIONAT 1, A LLAVORS AL PICAR SOBRE EL BOTÓ QUE DIGUI AMB UN ALERT SI ESTÀ O NO EN EL MAP.

  pintarTitolIColumnesTaula();

  for (let tripTmp of PalasAtenea.tripulacio) {
    if (PalasAtenea.mapaTripulants.has(tripTmp.getId())) {
      pintarTripulantEnTaula(tripTmp);
    }
  }
}
