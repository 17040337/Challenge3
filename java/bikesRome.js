function getAPIdata4() {


	// construct request
	var request = "http://api.citybik.es/v2/networks/nextbike-dordrecht";
	
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
		onAPISucces4(response);	
	})
	
	// catch error
	.catch(function (error) {
		onAPIError4(error);
	});
}

function onAPISucces4(response) {
    
    //render bikes, receive API data
    var showBike = response.network.stations[0].free_bikes;
    
    

	// render bikes, pick div
    var freeBike = document.getElementById('free1');
    
    //render bikes, show data
    freeBike.innerHTML = showBike;
    
}


function onAPIError4(error) {
	console.error('Request failed', error);
	var freeBike = document.getElementById('free1');
	weatherBox.className = 'hidden'; 
}

// init data stream
getAPIdata4();
