const PalasAteneaConstants = require("./PalasAteneaConstants");

class ObjecteEstelar {
  constructor(id = "-1", nom, tipus, posicio = [0, 0]) {
    this.#id = id || "-1";
    this.#nom = nom;
    this.#tipus = tipus;
    this.#posicio = posicio;
    this.#visitat = false;
  }

  calcularDistancia() {
    return this.#posicio[0] * this.#posicio[1];
  }

  toString() {
    return "nom: " + this.#nom + "\n" + "tipus: " + this.#tipus;
  }
}

module.exports = ObjecteEstelar;
