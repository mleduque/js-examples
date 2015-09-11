function doHTTPRequest(url) {
  var requestUrl = url || 'http://localhost';
  var requestPort = 80;
  if (arguments.length > 1) {
    requestPort = arguments[1];
  }
  var requestMethod = 'GET';
  if (arguments.length > 2) {
    requestMethod = arguments[2];
  }
  console.log(`${requestUrl}:${requestPort} ${requestMethod}`);
}

doHTTPRequest();
doHTTPRequest('http://www.example.com');
doHTTPRequest('http://www.example.com', 8080);
doHTTPRequest('http://www.example.com', 8080, 'POST');
