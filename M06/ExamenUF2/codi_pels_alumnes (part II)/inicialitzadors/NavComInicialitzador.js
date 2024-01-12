import { NavCom } from "../classes/NavCom.js";
const NavComKamarov = new NavCom(
  "AO-101",
  "NavCom primari de la nau Kamarov",
  1,
  "1977-08-05",
  "2025-00-01"
);

NavComKamarov.crearWaypoint("Jupiter", 1, 100, 100, true);
NavComKamarov.crearWaypoint("Saturno", 1, 200, 200, true);
NavComKamarov.crearWaypoint("Kuiper", 3, 300, 300, false);
NavComKamarov.crearWaypoint("Marte", 3, 50, 50, true);

NavComKamarov.inicialitzarRuta(1, 2, 3, 4);
//NavComKamarov.inicialitzarRuta(1, 2, 4);

export { NavComKamarov };
