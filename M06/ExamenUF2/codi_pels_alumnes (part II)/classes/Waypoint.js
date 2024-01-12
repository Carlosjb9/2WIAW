export class Waypoint {
  #id;
  #nom;
  #tipus;
  #posicioX;
  #posicioY;
  #visitat;
  constructor(id, nom, tipus, posicioX, posicioY, visitat) {
    this.#id = id; //String
    this.#nom = nom; //String
    this.#tipus = tipus; //Integer
    this.#posicioX = posicioX;
    this.#posicioY = posicioY;
    this.#visitat = visitat;
    Object.preventExtensions(this);
  }

  get getId() {
    return this.#id;
  }

  get getNom() {
    return this.#nom;
  }

  set setVisitat(boolean) {
    this.#visitat = boolean;
  }

  get getVisitat() {
    return this.#visitat;
  }
}
