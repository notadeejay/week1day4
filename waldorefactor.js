function findWaldo(arr, found) {
  var i;
      arr.forEach(function (x, index) {
      return x === 'Waldo' ? (i = index) : false;
      });

     found(i);   // execute callback
    }

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}


findWaldo(["Alice", "Bob", "Waldo", "Winston",], actionWhenFound);