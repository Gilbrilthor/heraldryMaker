function loadJSON(requestURL) {
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		var heraldry = request.response;
		console.log(heraldry.divisions.length + 'loaded');
	}
}

function main() {
	var heraldryURL = 'heraldry.json';
	loadJSON(heraldryURL, 'heraldry');

}
