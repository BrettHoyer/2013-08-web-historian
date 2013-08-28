var fs = require('fs');
var http = require('http-get');
exports.readUrls = function(filePath, cb){
  //loop through each line in sites.txt
  //and pass each url in the downloadUrls function

  //given the filepath, take the file and read it line by line.
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log("ERROR: " + err);
    } else {
      console.log('OK: ' + filePath);
      //console.log(data);
      // split the data string into an array by finding each new line and
      // each element in the array is a url.
      var urlArray = data.split(/\r?\n/);
      for(var i = 0; i < urlArray.length; i++){
        //iterate through the entire url array, and download the given url
        exports.downloadUrls(urlArray[i]);
      }
    }
  });
};

exports.downloadUrls = function(url){
  //Takes a given url and downloads the page at the current time, the function
  //is called, if the file exists then overwrite it.
  http.get( url , '../data/sites/' + url , function (error, result) {
    if (error) {
      console.error(error);
    } else {
    console.log('File downloaded at: ' + result.file);
    }
});

};
