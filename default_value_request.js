function doHTTPRequest(url, port, method) {
  var requestUrl = url || 'http://localhost';
  var requestPort = port || 80;
  var requestMethod = method || 'GET';
  console.log(`${requestUrl}:${requestPort} ${requestMethod}`);
}

doHTTPRequest();
doHTTPRequest('http://www.example.com');
doHTTPRequest('http://www.example.com', 8080);
doHTTPRequest('http://www.example.com', 8080, 'POST');
