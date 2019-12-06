function getUser() {
    // Code here
}
exports.getData = function(req) {
    console.log("ID: " + req.ip + ' ' + req.headers['user-agent'] + '\n' + "Module Num: " + Object.keys(require('module')._cache).length);
}