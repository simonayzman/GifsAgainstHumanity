
console.log("init.js");

function start(gifs)
{
	var request = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC";
	var card_imgs = $(".card_img");
	for (var i = 0; i < card_imgs.length; i++) 
	{
		var request = new XMLHttpRequest;
        request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag', true);
        request.onload = function() {
        	var response = JSON.parse(request);
        	console.log(response);
        	var response = response["response"];
        	console.log(response);
        	response = response.substr(1);
        	console.log(response);

        	var image_url = JSON.parse(response)["data"]["image_original_url"];
		    //console.log(image_url);
			//$(card_imgs[i]).attr("src",image_url);  
	        
	        /*if (request.status >= 200 && request.status < 400){
		              
			} else {
	        	console.log('reached giphy, but API returned an error. Status: ' + request.status);
	        }*/
        };
        request.onerror = function() {
        	console.log('connection error');
        };
        request.send();
    }
}