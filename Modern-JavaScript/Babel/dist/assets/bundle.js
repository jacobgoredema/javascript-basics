"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var greet = function greet(name) {
  console.log("hello ".concat(name));
};

greet('marion');
greet('luigi');

var User = function User() {
  _classCallCheck(this, User);

  this.score = 0;
};
