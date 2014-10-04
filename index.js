var http = require('http');
var url = require('url') ;
var Monkeys = require('./monkeys');

var shouldMonkeyWithResponse = true;

/*************** NETWORK ***************/

http.createServer(function (request, response) {
    makeRequest(request, function(data, error){
        if (error != undefined) {
            console.log(error);
            response.writeHead(500);
            response.end("There was an error.");
        }
        else {
            // There's a chance we'll just throw an HTML page.
            if (Math.random() < 0.05 && shouldMonkeyWithResponse == true) {
                response.writeHead(500);
                response.end("<html><head></head><body><h1>500 Internal Server Error</h1></body></html>")
            }
            else {
                response.writeHead(200);
                response.end(data);
            }
        }
    });

}).listen(8181);

function makeRequest(originalRequest, callback) {
    var options = {
        host        : url.parse(originalRequest.url).host,
        hostname    : url.parse(originalRequest.url).hostname,
        port        : originalRequest.port,
        path        : url.parse(originalRequest.url).path,
//        headers     : originalRequest.headers,
        method      : "GET"
    };

    var request = http.request(options, function(response) {
        var data = "";

        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));

        response.setEncoding("utf8");
        response.on("data", function(chunk) {
            data += chunk
        });

        response.on("end", function() {
            var responseData = data;
            if (shouldMonkeyWithResponse && response.headers["content-type"] == "application/json") {
                responseData = JSON.stringify(Monkeys.monkeyWork(data));
            }
            callback(responseData, undefined);
        });
    }).on("error", function(error) {
        callback(undefined, error);
    });

//    request.write(originalRequest.data);
    request.end();
}

