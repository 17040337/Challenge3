
function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="b0c8dafa512a0134e90df6ece3c2b7a2";
	var city = "Amsterdam";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;
	
	// get current weather
	fetch(request)
	
	// parse to JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
	// render weather per day
	.then(function(response) {
        console.log(response)
		// render weatherCondition
		onAPISucces(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
    //get city name
    var city = response.name;
    
	// get type of weather in string format
	var type = response.weather[0].description;
    
    var icon = response.weather[0].icon;
    
    // get type of weather in string format
	var windV = response.wind.speed;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);
    
    var coordlon = response.coord.lon;
    var coordlat = response.coord.lat;
    var coordV = coordlat + "<br>" +  coordlon;
    



	// render vars
    var cityBox = document.getElementById('city')
	var windBox = document.getElementById('wind');
    var weatherBox = document.getElementById('weather');
    var coordBox = document.getElementById('coord');
    var cityBox = document.getElementById('city')
    
    //fetch icon
    var iconBox = document.getElementById('icon');
    var myImg ="img/icons/";
    var iconUrl = myImg + icon + '.png';
    
    //change HTML text
	windBox.innerHTML = windV;
    iconBox.innerHTML = '<img src="'+iconUrl+'" style="height: 200px">';
    weatherBox.innerHTML = type;
    coordBox.innerHTML = coordV;
    cityBox.innerHTML = city;
    
  
}


function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata();
