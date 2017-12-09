function myPercent (){
	var vklad = parseInt (prompt('Введите сумму вклада', ''));
var rost = 1 + parseInt (prompt('Введите годовой процент', ''))/ 100;
var time = ['год',
            'два года',
            'три года',
            'четыре года',
            'пять лет'];
for (var i = 0; i < 5; i++)
    {
    vklad = parseInt (vklad * rost);
    alert ('Через ' + time [i] + ' на вашем счету будет ' + vklad)
    } 
}