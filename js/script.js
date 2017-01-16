(function() {
  
  var btn = document.querySelector("#btn"),
      output = document.querySelector("#output");
  
//   losowanie liczb w przedziale od 1-49
function getRandom(min,max) {
  
 return Math.round(Math.random() * (max -1) + 1);
}
  
  function showRandomNumber() {

    var numbers= [],
        random = '';
    
    for(var i = 0; i<6; i++) {
      random = getRandom(1,49);
      
      
    while(numbers.indexOf(random) !== -1) {

      random = getRandom(1,49);
      console.log("Powtórzyła się liczba " + random);

    }
      
      numbers.push(random);
    }  

    numbers.sort(function(a,b) {

        if(a < b) { return -1; }

        else if(a > b) { return 1; }

        else { return 0;}

      });
      
    output.value = numbers.join(", ");
  }

  btn.onclick = showRandomNumber;
  

})();