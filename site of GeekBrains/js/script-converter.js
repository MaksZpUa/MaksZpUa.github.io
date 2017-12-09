    function myFunction(){
     var convert = prompt("Введите сумму в RUB:");
  	 var dollar = 0.02;
  	 var evro = 0.0144;
  	 var itog = convert * dollar;
     var itog2 = convert * evro;

  	 alert(itog + " $" + "\n" + itog2 + " €");
}