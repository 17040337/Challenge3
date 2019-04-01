function getAPIdata6() {


	// construct request
	var request = "https://api.citybik.es/v2/networks/nextbike-berlin";
	
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
		onAPISucces6(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError6(error);
	});
}

function onAPISucces6(response) {
    
    //render bikes, receive API data
    var showBike = response.network.stations[0].free_bikes;
    
    

	// render bikes, pick div
    var freeBike = document.getElementById('free3');
    
    //render bikes, show data
    freeBike.innerHTML = showBike;
    
}


function onAPIError6(error) {
	console.error('Request failed', error);
	var freeBike = document.getElementById('free3');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata6();
