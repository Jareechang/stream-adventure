var fs = require('fs');
var inputPath = process.argv[2]
fs.createReadStream(inputPath).pipe(process.stdout);

