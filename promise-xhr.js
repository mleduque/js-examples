let promise = new Promise(function(resolve, reject){
  let client = new XMLHttpRequest();
  client.open('GET', 'https://api.github.com/users/mleduque');
  client.send();

  client.onload = function () {
    if (this.status == 200) {
      // Performs the function "resolve" when this.status is equal to 200
      resolve(this.response);
    } else {
      // Performs the function "reject" when this.status is different than 200
      reject(this.statusText);
    }
  };
  client.onerror = function () {
    reject(this.statusText);
  };
});

promise.then(data => console.log('success'))
       .catch(e => console.log('error'));
