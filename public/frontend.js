
const clubsData = require('../data/clubs.json');
// get element with id of 'links'
const linksContainer = document.getElementById('links');

// for each club, add a list item and a link to its .ics file
clubsData.forEach(club => {
  const clubContainer = document.createElement('div');
  const clubHeading = document.createElement('h2');
  clubHeading.innerText = club.fullname;
  clubContainer.appendChild(clubHeading);

  const url = `webcal://${window.location.host}/${club.abbreviation}.ics`;
  let links = new Map();
  links.set('apple', url);
  links.set('google', `https://calendar.google.com/calendar/u/0/r?cid=${url}`);
  links.set('outlook', `https://outlook.office.com/calendar/addfromweb?url=${url}&name=${club.fullname}%20Schedule`);
  links.set('other', url);

  for (let [key, value] of links) {
	  const linkButton = document.createElement('a');
	  linkButton.href = value;
	  linkButton.innerText = key;
	  clubContainer.appendChild(linkButton);
  }

  linksContainer.appendChild(clubContainer);
});
