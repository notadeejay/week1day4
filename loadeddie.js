function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var randomElement = list[Math.floor(Math.random()*list.length)]


  return function() {
   return randomElement;
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5


