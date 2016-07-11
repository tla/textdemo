# textdemo
A demonstration of the ontological status of different forms of text.
This is a javacript demo to be used as part of a reveal.js presentation, or to develop/run stand alone.

## Installation
This presentation uses a pattern that allows multiple presentations to be served from one [reveal.js](https://github.com/hakimel/reveal.js/) instance. The recipe for this is described on [https://medium.com/@KienanKB/serving-multiple-reveal-js-presentations-b1a5c086e959#.272hdy7xx](https://medium.com/@KienanKB/serving-multiple-reveal-js-presentations-b1a5c086e959#.272hdy7xx). The two basic steps are to create a directory 'decks' in reveal.js and then adjust which html files are being watched by grunt in Grunt.js: where it reads

	html: { files: [ '\*.html' ] } )

add 'decks/\*/index.html' to the files array, so that it reads:

	html: { files: [ '\*.html', 'decks/\*/index.html' ] } )

Then, assuming the above recipe has been followed:

1. Clone this repository in reveal.js/decks
2. Run `npm install` in the reveal.js directory if you haven't already
2. Run `npm start` to fire up node.js in the reveal.js directory
3. Point your browser to localhost_or_domain:8000/decks/textdemo

## Stand alone uses

1. Clone this repository
2. Run `npm install` in the textdemo directory to get the standalone dependencies (connect and serve-static) 
3. Run `npm start` in the textdemo directory to start the standalone server
4. Point your browser to localhost:8080/texttransforms.html (not index.html! that's the reveal.js one)

You can adjust port 8080 in server.js if needed.

--
