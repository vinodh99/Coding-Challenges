#####Motivation

Very few people use JavaScript for [Google Code Jam](https://code.google.com/codejam) (yes, Java/C++ are faster, but my guess is that this probably won't make a difference for most of the coding challenges).

#####About

So, I decided to build some boilerplate code so JS users (or, more likely, just me) don't have to worry about the annoying input/output parts of JavaScript, and can run their code as easily as the Java/C++ crew.

This code, when required in any code, will automatically read the first two arguments passed to a node program, and will assume the first is the input file, and the second is the output file.  It then allows easy input/output through included helper functions.

#####To Install

* Make sure `node` and `npm` are installed on your computer

* `npm install google-code-jam-io`

#####To Use / Docs (sort of)

example_of_all_usages.js

    var gcj = require('./code-jam-boilerplate.js');

    // Read the input file line by line and run a callback
    // on each line
    gcj.readFileAsyncByLine(function(line) {
      //Do something with each line
    });

    // Get the entire file contents as a string
    var entire_file_as_string = gcj.readFileSync();

    // Write a string to the output file
    gcj.writeToFile('This will go in the output file!');

    // Delete the output file if it exists (useful if you want to clear
    // the file before appending)
    gcj.deleteOutputFile();
    
    // Append a string to the output file
    gcj.appendToFile('This will be appended to the output file!');


Once you have your file created, be sure to pass in the input and output file when you run it!

For example, you could run this in the command line:

`node example_of_all_usages.js example_input.txt example_output.txt`

#####Good News!

I wasn't sure if anyone would be allowed to use this file.  But it [IS allowed](https://code.google.com/codejam/faq.html#4-6)! WOOP WOOP!  So I'd encourage everyone who's interested to use this in Google Code Jam.
