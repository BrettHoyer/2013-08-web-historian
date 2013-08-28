// eventually, you'll have some code here that uses the tested helpers
// to actually download the urls you want to download.

//command line: node htmlfetcher.js /path/to/file.txt
//process.argv[0] = node;
//process.argv[1] = htmlfetcher.js;
//process.argv[2] = /path/to/file.txt;
var fetcherHelpers = require("./lib/html-fetcher-helpers.js");
var schedule = require('node-schedule');

var date = new Date(2012, 11, 21, 5, 30, 0);

var j = schedule.scheduleJob('1 * * * *', function(){
    console.log("weeeeeee");
    fetcherHelpers.readUrls("../data/sites.txt");
});



if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILEPATH');
  process.exit(1);
} else {
//get the filepath from the command line
var filePath = process.argv[2];

fetcherHelpers.readUrls(filePath);

}


