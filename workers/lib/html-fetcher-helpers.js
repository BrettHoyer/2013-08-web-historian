var fs = require('fs');

exports.readUrls = function(filePath, cb){
  //loop through each line in sites.txt
  //and pass each url in the downloadUrls function

  //given the filepath, take the file and read it line by line.
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.log("ERROR: " + err);
    } else {
      console.log('OK: ' + filePath);
      console.log(data);
    }
  });
};

exports.downloadUrls = function(urls){
  //Takes a given url and downloads the page at the current time, the function
  //is called, if the file exists then overwrite it.
};
