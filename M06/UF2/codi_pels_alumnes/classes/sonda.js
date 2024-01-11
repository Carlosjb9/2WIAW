// Arxiu: classes/Sonda.js

// Importa la constant PalasAteneaConstants
const { TIPUSSONDES } = require("./PalasAteneaConstants");
const ObjecteEstelar = require("./ObjecteEstelar");

class Sonda {
  #id;
  #nom;
  #tipus;
  #dataAlta;
  #dataBaixa;
  #imatge;
  #rutes;

  // Constructor
  constructor(id, nom, tipus, dataAlta, dataBaixa, imatge) {
    this.#id = id;
    this.#nom = nom;
    this.#tipus = tipus;
    this.#dataAlta = new Date(dataAlta);
    this.#dataBaixa = new Date(dataBaixa);
    this.#imatge = imatge;
    this.#rutes = [];
  }

  // Mètode per insertar una nova ruta
  insertarNovaRuta(objectesEstelars) {
    const novaRuta = objectesEstelars.map((objecteEstelar) => {
      return new ObjecteEstelar(
        objecteEstelar.id,
        objecteEstelar.nom,
        objecteEstelar.tipus,
        objecteEstelar.posicio
      );
    });

    this.#rutes.push(novaRuta);
  }
  // Mètode per veure el temps de servei
  veureTempsDeServei() {
    const tempsServei = this.#dataBaixa - this.#dataAlta;
    const tempsServeiEnDies = Math.abs(tempsServei / (1000 * 60 * 60 * 24));

    const anys = Math.floor(tempsServeiEnDies / 365);
    const mesos = Math.floor((tempsServeiEnDies % 365) / 30);
    const dies = Math.floor(tempsServeiEnDies % 30);

    return { anys, mesos, dies };
  }

  // Mètode toString
  toString() {
    const tempsServei = this.veureTempsDeServei();
    return `${this.#nom} ${TIPUSSONDES[this.#tipus]} (${
      this.#id
    }) - Temps de servei: ${tempsServei.anys} anys, ${
      tempsServei.mesos
    } mesos, ${tempsServei.dies} dies`;
  }

  // Mètode per veure la ruta ordenada per distància
  veureRutaOrdenadaPerDistancia() {
    const ultimaRuta = this.#rutes[this.#rutes.length - 1];
    return ultimaRuta.slice().sort((a, b) => {
      const distanciaA = a.obtenirDistancia();
      const distanciaB = b.obtenirDistancia();
      return distanciaA - distanciaB;
    });
  }

  // Mètode per marcar la ruta com a finalitzada
  marcarRutaFinalitzada() {
    const ultimaRuta = this.#rutes[this.#rutes.length - 1];
    ultimaRuta.forEach((objecteEstelar) => {
      objecteEstelar.marcarComVisitat();
    });

    return `Ruta finalitzada:\n${this.toString()}\n${ultimaRuta
      .map((objecteEstelar) => objecteEstelar.toString())
      .join("\n")}`;
  }
  comprovarDistanciaSeguretat() {
    const ultimaRuta = this.#rutes[this.#rutes.length - 1];
    const distanciaSeguretat = 5000;

    const distanciesSegures = ultimaRuta.every((objecteEstelar) => {
      const distancia = objecteEstelar.obtenirDistancia();
      return distancia >= distanciaSeguretat;
    });

    return distanciesSegures;
  }

  // Mètode per comprovar si estarà alabast
  comprovarSiEstaraALAbast() {
    const ultimaRuta = this.#rutes[this.#rutes.length - 1];
    const distanciaMaxima = 25000;

    const estarAlAbast = ultimaRuta.some((objecteEstelar) => {
      const distancia = objecteEstelar.obtenirDistancia();
      return distancia <= distanciaMaxima;
    });

    return estarAlAbast;
  }

  // Mètode per obtenir waypoints al abast
  waypointsEnQueEstaraALAbast() {
    const ultimaRuta = this.#rutes[this.#rutes.length - 1];
    const distanciaMaxima = 25000;

    return ultimaRuta.filter((objecteEstelar) => {
      const distancia = objecteEstelar.obtenirDistancia();
      return distancia <= distanciaMaxima;
    });
  }
}

// Exporta la classe perquè pugui ser utilitzada en altres arxius
module.exports = Sonda;
