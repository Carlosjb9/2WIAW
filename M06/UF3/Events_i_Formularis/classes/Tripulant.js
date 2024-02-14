import { DEPARTAMENTS } from "./../PalasAteneaConstants.js";

export class Tripulant {
  #id;
  #nom;
  #cognom;
  carrec;
  departamentId;
  actiu = true;
  nauId;
  personalDeDrassana = false;
  imatge;

  constructor(
    id,
    nom,
    cogn,
    carrec,
    depId,
    actiu,
    nauId,
    deDrassana,
    fitxerImatge
  ) {
    this.#id = id;
    this.#nom = nom;
    this.#cognom = cogn;
    this.carrec = carrec;
    this.departamentId = depId;
    this.actiu = actiu;
    this.nauId = nauId;
    this.personalDeDrassana = deDrassana;
    this.imatge = fitxerImatge;

    Object.preventExtensions(this); // D'aquesta manera evitem que ningú amplii l'objecte afegint/eliminant propietats i mètodes.
  }

  get identificador() {
    return this.#nom + " " + this.#cognom + " (ID: " + this.#id + ")";
  }

  get desti() {
    return (
      this.carrec +
      " en el departament " +
      DEPARTAMENTS[this.departamentId] +
      " i en actiu " +
      this.actiu +
      " en la nau " +
      this.nauId
    );
  }

  getId() {
    return this.#id;
  }

  getNom() {
    return this.#nom;
  }

  getCognom() {
    return this.#cognom;
  }

  getCarrec() {
    return this.carrec;
  }

  getDepId() {
    return this.depId;
  }

  getActiu() {
    return this.actiu;
  }

  getNauId() {
    return this.nauId;
  }

  getDeDressana() {
    return this.deDrassana;
  }

  getFixerImatge() {
    return this.fitxerImatge;
  }

  veureDadesBasiquesEnLLista() {}

  veureTotesLesDadesEnTaula() {
    //return this.nom + " " + this.cognom + " (ID: " + this.id + ")";
  }
}
