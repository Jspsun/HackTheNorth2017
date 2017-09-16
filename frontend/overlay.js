chrome.browserAction.onClicked.addListener(function(tab) {
  console.log("Fetching youtube data and sending");
  
  
  var response = sendData();
  
  //send response through parse response
  
  //do display stuff
});


