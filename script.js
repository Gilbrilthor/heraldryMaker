function loadJSON(requestURL, key) {
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		data[key] = request.response;
		console.log(data.heraldry.divisions.length + 'loaded');
	}
}

function main() {
	var heraldryURL = 'heraldry.json';
	loadJSON(heraldryURL, 'heraldry');

}
