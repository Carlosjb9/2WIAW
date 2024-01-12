//Exercici 1
var divs = $("div.module");

console.log(divs);

//Exercici 2
var element1 = $("#myList li:eq(2)");
var element2 = $("#myList li:contains('List item 3')");
var element3 = $("myListItem");

console.log(element1);
console.log(element2);
console.log(element3);

// L'ultima es la millor opció, ja que ens assegurem d'agafar la que volem amb l'id

//Exercici 3
var inputText = $('input[type="text"].input_text');

var labelAsociado = inputText.prev("label");

console.log(labelAsociado);

//Exercici 4
var hiddenElements = $(":hidden");

var countHiddenElements = hiddenElements.length;

console.log(countHiddenElements);

//Exercici 5

var imatges = $("img[alt]");

console.log(imatges);

//Exercici 6

var filasImpares = $("table tbody tr:odd");

console.log(filasImpares);
