/****************
 * ROOOADTRIIIP *
 * BY NATHAN    *
 ****************/

var prompt = require('sync-prompt').prompt;

//VARIABLES/PARSING

var mi;//number of miles to be travelled
mi = parseInt(mi);
var bux;//cost of gas per gallon
bux = parseInt(bux);
var mpg;//miles per gallon
mpg = parseInt(mpg);
var capc;//capacity of gas tank
capc = parseInt(capc);
var mph;//miles per hour
mph = parseInt(mph);
var ride;//car,truck,motorcycle
var cost;//total cost of the trip
cost = parseInt(cost);
var stops;//number of stops to make
stops = parseInt(stops);

//PROMPTS

mi = prompt('How many miles are you travelling? ');
bux = prompt('What\'s the average price of gas? ');
mpg = prompt('What\'s the gas mileage for your vehicle? ');
//console.log(mpg);
capc = prompt('How many gallons of gas can your tank hold? ');
mph = prompt('How fast do you think you\'ll be going? ');
ride = prompt('Choose one: \'car\',\'truck\' <enter> ');

/*
//CALC MPG

switch(ride)
{
  case 'car':
    if(mph>55 && mph<=70)
    {
      var i;
      i = parseInt(i);
      i = mph-55;
      mpg -= i;
    }
    else if(mph>70)
    {
      mpg-=15;
    }
  break;
  case 'truck':
    if(mph>55 && mph<=60)
    {
      var i;
      i = parseInt(i);
      i = mph - 55;
      i = i * 3;
      mpg -= i;
    }
    else if(mph>60)
    {
      mpg-=15;
    }
    break;
  case 'motorcycle':
    if(mph>55)
    {
      var i;
      i = parseInt(i);
      i = mph - 55;
      mpg += i;
    }
   else if(mph>70)   //problem printing out two ints added together
    {
      mpg+=15;
    }  
    break;
}
//console.log('mpg is ' + mpg);

if(mpg<10)
{
  mpg = 10;
}

//console.log('mpg is ' + mpg);

//CALCULATE TRIPS & COST
stops = mi / (mpg*capc);       //math was wrong
cost = (capc*bux) * stops;

//McGARNAGLE GETS RESULTS!

console.log('You are going to drive ' + mi + ' miles, it will cost you ' + cost.toFixed(2) + ' dollars, and you will need to stop and fill up ' + stops.toFixed(0)  + ' times.');


*/


//IMRPOVED CODE

if(mph > 55)
{
  var delta = mph - 55;

  if(ride === 'truck')
  {
    delta *= 3;
  }

  mpg -= delta;

  if(mpg<10)
  {
    mpg = 10;
  }
}

var gas = mi / mpg;
var cost = gas * bux;
var stops = gas / capc;


console.log('You are going to drive ' + mi + ' miles, it will cost you ' + cost.toFixed(2) + ' dollars, and you will need to stop and fill up ' + Math.ceil(stops)  + ' times.');


















