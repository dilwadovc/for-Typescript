"use strict";
// index.js
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(Direction.Left); // "LEFT"
console.log(Direction.Right); // "RIGHT"
//# sourceMappingURL=index.js.map