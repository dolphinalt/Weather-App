function main() {
const $output = document.getElementById('./assets/data.toml')
document.getElementById('./assets/data.toml').onchange = function() {
    var file = this.files[0];

    var reader = new FileReader();
    reader.onload = function(progressEvent) {
        const text = this.result;
        $output.innerText = text

        var lines = text.split('\n');
        for (line of lines) {
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
    };
    reader.readAsText(file);
};

}
