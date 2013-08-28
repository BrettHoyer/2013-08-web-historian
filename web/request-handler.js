var path = require('path');
var http = require('http');
var fs = require('fs');
var url = require("url");

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

module.exports.datadir = path.join(__dirname, "../data/sites.txt"); // tests will need to override this.

module.exports.handleRequest = function (req, res) {
  // console.log("Request Method: " + req.method);
  // console.log("Request URL: " + req.url);
  //console.log(exports.datadir);
  //res.end(exports.datadir);
  console.log("Serving req type " + req.method + " for url " + req.url);
   var userRequestUrl =  req.url;
   if(userRequestUrl === '/searchURL/'){
      var urlObjString = '';
      req.on('data', function (data) {
        urlObjString += data;
      });
      req.on('end', function () {
        var urlObj = JSON.parse(urlObjString);
        var theURL = urlObj.url;
        console.log(theURL);
        fs.appendFile(exports.datadir, "\n" + theURL, function(err){
          if(err){
            console.log("Error: " + err);
          } else {
            console.log("Added URL To File: " + theURL);
          }
        });
      });

    /*console.log("SEARCH URL");
    fs.writeFile(__dirname + "/data/sites/sites.txt", req.url, function(err) {
      if(err) {
          console.log(err);
      } else {
          console.log("The file was saved!");
      }
    });*/
    res.end("SEARCH URL");
   } else {

    var statusCode = 200;
    var filePath = '.' + req.url;
      if(filePath === './'){
        filePath = 'public/index.html';
      }
    var extname = path.extname(filePath);
        var contentType = 'text/html';
        switch(extname){
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
        }
    console.log("FILEPATH: " + filePath);
    path.exists(filePath, function(exists){
    if(exists){
      fs.readFile(filePath, function(error, content){
        if(error){
          res.writeHead(500);
          res.end();
        } else {
          res.writeHead(200, {'Content-Type': contentType});
          res.end(content, 'utf-8');
        }
      });
      } else {
        res.writeHead(404);
        res.end();
        }
      });
  }
};
