
var concatenate = function() {
  var result = "";
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

module.exports = concatenate;

