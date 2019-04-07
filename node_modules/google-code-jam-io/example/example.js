var gcj = require('google-code-jam-io');

gcj.deleteOutputFile();

gcj.readFileAsyncByLine(function(line) {
  gcj.appendToFile(line + '||YEAAAAHHH');
});
