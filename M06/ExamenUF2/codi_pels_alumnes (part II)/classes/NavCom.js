import { crearData } from "../llibreries/dates.js";
import { Waypoint } from "./Waypoint.js";
import { Ruta } from "./Ruta.js";
// Sistema de navegació. Cada nau té 2 d'aquests sistemes, el principal i el secundari.
export class NavCom {
  #id;
  #nom;
  #tipus;
  #dataAlta;
  #dataActualitzacioDadesNavegacio;
  #waypointsConeguts = [];
  #rutes;
  constructor(id, nom, tipus, dataAlta, dataActualitzacioDadesNavegacio) {
    this.#id = id; //String
    this.#nom = nom; //String
    this.#tipus = tipus; //Integer
    this.#dataAlta = crearData(dataAlta); //Date
    this.#dataActualitzacioDadesNavegacio = crearData(
      dataActualitzacioDadesNavegacio
    ); //Date
    this.#waypointsConeguts = [];
    this.#rutes = [];
    Object.preventExtensions(this);
  }

  set setWaypointNou(waypointNou) {
    console.log(waypointNou);
    this.#waypointsConeguts.push(waypointNou);
  }

  crearWaypoint(nom, tipus, posX, posY, visitat) {
    const id = this.#waypointsConeguts.length + 1;
    const waypoint = new Waypoint(id, nom, tipus, posX, posY, visitat);
    console.log(waypoint);
    this.setWaypointNou = waypoint;
  }

  insertarWaypointEnNovaRuta(waypointIdTmp, checkboxId) {
    let posUltimaRuta = this.#rutes.length - 1;
    let novaRuta = this.#rutes[posUltimaRuta];

    let checkboxSeleccionat = document.getElementById(checkboxId);

    if (checkboxSeleccionat.checked) {
      novaRuta.setNouWaypoint = waypointIdTmp;
    } else {
      let posWaypointAEsborrar = novaRuta.getWaypoints.indexOf(waypointIdTmp);

      novaRuta.getWaypoints.splice(posWaypointAEsborrar, 1);
    }

    console.log("novaRuta[" + posUltimaRuta + "] = " + novaRuta.getWaypoints);
  }

  llistarWaypoints() {
    let totsWaypoints = this.#waypointsConeguts;
    let checkboxsWaypoints = document.getElementById("checkboxsWaypoints");
    checkboxsWaypoints.innerHTML = "";
    checkboxsWaypoints.appendChild(document.createElement("br"));
    let title = document.createTextNode("WAYPOINTS CONEGUTS:");

    checkboxsWaypoints.appendChild(title);

    for (let i = 0; i < totsWaypoints.length; i++) {
      let waypointTmp = totsWaypoints[i];

      // Crea un nuevo checkbox para cada waypoint
      let checkboxTmp = document.createElement("input");
      checkboxTmp.type = "checkbox";
      checkboxTmp.id = "checkbox_" + waypointTmp.getId;
      checkboxTmp.addEventListener("change", () => {
        this.insertarWaypointEnNovaRuta(waypointTmp.getId, checkboxTmp.id);
      });
      checkboxsWaypoints.appendChild(document.createElement("br"));

      let labelTmp = document.createTextNode(waypointTmp.getNom);

      checkboxsWaypoints.appendChild(checkboxTmp);
      checkboxsWaypoints.appendChild(labelTmp);
    }
  }

  crearNovaRuta() {
    const id = this.#rutes.length;
    const ruta = new Ruta(id, "ruta nº " + id, "1999-10-25", "2100-11-01");
    this.#rutes.push(ruta);
    this.llistarWaypoints(this);
  }

  inicialitzarRuta(...array_id) {
    const id_ruta = this.#rutes.length;
    const novaRuta = new Ruta(
      id_ruta,
      "ruta nº " + id_ruta,
      "1999-10-25",
      "2100-11-01"
    );
    for (let id_waypoint of array_id) {
      novaRuta.setNouWaypoint = id_waypoint;
    }
    this.#rutes.push(novaRuta);
    console.log("Creada la ruta: " + novaRuta.getWaypoints);
  }

  // SEMPRE ES TREBALLARÀ CONTRA L'ÚLTIMA RUTA INTRODUÏDA EN rutes.

  // Rebrà el id d'un waypoint i buscarà l'objecte waypoint amb aquest id en waypointsConeguts.
  // Se suposa que no hi poden haver més d'un waypoint amb el mateix id.
  // Retornarà l'objecte waypoint trobat.
  buscarWaypoint(waypointIdABuscar) {
    const totsElWaypoints = this.#waypointsConeguts;
    let waypointBuscat;
    for (let waypoint of totsElWaypoints) {
      if (waypoint.getId == waypointIdABuscar) {
        waypointBuscat = waypoint;
        break;
      }
    }
    return waypointBuscat;
  }

  // Comprova si tots els waypoints de l'ultima ruta han estat visitats.
  // Recorda que tots els objectes waypoint es guarden en waypointsConeguts.
  // Imprimeix per consola el resultat (un boolean).
  comprovarTotsWaypointsVisitats(NavComKamarovTmp) {
    let totsWaypointsVisitats = true;
    let posUltimaRuta = this.#rutes.length - 1;
    const llistaWaypoints = this.#rutes[posUltimaRuta].getWaypoints;
    for (let waypoint_id of llistaWaypoints) {
      const waypoint = this.buscarWaypoint(waypoint_id);
      if (!waypoint.getVisitat) {
        totsWaypointsVisitats = false;
        break;
      }
    }
    console.log("totsWaypointsVisitats = " + totsWaypointsVisitats);
  }

  // Comprova si algun dels waypoints de l'ultima ruta ha estat visitat.
  comprovarSiCapWaypointVisitat(NavComKamarovTmp) {
    let algunWaypointVisitat = false;
    let posUltimaRuta = this.#rutes.length - 1;
    const llistaWaypoints = this.#rutes[posUltimaRuta].getWaypoints;
    for (let waypoint_id of llistaWaypoints) {
      const waypoint = this.buscarWaypoint(waypoint_id);
      if (waypoint.getVisitat) {
        algunWaypointVisitat = true;
        break;
      }
    }
    console.log("algunWaypointVisitat = " + algunWaypointVisitat);
  }

  // Retorna els id dels waypoints que hagin estat visitats de l'ultima ruta.
  waypointsVisitats(NavComKamarovTmp) {
    let posUltimaRuta = this.#rutes.length - 1;
    const llistaWaypoints = this.#rutes[posUltimaRuta].getWaypoints;
    let waypointIdTmp;
    for (let waypoint_id of llistaWaypoints) {
      const waypoint = this.buscarWaypoint(waypoint_id);
      if (waypoint.getVisitat) {
        waypointIdTmp = waypoint.getId;
        console.log("waypointsVisitats.id = " + waypointIdTmp);
      }
    }
  }
}
