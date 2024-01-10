export function crearData(dataText) {
    let dataDesglosada = dataText.split("-");
    let dataDate = new Date(dataDesglosada[0], dataDesglosada[1], dataDesglosada[2]);	    //(any, mes, dia);

    return dataDate;
}
