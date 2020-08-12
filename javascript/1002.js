var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = Number(lines.shift())
var n = Number(3.14159)
var area = n * Math.pow(raio, 2)

console.log(area.toFixed(4))