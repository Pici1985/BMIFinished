
function getValues() {
  var hight = document.getElementById("hight").value;
  var weight = document.getElementById("weight").value;
  var BMI;
  BMI = weight / (hight**2);
  BMI = Math.round(BMI);
  document.getElementById("demo").innerHTML = BMI;

bmiGrouper(BMI);
}

function bmiGrouper(BMI) { 
    var a = 0;  
  if (BMI < 18) {
    a = 1
    document.getElementById("answer").innerHTML = "underweight";
  } else if ( BMI < 23) {
    a = 2
    document.getElementById("answer").innerHTML = "normal";
  } else {
    a = 3
    document.getElementById("answer").innerHTML = "ovrweight";
  }
picRevealer(a);
}

function picRevealer(a) {
  if (a == 1) {
    document.getElementById("skinny").style.display = "";    
  } else if (a == 2) {
    document.getElementById("normal").style.display = "";    
  } else {
    document.getElementById("fat").style.display = "";
  }
  setTimeout( 
    function() {
      window.location.reload(true);
    }, 6000);  
}
