$(document).ready(function(){  
  function sum(a,b){
    return a+b;
  }
  function sub(a,b){
    return a-b;
  }
  function multi(a,b){
    return a*b;
  }
  function div(a,b){
    return a/b;
  }
  
  function calculate(equ){
    var result;
    equ = equ.split(/(\d+\.?\d{0,})/);
    console.log(equ);
    // first checks for multiplciation and divison, changes elements to result
    for (var i=0; i<equ.length; i++){
       switch (equ[i]){
         case "*":
           result = multi(Number(equ[i-1]),Number(equ[i+1]));
           equ[i+1] = result;
           equ[i-1] = result;
           break;
         case "/":
           result = div(Number(equ[i-1]),Number(equ[i+1]));
           equ[i+1] = result;
           equ[i-1] = result;
           break;
                    }
    }    
    //then checks for addition and subtraction
    for (var j=0; j<equ.length; j++){
       switch (equ[j]){
           case "+":
          result = sum(Number(equ[j-1]),Number(equ[j+1]));
           equ[j+1] = result;
           break;
         case "-":
           result = sub(Number(equ[j-1]),Number(equ[j+1]));
           equ[j+1] = result;
           break; 
                     }
    }
    
    console.log(result);
    return result;
  }
  
var equation="";
    $("#0").on("click",function(){
    equation +=0
    $("#expression").append("0");
  })
      $("#decimal").on("click",function(){
    equation +="."
    $("#expression").append(".");
  })
  $("#1").on("click",function(){
    equation +=1
    $("#expression").append("1");
  })
    $("#2").on("click",function(){
    equation +=2
      $("#expression").append("2");
  })
      $("#3").on("click",function(){
    equation +=3
        $("#expression").append("3");
  })
      $("#4").on("click",function(){
    equation +=4
        $("#expression").append("4");
  })
      $("#5").on("click",function(){
    equation +=5
        $("#expression").append("5");
  })
      $("#6").on("click",function(){
    equation +=6
        $("#expression").append("6");
  })
      $("#7").on("click",function(){
    equation +=7
        $("#expression").append("7");
  })
      $("#8").on("click",function(){
    equation +=8
        $("#expression").append("8");
  })
      $("#9").on("click",function(){
    equation +=9
        $("#expression").append("9");
  })
  
  $("#add").on("click",function(){
    equation += "+"
    $("#expression").append("+");
  })
  $("#subtract").on("click",function(){
    equation += "-"
    $("#expression").append("-");
  })
   $("#multi").on("click",function(){
    equation += "*"
     $("#expression").append("x");
  })
   $("#divide").on("click",function(){
    equation += "/"
     $("#expression").append("/");
  })
     $("#CE").on("click",function(){
    equation = ""
       $("#screen").text("");
       $("#expression").text("");
  })
 
  $("#equals").on("click", function(){
    $("#screen").text("");
    $("#screen").append(calculate(equation));
  });
  
  
  
  
  
})