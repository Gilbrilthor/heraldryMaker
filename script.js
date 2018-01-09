function loadJSON(requestURL) {
	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();

	request.onload = function() {
		var heraldry = request.response;
		hideLoad();
		postLoad(heraldry);
	}
}

function hideLoad() {
	var message = document.getElementById('load-message');
	message.style.visibility = 'hidden';
}

function postLoad(heraldry) {
	var field = document.getElementById('field');

	var randomIndex = Math.floor(Math.random() * heraldry.divisions.length);
	var randomField = heraldry.divisions[randomIndex];
	console.log('random field -> "' + randomField + '"');

	field.textContent = randomField;

	console.log('postLoad finished');
}

function main() {
	var heraldryURL = 'heraldry.json';
	loadJSON(heraldryURL, 'heraldry');
}

