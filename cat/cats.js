const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = '2 The mother cats are called ';
let kittenInfo;

fetch('cats.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);
  let str = '';
for (let i = 0; i < cats.length; i++) {
  motherInfo = motherInfo + ', ' + cats[i].name;
  
for (let j = 0; j < cats[i].kittens.length; j++) {
 total = total+1;
  if (cats[i].kittens[j].gender == 'm') {
  male = male+1;
}
}

  
}
  let female = total-male;
kittenInfo = 'There are ' + total + ' kittens.' + 'And there are ' + male + 'male kittens' + 'And there are ' + female + 'female kittens.';



// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
