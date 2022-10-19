var toml = require('toml');
const fs = require('fs');

try {
    const read = fs.readFileSync('./assets/data.toml', 'utf8');
    //     var data = toml.parse(read);
        parseToml(data)
    //     console.dir(data);
    // } catch (err) {
    //     console.error(err);
} catch {
    return
}

const parseToml = function(configString) {
    const config = loadToml(configString)
    // `toml.parse()` returns a object with `null` prototype deeply, which can
    // sometimes create problems with some utilities. We convert it.
    // TOML can return Date instances, but JSON will stringify those, and we
    // don't use Date in netlify.toml, so this should be ok.
    console.log(JSON.parse(JSON.stringify(config)))
}
