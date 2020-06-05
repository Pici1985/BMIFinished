function getValues() {
    var hight = document.getElementById("hight").value;
    var weight = document.getElementById("weight").value;
    var BMI;
    BMI = weight / (hight**2);
    BMI = Math.round(BMI);
  /* alert("BMI: ", BMI );  */

 document.getElementById("demo").innerHTML = BMI;
} 

