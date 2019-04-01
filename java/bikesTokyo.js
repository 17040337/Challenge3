function getAPIdata5() {


	// construct request
	var request = "https://api.citybik.es/v2/networks/nextbike-london";
	
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
		onAPISucces5(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError5(error);
	});
}

function onAPISucces5(response) {
    
    //render bikes, receive API data
    var showBike = response.network.stations[0].free_bikes;
    
    

	// render bikes, pick div
    var freeBike = document.getElementById('free2');
    
    //render bikes, show data
    freeBike.innerHTML = showBike;
    
}


function onAPIError5(error) {
	console.error('Request failed', error);
	var freeBike = document.getElementById('free2');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata5();
