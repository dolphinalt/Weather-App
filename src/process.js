$(function(){
    placeInfo=""
    dates=[]
    temperatures=[]
    lows=[]
    highs=[]
    qualities=[]

    $.get('./../assets/data.toml', function(data) {
        var dataList = data.split("\r\n");
        for (line in dataList) {
            if (/\[\[[aA-zZ]*\]\]/i.test(dataList[line])) {
                lineRes=dataList[line].split("[[").pop();
                place = lineRes.split("]]").shift()
                placeInfo=place
            } else if (/\[\[[0-9.]*\]\]/i.test(dataList[line])) {
                raw=dataList[line].replace(".", "/");
                date=raw.replace(".", "/");
                dateRes=date.split("[[").pop();
                dateOut = dateRes.split("]]").shift()
                dates=dates.concat(dateOut)
            } else if (/temperature = /i.test(dataList[line])) {
                raw=dataList[line].replace("'", "");
                temperature=raw.replace("'", "");
                temperatureRes = temperature.split(" = ").pop()
                temperatures=temperatures.concat(temperatureRes)
            } else if (/low = /i.test(dataList[line])) {
                raw=dataList[line].replace("'", "");
                lowTemperature=raw.replace("'", "");
                lowTemperatureRes = lowTemperature.split(" = ").pop()
                lows=lows.concat(lowTemperatureRes)
            } else if (/high = /i.test(dataList[line])) {
                raw=dataList[line].replace("'", "");
                highTemperature=raw.replace("'", "");
                highTemperatureRes = highTemperature.split(" = ").pop()
                highs=highs.concat(highTemperatureRes)
            } else if (/quality = /i.test(dataList[line])) {
                raw=dataList[line].replace("'", "");
                quality=raw.replace("'", "");
                qualityRes = quality.split(" = ").pop()
                qualities=qualities.concat(qualityRes)
            }
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        for (idx in date) {
            if (date == today) {
                var html = $("#main").html()
                var $div1 = $(html).appendTo("#mainDisplay")
                $div1.find("#todayTemperatureRes").text(temperatures[idx])
                $div1.find("#todayHighTemperatureRes").text(lows[idx])
                $div1.find("#todayLowTemperatureRes").text(highs[idx])
                $div1.find("#todayQuality").text(qualities[idx])
            }
            var html = $("#detail").html()
            var $div1 = $(html).appendTo("#tile")
            $div1.find("#date").text(dates[idx])
            $div1.find("#temperatureRes").text(temperatures[idx])
            $div1.find("#highTemperatureRes").text(lows[idx])
            $div1.find("#lowTemperatureRes").text(highs[idx])
            $div1.find("#quality").text(qualities[idx])
        }
    });
})