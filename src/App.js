import React from 'react';

function App() {
  var apiKey = "1ec44620f32d4d25b33fb77d12b9e421";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.bungie.net/platform/Destiny/Manifest/InventoryItem/1274330687/", true);
  xhr.setRequestHeader("X-API-Key", apiKey);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      var json = JSON.parse(this.responseText);
      console.log(json.Response.data.inventoryItem.itemName); //Gjallarhorn
    }
  }

  xhr.send();

  const value = 'World';
  return <div>Hello {value}</div>;
}

export default App;
