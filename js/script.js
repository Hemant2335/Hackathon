// Sidebar Starts


var ihtml = "hi"

const cmenu = ()=>{
    if (ihtml == "hi")
    {
        ihtml = `<div class="content">
        <ul>
            <li><a  href="#">Home</a></li>
            <li><a href="#" >Chat</a></li>
            <li><a href="#" >About us</a></li>
        </ul>
        </div>`
        document.getElementById("container").innerHTML = ihtml;
        ihtml = "no";
    }
    else{
        document.getElementById("container").innerHTML = "";
        ihtml = "hi";
    }
}

// Sidebar Ends

// Weather App Starts
function search(){
	let x = document.getElementById("bars").value
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'eeb0daffaemshccbcbf498419aaep180623jsn592c72a006e4',
			'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
		}
	};
	
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${x}`, options)
		.then(response => response.json())
		.then(response => {
			let ihtml = `<h2 id ="temp1">${response.temp}&#176C</h2>`
			document.getElementById("temp").innerHTML = ihtml;
			let khtml  = `<h2 id ="hum1">${response.humidity}%</h2>`
			document.getElementById("hum").innerHTML = khtml;
			let lhtml= `<h2 id ="winds1">${response.wind_speed}K/h</h2>`
			document.getElementById("winds").innerHTML = lhtml;
		})
		.catch(err => console.error(err));
	document.getElementById("bars").value = ""
}


// Corona app starts

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'eeb0daffaemshccbcbf498419aaep180623jsn592c72a006e4',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch(`https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/${x}/can`, options1)
	.then(response => response.json())
	.then(response => {let cohtml = `<h2 id ="temp1">${response.TotalCases}</h2>`
    document.getElementById("temp").innerHTML = cohtml;
    let coohtml  = `<h2 id ="hum1">${response.TotalDeaths}%</h2>`
    document.getElementById("hum").innerHTML = coohtml;
    let corhtml= `<h2 id ="winds1">${response.ActiveCases}K/h</h2>`
    document.getElementById("winds").innerHTML = corhtml;})
	.catch(err => console.error(err));

// Corona app ends
