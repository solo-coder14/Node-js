const fs = require('fs');

function readFile() {
    try {
        const allQuotes = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf8');
        return allQuotes.split(/\r?\n/).filter(line => line.trim() !== '');
    } catch (error) {
        console.error('Error reading file:', error.message);
        return [];
    }
}

const items = readFile();
let currentIndex = 0;

if (items.length > 0) {
    setInterval(() => {
        console.log(items[currentIndex]);
        currentIndex = (currentIndex + 1) % items.length; // Loop back to start
    }, 1000);
} else {
    console.log("No quotes found.");
}