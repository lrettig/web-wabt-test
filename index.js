var wabt = require("wabt");
var fs = require("fs");
var str = fs.readFileSync('manyFunctions100.wast').toString();
var mod = wabt.parseWat("module.wast", str);
