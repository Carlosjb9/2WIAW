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
  }

  set setWaypointNou(waypointNou) {
    console.log(waypointNou);
    this.#waypointsConeguts.push(waypointNou);
  }

  crearWaypoint(nom, tipus, posX, posY) {
    const id = this.#waypointsConeguts.length;
    const waypoint = new Waypoint(id, nom, tipus, posX, posY);
    console.log(waypoint);
    this.setWaypointNou = waypoint;
  }

  insertarWaypointEnNovaRuta(waypointIdTmp, checkboxId) {
    // Accede a la última ruta creada en rutes
    let posUltimaRuta = this.#rutes.length - 1;
    console.log(this.#rutes);
    let ultimaRuta = this.#rutes[posUltimaRuta];

    // Accede al checkbox con getElementById
    let checkbox = document.getElementById(checkboxId);

    // Verifica si el checkbox está marcado
    if (checkbox.checked) {
      // Añade el waypoint a la ruta
      ultimaRuta.setNouWaypoint = waypointIdTmp;
    } else {
      // Elimina el waypoint de la ruta
      this.#rutes.pop();
    }

    // Imprime los waypoints de la ruta en la consola
    console.log("Waypoints de la ruta:", ultimaRuta.getWaypoints);
    console.log("novaRuta[" + posUltimaRuta + "] = " + ultimaRuta.getWaypoints);
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
}
