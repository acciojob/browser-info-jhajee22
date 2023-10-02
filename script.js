//your JS code here. If required.
//get browser information from navigator object
const browserName = navigator.appName;
const version = navigator.appVersion;
 //create a message
const message =  "You are using" + browserName + " version " + version.

	//Display the msg in browser info div
	const browserInfoDiv = document.getElementById('browser-info');
browserInfoDiv.textContent = message;
