let isLoading = true;

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(function(response) {
    var contentType = response.headers.get("content-type");
    if(contentType && contentType.includes("application/json")) {
        return response.json();
    }
    
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function(json) { console.log(json); })
  .catch(function(error) { console.log(error); })
  .finally(function() { isLoading = false; });

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally

// Tail calls 
// https://www.ecma-international.org/activities/Languages/Language%20overview.pdf (page 28)