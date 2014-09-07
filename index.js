var http = require('http');
var url = require('url') ;
var Monkeys = require('./monkeys');

/**************** CONFIG ***************/

/*
 Your serverURL is the root of your API, without the http bit. For example,
 if one of your APIs is http://www.google.com/api/user/23, then your
 serverURL would just be "www.google.com/api".
*/

var serverURL = "tubetracker.co.uk/api";


/*************** NETWORK ***************/

http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;

    makeRequest(pathname, function(data, error){
        if (error != undefined) {
            console.log(error);
            response.writeHead(500);
            response.end("There was an error.");
        }
        else {
            // There's a chance we'll just throw an HTML page.
            if (Math.random() < 0.1) {
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

function makeRequest(endpoint, callback) {
    var fullURL = "http://"+serverURL + endpoint;
    http.get(fullURL, function(response) {
        var data = "";

        response.setEncoding("utf8");
        response.on("data", function(chunk) {
            data += chunk
        });

        response.on("end", function() {
            callback(JSON.stringify(Monkeys.monkeyWork(data)), undefined);
        });
    }).on("error", function(error) {
        callback(undefined, error);
    });
}

