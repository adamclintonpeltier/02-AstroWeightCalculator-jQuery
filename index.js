// jquery list
var planets = [
  ['The Sun', 27.9],
  ['Jupiter', 2.54],
  ['Neptune', 1.19],
  ['Saturn', 1.08],
  ['Earth', 1],
  ['The Moon', 0.1655],
  ['Mars', 0.3895],
  ['Jupiter', 2.640],
  ['Saturn', 1.139],
  ['Uranus', 0.917],
  ['Neptune', 1.148],
  ['Pluto', 0.06],
  ['Krypton', 10]
];
// loop for dynamically populating a drop-down list. jquery is used. 
for (var i=0;i<planets.length;i++){
   $('<option/>').val(planets[i][1]).html(planets[i][0]).appendTo('#anotherWorld');
}
//button
function calculator() {

// variables to use input and populated-list data. jquery is used.
    var yourWeight = $("#yourWeight").val();
    var anotherWorld = $("#anotherWorld").val();
    var myWorld = $("#anotherWorld option:selected").html();

    var myNewWeight = yourWeight * anotherWorld;
    myNewWeight = myNewWeight.toFixed(2);
//answer function: only displays when button is clicked.
    $("#answer").html(" If you were on " + myWorld + " you would weigh " + myNewWeight);

//colors a field behind the answer to enhance visibility. 
$("#answer").css("background", "#ff9");
}

