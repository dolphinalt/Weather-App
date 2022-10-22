const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
    const fileStream = fs.createReadStream('./assets/data.toml');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (/\[\[[aA-zZ]*\]\]/i.test(line)) {
            console.log(line);
        } else if (/\[\[[0-9]*\]\]/i.test(line)) {
            console.log(line);
        } else if (/temperature = /i.test(line)) {
            console.log(line);
    }
}

processLineByLine();
