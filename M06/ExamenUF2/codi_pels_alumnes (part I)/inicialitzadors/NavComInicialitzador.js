import { NavCom } from "../classes/NavCom.js";
const NavComKamarov = new NavCom(
  "AO-101",
  "NavCom primari de la nau Kamarov",
  1,
  "1977-08-05",
  "2025-00-01"
);

NavComKamarov.crearWaypoint("Jupiter", 1, 100, 100);
NavComKamarov.crearWaypoint("Saturno", 1, 200, 200);
NavComKamarov.crearWaypoint("Kuiper", 3, 300, 300);
NavComKamarov.crearWaypoint("Marte", 3, 50, 50);

export { NavComKamarov };
