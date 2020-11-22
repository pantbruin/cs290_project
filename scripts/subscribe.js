document.getElementById('requestJoke').addEventListener('click', function(event){
    var req = new XMLHttpRequest();
    var category = document.getElementById('jokeCategory').value
    req.open('GET', `https://api.chucknorris.io/jokes/random?category=${category}`, true);
    req.send()
    req.addEventListener('load',function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText)
        console.log(response)
        var respondedJoke = response['value']
        document.getElementById('output').textContent = `${respondedJoke}`;
        document.getElementById('output').style.backgroundColor = "#ca3e47"
        document.getElementById('output').style.color = "black"
        document.getElementById('output').style.width = "50%"
      } else {
        console.log("Error in network request: " + req.statusText);
      }});
    event.preventDefault();
  });
