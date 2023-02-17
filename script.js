const API_KEY = 'RGAPI-fce136f7-77cd-44f8-ac12-20c43ba7e8fe';
const SUMMONER_NAME = '<summoner-name>';
    
    fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${SUMMONER_NAME}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

      function myFunction() {
        var input = document.getElementById("myInput").value;
        fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${input}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
      }