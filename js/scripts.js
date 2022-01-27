$(document).ready(function(event) {

  $("form#triangle").submit(function(event) {
    const sideOne = parseInt($("#sideOne").val());
    const sideTwo = parseInt($("#sideTwo").val());
    const sideThree = parseInt($("#sideThree").val());
    let long = Math.max(sideOne, sideTwo, sideThree);
    let short = Math.min(sideOne, sideTwo, sideThree);
    let total = sideOne+sideTwo+sideThree;
    let middle = total-(long+short);
    if (sideOne+sideTwo <= sideThree || sideOne+sideThree <= sideTwo || sideTwo+sideThree <= sideOne) {
      notATriangle();
    } else if (sideOne === sideTwo && sideTwo === sideThree) {
      equilateralTriangle();
    } else if (sideOne === sideTwo || sideTwo === sideThree || sideOne === sideThree) {
      isoscelesTriangle();
      isoscelesSide(sideOne,sideTwo,sideThree)
    } else {
      scaleneTriangle();
    }
    event.preventDefault();

    function notATriangle() {
      $("#not-a-triangle").removeClass("hidden");
      $("#isosceles").addClass("hidden");
      $("#scalene").addClass("hidden");
      $("#equilateral").addClass("hidden");
    }

    function isoscelesSide(one,two,three) {
      if (one === two){
        $("#left").text(one);
        $("#right").text(two);
        $("#bottom").text(three);
      } else if (one === three){
        $("#left").text(one);
        $("#right").text(three);
        $("#bottom").text(two);
      } else {
        $("#left").text(two);
        $("#right").text(three);
        $("#bottom").text(one);
      }
    }

    function equilateralTriangle() {
      $("#isosceles").addClass("hidden");
      $("#scalene").addClass("hidden");
      $("#equilateral").removeClass("hidden");
      $("#triangle-equi").removeClass("hidden");
      $("#triangle-iso").addClass("hidden");
      $("#triangle-scal").addClass("hidden");
    }

    function isoscelesTriangle() {
      $("#equilateral").addClass("hidden");
      $("scalene").addClass("hidden");
      $("#isosceles").removeClass("hidden");
      $("#triangle-iso").removeClass("hidden");
      $("#triangle-scal").addClass("hidden");
      $("#triangle-equi").addClass("hidden");
    } 
    function scaleneTriangle() {
      $("#equilateral").addClass("hidden");
      $("#scalene").removeClass("hidden");
      $("#isosceles").addClass("hidden");
      $("#triangle-iso").addClass("hidden");
      $("#triangle-scal").removeClass("hidden");
      $("#triangle-equi").addClass("hidden");
    }
  });
});