import requests
import csv

testing = 1

def debugMsg(msg):
	if testing == 1:
		print(msg)

open('./assets/data.toml', 'w').close()
debugMsg("[!] TOML CLEARED")

if testing == 0:
	open('./assets/weather.csv', 'w').close()
	debugMsg("[!] CSV CLEARED")
	url = "https://visual-crossing-weather.p.rapidapi.com/forecast"

	querystring = {"aggregateHours":"24","location":"San,Diego","contentType":"csv","unitGroup":"us","shortColumnNames":"0"}

	headers = {
		"X-RapidAPI-Key": "eb0bbc6cc0msh085b254f1761bc2p154cf4jsne59a8dbdbaa0",
		"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com"
	}

	response = requests.request("GET", url, headers=headers, params=querystring)

	f = open("./assets/weather.csv", "a")
	f.write("")
	f.write(response.text)
	f.close()

def qualityProcess(quality):
	if quality == "Rain, Overcast":
		quality = "Stormy"
	elif quality == "Rain, Partially cloudy":
		quality = "Raining"
	elif quality == "Clear":
		quality = "Sunny"
	elif quality == "Overcast":
		quality = "Cloudy"
	return quality;

with open('./assets/weather.csv') as csv_file:
	debugMsg("[~] READING LINES")
	csv_reader = csv.reader(csv_file, delimiter=',')
	line_count = 0
	CurLocation=""
	for row in csv_reader:
		debugMsg("[~] READING LINE:")
		debugMsg(line_count)
		if line_count == 0:
			line_count += 1
		else:
			with open('./assets/data.toml','a') as data_file:
				line_count += 1
				quality = qualityProcess(row[21])
				location = row[0].replace(",","")
				date = row[1].replace("/",".")
				if location == CurLocation:
					data_file.write(f"[[{date}]]\ntemperature = '{row[9]}'\nlow = '{row[7]}'\nhigh = '{row[8]}'\nquality = '{quality}'\n")
				else:
					CurLocation = location
					data_file.write(f"[[{location}]]\n[[{date}]]\ntemperature = '{row[9]}'\nlow = '{row[7]}'\nhigh = '{row[8]}'\nquality = '{quality}'\n")
					
debugMsg("[~] END")
