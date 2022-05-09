const inputGif = document.getElementById("input-gif");
const mainContainer = document.getElementById("main-container");

inputGif.addEventListener('keyup', customGif);

function customGif(event) {   
  const URL = "https://g.tenor.com/v1/search?"  
  const key = "DMHFGEWPEFHD";
  const query = `q=${event.target.value}`
  const limit = "&limit=4";

  fetch(`${URL}${query}&key=${key}${limit}`)
  .then(response => response.json())
  .then(data => createGif(data))  
}


function createGif(data) {   
  mainContainer.innerHTML = "";
  data.results.map( gif => {
    const imgCard = document.createElement("img");
    imgCard.classList.add('img-gif');
    imgCard.src = gif.media[0].mediumgif.url;     
    mainContainer.appendChild(imgCard);
  });  
}



