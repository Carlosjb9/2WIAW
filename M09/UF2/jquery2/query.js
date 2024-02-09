$(document).ready(function () {
  // ex1
  $("img").each(function () {
    console.log($(this).attr("alt"));
  });

  // ex2
  $("form inpur").addClass("fruits");

  // ex3
  $("#myList.current").removeClass();

  let nextItem = $("#myList.current").next();

  if (nextItem.length > 0) {
    nextItem.addClass("current");
  } else {
    $("#myList li:first").addClass("current");
  }

  // ex4
  let element = $("#fruits #myTableCell ");
  let nextElement = element.next("td");
  nextElement.css("background-color", "yellow");

  // ex5

  let primerItem = $("#slideshow li:first");
  primerItem.addClass("current");
  primerItem.siblings().addClass("disabled");

  // ex6
  for (var i = 0; i < 5; i++) {
    $("#myList").append("<li>Nou Element " + i + "</li>");
  }

  // ex7
  $("#myList li:odd").remove();

  // ex8
  var newH2 = $("<h2>Nou Títol</h2>");

  var newParagraph = $("<p>Nou contingut del paràgraf.</p>");
  $("div.module:last").append(newH2, newParagraph);

  // ex9
  var newOption = $("<option>").val("Wednesday").text("Wednesday");

  $("select").append(newOption);

  // ex10

  var newModuleDiv = $("<div>").addClass("module");

  $("div.module:last").after(newModuleDiv);

  var existingImage = $("img:first");

  var newImage = existingImage.clone();

  newModuleDiv.append(newImage);
});
