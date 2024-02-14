export class Ordenacio {
    static ordenarNumericament(a, b) {
        if ((!isNaN(a)) && (!isNaN(b))) {
            aNum = parseInt(a);
            bNum = parseInt(b);
            if (a < b) {
                return -1;
            } else {
                if (a > b) {
                    return 1;
                } else {
                    return 0;
                }
            }
        }
    }
    
    static ordenarAlfabeticament(a, b) {
        a = a.toString();			// Això és per si de cas entra un número. En l'exercici 4 s'ha d'ordenar paraules i números.
        b = b.toString();
    
        let aMinuscula = a.toLowerCase();
        let bMinuscula = b.toLowerCase();
    
        if (aMinuscula < bMinuscula) {
            return -1;
        } else {
            if (aMinuscula > bMinuscula) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}

/*
export function ordenarNumericament(a, b) {
    if ((!isNaN(a)) && (!isNaN(b))) {
        aNum = parseInt(a);
        bNum = parseInt(b);
        if (a < b) {
            return -1;
        } else {
            if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }
}



export function ordenarAlfabeticament(a, b) {
    a = a.toString();			// Això és per si de cas entra un número. En l'exercici 4 s'ha d'ordenar paraules i números.
    b = b.toString();

    let aMinuscula = a.toLowerCase();
    let bMinuscula = b.toLowerCase();

    if (aMinuscula < bMinuscula) {
        return -1;
    } else {
        if (aMinuscula > bMinuscula) {
            return 1;
        } else {
            return 0;
        }
    }
}

*/