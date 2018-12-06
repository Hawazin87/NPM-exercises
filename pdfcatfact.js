const catFacts = require('cat-facts');
const pdfDoc = require('pdfkit');
const fs = require('fs');

let randomFact = catFacts.random();

doc = new pdfDoc;
doc.pipe(fs.createWriteStream('./catfact.pdf'));
doc.fontSize(25)
   .text(randomFact, 100, 100)
doc.end();