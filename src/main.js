var userWants = "San,Diego,USA"

function main(wantedLocation) {
    console.log("[i] Hello! Welcome to the console. For those who are here for debugging, you can ignore the SyntaxErrors, as the webpage runs perfectly fine with those there.")
    console.log("[!] Credits: @dolphinalt, @dolphincyber, @Orlando-c, @raisinbran25, @BobTheFarmer on github")
    const data = null;
    var subpage = "weatherDataSD"
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    // function registerLocation(location) {
    
    // }
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log("[i] dataRecieved");
        }
        const weatherData = JSON.parse(this.responseText);
        // console.log(weatherData.columns)
        // console.log(weatherData.remainingCost)
        // console.log(weatherData.locations)
        // console.log(weatherData.locations.Washington,DC,USA)
        // console.log(weatherData.locations.Washington,DC,USA.values)
        // console.log(weatherData.locations.Washington,DC,USA.values.datetimeStr)
        // console.log(weatherData.locations.Washington,DC,USA.values.temp)
        // console.log(weatherData.locations.Washington,DC,USA.values.maxt)
        // console.log(weatherData.locations.Washington,DC,USA.values.mint)
        // console.log(weatherData.locations.Washington,DC,USA.values.conditions)
        // today
        var place = wantedLocation
        var ifTesting = place.split(",");
        if (ifTesting[0] == ifTesting[1]) {
            var locationSplit = place.split(",");
            var locationDisplay = locationSplit[0];
        } else {
            var locationNoComma = place.replace(",", ' ');
            var locationSplit = locationNoComma.split(",");
            var locationDisplay = locationSplit[0];
        }
        var locationDisplayFinal = locationDisplay.toUpperCase()
        var temp0 = weatherData["locations"][place]["values"][0]["temp"]
        var temp0Res = temp0.toPrecision(2)
        var maxTemp0 = weatherData["locations"][place]["values"][0]["maxt"]
        var lowTemp0 = weatherData["locations"][place]["values"][0]["mint"]
        var lowHigh0 = "High: " + maxTemp0.toPrecision(2) + "° Low: " + lowTemp0.toPrecision(2) + "°"
        var conditions0 = weatherData["locations"][place]["values"][0]["conditions"]
        // day 2
        var temp1 = weatherData["locations"][place]["values"][1]["temp"]
        var temp1Res = temp1.toPrecision(2)
        var maxTemp1 = weatherData["locations"][place]["values"][1]["maxt"]
        var lowTemp1 = weatherData["locations"][place]["values"][1]["mint"]
        var lowHigh1 = "High: " + maxTemp1.toPrecision(2) + "° Low: " + lowTemp1.toPrecision(2) + "°"
        var conditions1 = weatherData["locations"][place]["values"][1]["conditions"]
        // day 3
        var date2 = weatherData["locations"][place]["values"][2]["datetimeStr"]
        var date2res = date2.slice(5,10)
        var date2final = date2res.replace("-", "/")
        var temp2 = weatherData["locations"][place]["values"][2]["temp"]
        var temp2Res = temp2.toPrecision(2)
        var maxTemp2 = weatherData["locations"][place]["values"][2]["maxt"]
        var lowTemp2 = weatherData["locations"][place]["values"][2]["mint"]
        var lowHigh2 = "High: " + maxTemp2.toPrecision(2) + "° Low: " + lowTemp2.toPrecision(2) + "°"
        var conditions2 = weatherData["locations"][place]["values"][2]["conditions"]
        //day 4
        var date3 = weatherData["locations"][place]["values"][3]["datetimeStr"]
        var date3res = date3.slice(5,10)
        var date3final = date3res.replace("-", "/")
        var temp3 = weatherData["locations"][place]["values"][3]["temp"]
        var temp3Res = temp3.toPrecision(2)
        var maxTemp3 = weatherData["locations"][place]["values"][3]["maxt"]
        var lowTemp3 = weatherData["locations"][place]["values"][3]["mint"]
        var lowHigh3 = "High: " + maxTemp3.toPrecision(2) + "° Low: " + lowTemp3.toPrecision(2) + "°"
        var conditions3 = weatherData["locations"][place]["values"][3]["conditions"]
    
        // set vars
        // today
        document.getElementById('place').textContent = locationDisplayFinal;
        document.getElementById('todayTemperature').textContent = temp0Res;
        document.getElementById('todayQuality').textContent = conditions0;
        document.getElementById('todayLowHigh').textContent = lowHigh0;
        // day 2
        document.getElementById('tile0temp').textContent = temp1Res;
        document.getElementById('tile0quality').textContent = conditions1;
        if (conditions1.includes("Rain")) {
            svg='<img src="./assets/SVG/Rainy.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        } else if (conditions1.includes("Clear")) {
            svg='<img src="./assets/SVG/Sunny.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        } else if (conditions1.includes("Partially cloudy")) {
            svg='<img src="./assets/SVG/PartiallyCloudy.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        } else if (conditions1.includes("Mostly cloudy")) {
            svg='<img src="./assets/SVG/MostlyCloudy.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        } else if (conditions1.includes("Overcast")) {
            svg='<img src="./assets/SVG/Cloudy.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        } else if (conditions1.includes("Storm")) {
            svg='<img src="./assets/SVG/Stormy.svg" alt="' + conditions1 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile0glyph').innerHTML = svg;
        }
        document.getElementById('tile0lowHigh').textContent = lowHigh1;
        // day 3
        document.getElementById('tile1day').textContent = date2final;
        document.getElementById('tile1temp').textContent = temp2Res;
        document.getElementById('tile1quality').textContent = conditions2;
        if (conditions2.includes("Rain")) {
            svg='<img src="./assets/SVG/Rainy.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        } else if (conditions2.includes("Clear")) {
            svg='<img src="./assets/SVG/Sunny.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        } else if (conditions2.includes("Partially cloudy")) {
            svg='<img src="./assets/SVG/PartiallyCloudy.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        } else if (conditions2.includes("Mostly cloudy")) {
            svg='<img src="./assets/SVG/MostlyCloudy.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        } else if (conditions2.includes("Overcast")) {
            svg='<img src="./assets/SVG/Cloudy.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        } else if (conditions2.includes("Storm")) {
            svg='<img src="./assets/SVG/Stormy.svg" alt="' + conditions2 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile1glyph').innerHTML = svg;
        }
        document.getElementById('tile1lowHigh').textContent = lowHigh2;
        // day 4
        document.getElementById('tile2day').textContent = date3final;
        document.getElementById('tile2temp').textContent = temp3Res;
        document.getElementById('tile2quality').textContent = conditions3;
        if (conditions3.includes("Rain")) {
            svg='<img src="./assets/SVG/Rainy.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        } else if (conditions3.includes("Clear")) {
            svg='<img src="./assets/SVG/Sunny.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        } else if (conditions3.includes("Partially cloudy")) {
            svg='<img src="./assets/SVG/PartiallyCloudy.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        } else if (conditions3.includes("Mostly cloudy")) {
            svg='<img src="./assets/SVG/MostlyCloudy.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        } else if (conditions3.includes("Overcast")) {
            svg='<img src="./assets/SVG/Cloudy.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        } else if (conditions3.includes("Storm")) {
            svg='<img src="./assets/SVG/Stormy.svg" alt="' + conditions3 + '" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>'
            document.getElementById('tile2glyph').innerHTML = svg;
        }
        document.getElementById('tile2lowHigh').textContent = lowHigh3;
    });

    if (wantedLocation == "San,Diego,USA") {
        var subpage = "weatherDataSD"
    } else if (wantedLocation == "Washington,DC,USA") {
        var subpage = "weatherDataDC"
    } else if (wantedLocation == "New,York,New,York,USA") {
        var subpage = "weatherDataNY"
    } else if (wantedLocation == "Singapore,Singapore") {
        var subpage = "weatherDataSG"
    }
    var link = "https://scrumdaddys.nighthawkcodingteams.cf/" + subpage
    
    xhr.open("GET", link);
    xhr.send(data);
}

//<img src="./assets/SVG/Rainy.svg" alt="triangle with all three sides equal" height="100" width="100" style="display: block;margin: auto;margin-top: -20px;"/>