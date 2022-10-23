const fs = require('fs');
const readline = require('readline');

async function Process() {
    const fileStream = fs.createReadStream('./assets/data.toml');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        if (/\[\[[aA-zZ]*\]\]/i.test(line)) {
            lineRes=line.split("[[").pop();
            location = lineRes.split("]]").shift()
            document.getElementById("location").innerHTML = location;
        } else if (/\[\[[0-9.]*\]\]/i.test(line)) {
            lineRes=line.split("[[").pop();
            out=lineRes.replace("/./g", "/");
            date = out.split("]]").shift()
            document.getElementById("date").innerHTML = date;
        } else if (/temperature = /i.test(line)) {
            temperature = line.split(" = ").pop()
            document.getElementById("temperature").innerHTML = temperature;
        } else if (/low = /i.test(line)) {
            lowTemperature = line.split(" = ").pop()
            document.getElementById("lowTemperature").innerHTML = lowTemperature;
        } else if (/high = /i.test(line)) {
            highTemperature = line.split(" = ").pop()
            document.getElementById("highTemperature").innerHTML = highTemperature;
        } else if (/quality = /i.test(line)) {
            lineRes=line.replace(".", "/");
            quality = line.split(" = ").pop()
            document.getElementById("quality").innerHTML = quality;
        }
    }
}

Process();
