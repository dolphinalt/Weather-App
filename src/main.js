const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

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
	var date0 = weatherData["locations"]["Washington,DC,USA"]["values"][0]["datetimeStr"]
	var temp0 = weatherData["locations"]["Washington,DC,USA"]["values"][0]["temp"]
	var maxtemp0 = weatherData["locations"]["Washington,DC,USA"]["values"][0]["maxt"]
	var lowtemp0 = weatherData["locations"]["Washington,DC,USA"]["values"][0]["mint"]
	var conditions0 = weatherData["locations"]["Washington,DC,USA"]["values"][0]["conditions"]
	// day 2
	var date1 = weatherData["locations"]["Washington,DC,USA"]["values"][1]["datetimeStr"]
	var temp1 = weatherData["locations"]["Washington,DC,USA"]["values"][1]["temp"]
	var maxtemp1 = weatherData["locations"]["Washington,DC,USA"]["values"][1]["maxt"]
	var lowtemp1 = weatherData["locations"]["Washington,DC,USA"]["values"][1]["mint"]
	var conditions1 = weatherData["locations"]["Washington,DC,USA"]["values"][1]["conditions"]
	// day 3
	var date2 = weatherData["locations"]["Washington,DC,USA"]["values"][2]["datetimeStr"]
	var temp2 = weatherData["locations"]["Washington,DC,USA"]["values"][2]["temp"]
	var maxtemp2 = weatherData["locations"]["Washington,DC,USA"]["values"][2]["maxt"]
	var lowtemp2 = weatherData["locations"]["Washington,DC,USA"]["values"][2]["mint"]
	var conditions2 = weatherData["locations"]["Washington,DC,USA"]["values"][2]["conditions"]
	//day 4
	var date3 = weatherData["locations"]["Washington,DC,USA"]["values"][3]["datetimeStr"]
	var temp3 = weatherData["locations"]["Washington,DC,USA"]["values"][3]["temp"]
	var maxtemp3 = weatherData["locations"]["Washington,DC,USA"]["values"][3]["maxt"]
	var lowtemp3 = weatherData["locations"]["Washington,DC,USA"]["values"][3]["mint"]
	var conditions3 = weatherData["locations"]["Washington,DC,USA"]["values"][3]["conditions"]

	// set vars
	document.getElementById('location').textContent = "WASHINGTON DC";
	document.getElementById('todayTemperature').textContent = temp0;
});

xhr.open("GET", "https://scrumdaddys.nighthawkcodingteams.cf/weatherData");
xhr.send(data);

