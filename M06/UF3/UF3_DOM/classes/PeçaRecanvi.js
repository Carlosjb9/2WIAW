export class PeçaRecanvi {
    modelId = "-1";
    nom = "";
    peces = [];        // Cada element té 2 valors: numSerie (String) i lliure (boolean).


    constructor(modelId, nom){
        this.modelId = modelId;
        this.nom = nom;

        // Creem 5 peces lliures i 2 ja utilitzades:
        for(let i = 1; i <= 7; i++) {
            let nomTmp = this.modelId + "-00" + i;

            if (i <= 5) {
                this.peces.push([nomTmp, true]);
            } else {
                this.peces.unshift([nomTmp, false]);
            }
        }
    }

    inicialitzarPecesRecanvi() {
        
    }

    veureDades(){
        return  this.nom + " (MODEL: " + this.modelId + ")";
    }

    toString(){
        let text = this.nom + " (MODEL: " + this.modelId + "): ";
        /*
        for(let i = 0; i < this.peces.length; i++){
            text = text + " " + this.peces[i][0] + " " + this.peces[i][1] + "; ";
        }*/

        return text;
    }
}