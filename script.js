/*var text = navigator.clipboard.readText().then(text => outputElem.innerText = text);
var result = document.getElementById('result');
console.log(text);
//result.textContent = "<p>Vous venez de copier : "+text+"</p>";

var test = document.execCommand('paste');
console.log(test);

*/

$(document).ready(function () {

    var choix = document.getElementById('choix').value;
    if(choix == ""){
        choix = "fail";
    }

	var giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: choix,
		type: "random",
		rating: "pg-13"
	};

	var giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

    function updateTag(){
        var choix = document.getElementById('choix').value;
        if(choix == ""){
            giphy = {
                baseURL: "https://api.giphy.com/v1/gifs/",
                apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
                tag: "fail",
                type: "random",
                rating: "pg-13"
            };
            giphyURL = encodeURI(
                giphy.baseURL +
                    giphy.type +
                    "?api_key=" +
                    giphy.apiKey +
                    "&tag=" +
                    giphy.tag +
                    "&rating=" +
                    giphy.rating
            );
        }else{
            giphy = {
                baseURL: "https://api.giphy.com/v1/gifs/",
                apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
                tag: choix,
                type: "random",
                rating: "pg-13"
            };

            giphyURL = encodeURI(
                giphy.baseURL +
                    giphy.type +
                    "?api_key=" +
                    giphy.apiKey +
                    "&tag=" +
                    giphy.tag +
                    "&rating=" +
                    giphy.rating
            );
        }

        newGif();
    }


	var newGif = () => $.getJSON(giphyURL, (json) => renderGif(json.data));

	var renderGif = (_giphy) => {
		console.log(_giphy);
        var image = document.getElementById("test");
        image.src = _giphy.image_original_url;
 
        console.log(giphy);
	};

	updateTag();

	const newGifButton = $("#new-gif");

	newGifButton.click(updateTag);
});

