const uuidv1 = require('uuid/v1');
var memReq;
/*
* Gets the users ip address when using local host this will be ::1 or 127.0.0.1
* Also gets all the modules and gets the number of modules from the length of the list
*/
exports.getData = function (req) {
    //console.log("\nID: " + req.connection.remoteAddress + ' ' + req.headers['user-agent']);
    console.log("\nID: " + uuidv1() );
    console.log("Module Num: " + Object.keys(require('module')._cache).length);
}

/*
* Gets the total memory used on itial start then gets the memory
* of each request afterwards. When nodejs does carbage collection
* it will print the total memory used again
*/
exports.getMem = function () {
    var used = process.memoryUsage().heapUsed / 1024 / 1024;
    var memReqTotal = Number((Math.round(used * 100) / 100) - memReq).toFixed(3)
    if (memReq != null && memReqTotal > 0) {
        console.log(`The request used ${memReqTotal} MB`);
    } else {
        console.log(`The request used ${Math.round(used * 100) / 100} MB`);
    }
    memReq = Math.round(used * 100) / 100;
}