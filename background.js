



	chrome.browserAction.onClicked.addListener(function(tab) {
	  
		/*chrome.tabs.executeScript({
			code: 'function show() {window.setTimeout(function() { window[teId].showBanner(true);}, 10);  }"; '
		  });*/

		  //alert("coucou");
		  var notification = new Notification('Titre de la notif !', {
			icon: 'icons/icon128.png',
			   body: "Votre petite description de la notification",
		   });

		   
  
	  
	  
	});