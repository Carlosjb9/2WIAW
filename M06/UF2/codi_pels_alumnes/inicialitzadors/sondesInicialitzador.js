// Arxiu: sondesInicialitzador.js

// Importa las clases necesarias
const Sonda = require("./classes/Sonda");
const ObjecteEstelar = require("./classes/ObjecteEstelar");

// Crea una instancia de la sonda Voyager
const voyager = new Sonda(
  "Voy-1",
  "Voyager 1",
  4,
  "1977-08-05",
  "2025-01-01",
  "Voyager.jpg"
);

// Crea cuatro waypoints (ObjecteEstelar)
const jupiter = new ObjecteEstelar("P-01", "Jupiter", 1, [100, 100]);
const saturno = new ObjecteEstelar("P-02", "Saturno", 1, [200, 200]);
const kuiper = new ObjecteEstelar("C-01", "Kuiper", 3, [300, 300]);
const marte = new ObjecteEstelar("P-03", "Marte", 3, [50, 50]);

// Inserta la nueva ruta con los waypoints en la sonda
voyager.insertarNovaRuta([jupiter, saturno, kuiper, marte]);

// Exporta las instancias para que puedan ser utilizadas en otros archivos
module.exports = { voyager, jupiter, saturno, kuiper, marte };
