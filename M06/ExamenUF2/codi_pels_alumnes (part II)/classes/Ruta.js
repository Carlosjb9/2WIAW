import { crearData } from "../llibreries/dates.js";
export class Ruta {
  #id;
  #nom;
  #dataAlta;
  #dataBaixa;
  #waypoints;
  constructor(id, nom, dataAlta, dataBaixa) {
    this.#id = id; //String
    this.#nom = nom; //String
    this.#dataAlta = crearData(dataAlta); //Date
    this.#dataBaixa = crearData(dataBaixa); //Date
    this.#waypoints = [];
    Object.preventExtensions(this);
  }

  set setNouWaypoint(nouWaypoint) {
    this.#waypoints.push(nouWaypoint);
  }

  get getWaypoints() {
    return this.#waypoints;
  }
}
