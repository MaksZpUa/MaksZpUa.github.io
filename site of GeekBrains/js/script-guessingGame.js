function guessingGame () {
var iiNumder = Math.round(Math.random() * 100);
var userNumber = +prompt("Угадывайте число от 0 до 100"); 

		if (userNumber > iiNumder) {
   			alert("Ваше число больше загаданного :(");
}
		if (userNumber < iiNumder) {
   			alert("Ваше число меньше загаданного :(");
}
		if (userNumber == iiNumder) {
   			alert("Ура :)");
}

   			alert("Было загаданно - " + iiNumder); 
}