//add fetch thing here-->



let items =[];
window.onload = function(){
    console.log("hello from windows onload");
    loadItems();
}
const API_URL = "https://api.spotify.com/v1/me/player/recently-played";

function loadItems(){
    console.log("load items...");
  
    fetch(API_URL,{
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
            "Authorization":"Bearer BQAq3jhlFoMq2FjeaZawKvOEjffYEDHv3viaoisQsMlZeKDRbqNhd8ZD3ovuVEVBF9hM1pZwDDxxVap5coSBYKH97d_qQChwjRkafGOoipVkuJMR8Wjr7HtWjZljMIGvjuAHBvhE3v33559OdesukCR2YJZ3Vq1uuf_vkvs"
        }
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        items = json;
        console.table(items);
        displayItems(json);
      })
      .catch((err) => {console.error(err);} ) ;
  }

  function displayItems(){
    console.log("displaying items...");
  };

    
