class Reparacio {
    id;
    nauId = -1;
    departamentId = -1;
    descripcio;
    dataInici;
    dataFi;
    finalitzada = false;
    treballadors = [];
    pecesRecanvi = [];

    veureDades(){
        return "REPARACIO ID: " + this.id + ", DESCRIPCIO: " + this.descripcio;
    }
}