export class Waypoint {
  #id;
  #nom;
  #tipus;
  #posicioX;
  #posicioY;
  constructor(id, nom, tipus, posicioX, posicioY) {
    this.#id = id; //String
    this.#nom = nom; //String
    this.#tipus = tipus; //Integer
    this.#posicioX = posicioX;
    this.#posicioY = posicioY;
  }

  get getId() {
    return this.#id;
  }

  get getNom() {
    return this.#nom;
  }
}
