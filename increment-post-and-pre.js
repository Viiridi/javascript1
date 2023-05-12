var x = 1;
var y = 1;

x = x + 1;
y = y + 1;

console.log(x, y);

x += 1;
y += 1;

console.log(x, y);

x++;
y++;

console.log(x, y);

var z = 10;

var resultX = z + x++;
var resultY = z + x++;

console.log(resultX, resultY);