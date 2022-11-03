var userWants = "San,Diego,USA"

function main(wantedLocation) {
    const data = null;
    var subpage = "weatherDataSD"
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    
    // function registerLocation(location) {
    
    // }
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
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
        var locationNoComma = place.replace(",", ' ');
        var locationSplit = locationNoComma.split(",");
        var locationDisplay = locationSplit[0];
        var locationDisplayFinal = locationDisplay.toUpperCase()
        var date0 = weatherData["locations"][place]["values"][0]["datetimeStr"]
        var temp0 = weatherData["locations"][place]["values"][0]["temp"]
        var temp0Res = temp0.toPrecision(2)
        var maxTemp0 = weatherData["locations"][place]["values"][0]["maxt"]
        var lowTemp0 = weatherData["locations"][place]["values"][0]["mint"]
        var lowHigh0 = "High: " + maxTemp0.toPrecision(2) + "° Low: " + lowTemp0.toPrecision(2) + "°"
        var conditions0 = weatherData["locations"][place]["values"][0]["conditions"]
        // day 2
        var date1 = weatherData["locations"][place]["values"][1]["datetimeStr"]
        var temp1 = weatherData["locations"][place]["values"][1]["temp"]
        var temp1Res = temp0.toPrecision(2)
        var maxTemp1 = weatherData["locations"][place]["values"][1]["maxt"]
        var lowTemp1 = weatherData["locations"][place]["values"][1]["mint"]
        var lowHigh1 = "High: " + maxTemp1.toPrecision(2) + "° Low: " + lowTemp1.toPrecision(2) + "°"
        var conditions1 = weatherData["locations"][place]["values"][1]["conditions"]
        // day 3
        var date2 = weatherData["locations"][place]["values"][2]["datetimeStr"]
        var temp2 = weatherData["locations"][place]["values"][2]["temp"]
        var temp2Res = temp0.toPrecision(2)
        var maxTemp2 = weatherData["locations"][place]["values"][2]["maxt"]
        var lowTemp2 = weatherData["locations"][place]["values"][2]["mint"]
        var lowHigh2 = "High: " + maxTemp2.toPrecision(2) + "° Low: " + lowTemp2.toPrecision(2) + "°"
        var conditions2 = weatherData["locations"][place]["values"][2]["conditions"]
        //day 4
        var date3 = weatherData["locations"][place]["values"][3]["datetimeStr"]
        var temp3 = weatherData["locations"][place]["values"][3]["temp"]
        var temp3Res = temp0.toPrecision(2)
        var maxTemp3 = weatherData["locations"][place]["values"][3]["maxt"]
        var lowTemp3 = weatherData["locations"][place]["values"][3]["mint"]
        var lowHigh3 = "High: " + maxTemp3.toPrecision(2) + "° Low: " + lowTemp3.toPrecision(2) + "°"
        var conditions3 = weatherData["locations"][place]["values"][3]["conditions"]
    
        // set vars
        document.getElementById('place').textContent = locationDisplayFinal;
        document.getElementById('todayTemperature').textContent = temp0Res;
        document.getElementById('quality').textContent = conditions0;
        document.getElementById('lowHigh').textContent = lowHigh0;
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