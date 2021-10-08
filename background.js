



	chrome.browserAction.onClicked.addListener(function(tab) {
	  
		chrome.tabs.executeScript({
			code: 'function show() {window.setTimeout(function() { window[teId].showBanner(true);}, 10);  }"; '
		  });
	  
	  
	});