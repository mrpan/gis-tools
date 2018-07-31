(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global.test = factory());
}(this, (function () { 'use strict';

var foo = 'hello my world!';

function main () {
  console.log(foo);
}

return main;

})));
