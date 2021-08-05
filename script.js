
// Picture buttons below 

function addBanjo() {
    const banjo = document.createElement('img');
    banjo.src = "Banjo.JPG";
    banjo.alt = "Dave playing Banjo"
    banjo.style.width = "400px";
    document.getElementById('buttons').appendChild(banjo);
} 

function addUltra() {
    const rocky = document.createElement('img');
    rocky.src = "Rocky-50.JPG";
    rocky.alt ="Rocky 50 Miler"
    rocky.style.width = "400px";
    document.getElementById('buttons').appendChild(rocky);
}

function addMountains() {
    const middle = document.createElement('img');
    middle.src ="middle.jpeg";
    middle.alt ="Middle Teton"
// How can i add a link to image?...  middle.setAttribute("href", "https://www.strava.com/activities/5676545097");
    middle.style.width="400px"
    document.getElementById('buttons').appendChild(middle);
}

// test below

const button = document.getElementById('button');

const famous = document.getElementById('famous-person');

function rotateImg() {
    button.style.transform = 'rotate(180deg)';
}

function albertEinstein() {
    const einstein = document.createElement('img');
    einstein.src ="einstein.png";
    document.getElementById('personality').appendChild(einstein);
    famous.innerHTML = "Not that smart though!";
    
}

function clickAlert() {
    alert("Thanks for visiting!")
}

button.addEventListener("click", clickAlert);

famous.addEventListener('click', albertEinstein);

