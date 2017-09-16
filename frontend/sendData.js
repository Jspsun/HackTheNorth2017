/*
Need to get the youtube video link and the time to post
*/
var videoUrl = "";
var curTimeStamp = "";
function sendData() {
  
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
    videoUrl = tabs[0].url;
    
  });
  console.log("url: "+videoUrl);

  //get curTimeStamp
  //do a post request here:
  
  //return response
}