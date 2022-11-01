import requests
import socket
import json

# API Section

url = "https://visual-crossing-weather.p.rapidapi.com/forecast"

querystring = {"aggregateHours":"24","location":"Washington,DC,USA","contentType":"json","unitGroup":"us","shortColumnNames":"0"}

headers = {
	"X-RapidAPI-Key": "eb0bbc6cc0msh085b254f1761bc2p154cf4jsne59a8dbdbaa0",
	"X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com"
}

response = requests.request("GET", url, headers=headers, params=querystring)
weatherData=response.text

# JSON conversion for client
weatherDataJson=json.dumps(weatherData)
serverWeatherData=bytes(weatherDataJson, 'utf-8')
print(f"[i] Data is {len(weatherDataJson.encode('utf-8'))} bytes")

# server section
HOST = "127.0.0.1"
PORT = 5502 # Live server runs on 5501, web server runs on 80XX

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
	server.bind((HOST, PORT))
	server.listen()
	print(f"[i] Server started on {HOST}:{PORT}")
	connection, addr = server.accept()
	with connection:
		print(f"[!] Server {HOST}:{PORT} connected to by {addr}")
		while True:
			data = connection.recv(16384)
			if not data:
				print(f"[i] Connection to {HOST}:{PORT} by {addr} has been closed")
			print(f"[!] Data sent to {addr}")
			connection.sendall(serverWeatherData)