const $output = document.getElementById('./assets/data.toml')
document.getElementById('file').onchange = function() {
  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent) {
    // Entire file
    const text = this.result;
    $output.innerText = text

    // By lines
    var lines = text.split('\n');
    for (var line = 0; line < lines.length; line++) {
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
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
