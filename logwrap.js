
var wrapLog = function (callback, name) {
  return function() {
    let result = callback.apply(this, arguments);
    console.log(`${name}(${[...arguments].join(',')}) => ${result}`)
  }
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");
logArea(3, 3)

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2);