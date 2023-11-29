const options = {method: 'GET'};

fetch('https://jsonplaceholder.typicode.com/todos', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));