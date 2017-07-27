var countdownGenerator = function (x) {

  var n = x + 1;

  return function () {
    n -= 1;

    if (n > 0) {
      console.log("T-minus " + n + "...");
    }
    if (n === 0) {
      console.log("Blast off!");
    } if (n < 0) {
      console.log("Rockets already gone, bub!")
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!