/*var text = navigator.clipboard.readText().then(text => outputElem.innerText = text);
var result = document.getElementById('result');
console.log(text);
//result.textContent = "<p>Vous venez de copier : "+text+"</p>";

var test = document.execCommand('paste');
console.log(test);

*/

$(document).ready(function () {
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: "happy",
		type: "random",
		rating: "pg-13"
	};

	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	var newGif = () => $.getJSON(giphyURL, (json) => renderGif(json.data));

	var renderGif = (_giphy) => {
		console.log(_giphy);
        var image = document.getElementById("test");
        image.src = _giphy.image_original_url;
	};

	newGif();

	const newGifButton = $("#new-gif");

	newGifButton.click(newGif);
});

