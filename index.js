function Netwage(){

var wage = document.getElementById('wage').value;
var yearOfBirth = document.getElementById('yearOfBirth').value;
var age = document.getElementById('age').value;

 if(wage<=9325.16){
 if(age<18){var NI = 344.24;}
 else(){var NI = 932.36;}

 if(wage<=9100){
  var totalTax = 0;
 }
 else if(wage>=9101 && wage<=14500){
  var percent = (wage*15)/100;
  totalTax = percent-1365;
 }
var totalDeduction =totalTax+NI;
var Net = wage-totalDeduction;
document.getElementById(netReturn).innerHTML = ("Your net wage is €"+Net.toFixed(2));
}

else if(wage>9325.16){
 if(wage<=14500){
 percent = (wage*15)/100;
 totalTax = percent-1365;
 }
 else if(wage>=14501 && wage<=19500){
 percent=(wage*25)/100;
 totalTax = percent-2815;
 }

 else if(wage>19500 && wage<60000){
 percent=(wage*25)/100;
 totalTax=percent-2725;
 }

 else if(wage>=60000){
 percent=(wage*35)/100;
 totalTax=percent-8725;
 }

 if(yearOfBirth<=1961){
 if( wage<=18743.40){NI = (wage*10)/100;}
 else if(wage>18743.40){NI=1874.60;}
 }

 else if(yearOfBirth>=1962){
 if(wage<=24985.48){NI = (wage*10)/100;}
 else if(wage>24985.48){NI=2498.60;}
 }
}

totalDeduction = NI+totalTax;
Net = wage-totalDeduction;
document.getElementById(netReturn).innerHTML = ("Your net wage is €"+Net.toFixed(2));
}
