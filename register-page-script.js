const mapSection = document.querySelector('.map-content');

const newSection = document.createElement('div');
newSection.classList.add('map-content-google');

mapSection.append(newSection);
const button = document.createElement('a');

button.href = 'https://www.google.pl/maps/';
button.innerText = 'Check it on google';
button.classList.add('lia-button');
newSection.append(button);
