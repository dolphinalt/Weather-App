const fs = require('fs');
const readline = require('readline');

async function Process() {
    dates=[]
    temperature=[]
    low=[]
    high=[]
    quality=[]
    const fileStream = fs.createReadStream('./assets/data.toml');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (/\[\[[aA-zZ]*\]\]/i.test(line)) {
            lineRes=line.split("[[").pop();
            location = lineRes.split("]]").shift()
        } else if (/\[\[[0-9.]*\]\]/i.test(line)) {
            lineRes=line.split("[[").pop();
            out=lineRes.replace("/./g", "/");
            date = out.split("]]").shift()
        } else if (/temperature = /i.test(line)) {
            temperature = line.split(" = ").pop()
        } else if (/low = /i.test(line)) {
            lowTemperature = line.split(" = ").pop()
        } else if (/high = /i.test(line)) {
            highTemperature = line.split(" = ").pop()
        } else if (/quality = /i.test(line)) {
            lineRes=line.replace(".", "/");
            quality = line.split(" = ").pop()
        }
    }
}

Process();
