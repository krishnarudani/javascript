function whobuylunch(name) {
     
  var numberOfPeople= name.length;
  var randomePersonPosition=Math.floor(Math.random(numberOfPeople));
  var randomperson=name[randomePersonPosition];

return randomperson+" is going to buy lunch today!";
}