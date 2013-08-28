// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.

//command line: node htmlfetcher.js /path/to/file.txt
//process.argv[0] = node;
//process.argv[1] = htmlfetcher.js;
//process.argv[2] = /path/to/file.txt;


var fetcherHelpers = require("./lib/html-fetcher-helpers.js");

if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILEPATH');
  process.exit(1);
} else {
//get the filepath from the command line
var filePath = process.argv[2];

fetcherHelpers.readUrls(filePath);

}


