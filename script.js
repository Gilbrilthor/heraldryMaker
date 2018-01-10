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

function getRandom(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	var randomMember = array[randomIndex];

	return randomMember;
}

function postLoad(heraldry) {
	var field = document.getElementById('field');
	var tincture = document.getElementById('tincture');
	var charge = document.getElementById('charge');

	var randomField = getRandom(heraldry.divisions);
	console.log('random field -> "' + randomField + '"');

	var randomTincture = getRandom(heraldry.tinctures);
	console.log('random tincture -> "' + randomField + '"');

	field.textContent = randomField;
	tincture.textContent = randomTincture;

	console.log('postLoad finished');
}

function main() {
	var heraldryURL = 'heraldry.json';
	loadJSON(heraldryURL, 'heraldry');
}

