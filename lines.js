var split = require('split');
var through = require('through2');
var counter = 1;
var isEven = function(num){
    return num % 2 == 0;
}

var transform = through(function(line,_,next){
    var newBuf = line.toString();
    if (isEven(counter)) {
        newBuf = newBuf.toUpperCase();
    }
    else {
        newBuf = newBuf.toLowerCase();
    }
    this.push(newBuf + "\n");
   counter += 1;
   next();
})

process.stdin
    .pipe(split())
    .pipe(transform)
    .pipe(process.stdout);
