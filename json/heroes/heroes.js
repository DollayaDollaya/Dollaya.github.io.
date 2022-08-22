//Grab a reference to the header tag in the HTML file

const header = document.querySelector('header');

//Grab a reference to the section tag in the HTML file

const section = document.querySelector('section');

let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {            // After the page is loaded
  const superHeroes = request.response; 
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

function populateHeader(jsonObj) {

  // Create a <h1> HTML element

  const myH1 = document.createElement('h1');

  // Set the text value to Super Hero Squad

  // by grabbing the JSON object value that corresponds to squadName

  myH1.textContent = jsonObj['squadName'];

  // Update the HTML file

  header.appendChild(myH1);

  // Create a <p> element

  const myPara = document.createElement('p');

  //Set the text value to Hometown: Metro City // Formed: 2016

  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];

  // Update the HTML file

  header.appendChild(myPara);

}
