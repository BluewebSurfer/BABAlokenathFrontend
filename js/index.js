// manu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "newnav") {
      x.className += " responsive";
    } else {
      x.className = "newnav";
    }
  }