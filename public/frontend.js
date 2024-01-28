const clubsData = [
    {
        "club": "Atlanta",
        "abbreviation": "ATL"
    },
    {
        "club": "Austin",
        "abbreviation": "ATX"
    },
    {
        "club": "Charlotte",
        "abbreviation": "CLT"
    },
    {
        "club": "Chicago",
        "abbreviation": "CHI"
    },
    {
        "club": "Cincinnati",
        "abbreviation": "CIN"
    },
    {
        "club": "Colorado",
        "abbreviation": "COL"
    },
    {
        "club": "Columbus",
        "abbreviation": "CLB"
    },
    {
        "club": "Dallas",
        "abbreviation": "DAL"
    },
    {
        "club": "DC",
        "abbreviation": "DC"
    },
    {
        "club": "Houston",
        "abbreviation": "HOU"
    },
    {
        "club": "Kansas City",
        "abbreviation": "SKC"
    },
    {
        "club": "LA Galaxy",
        "abbreviation": "LA"
    },
    {
        "club": "LAFC",
        "abbreviation": "LAFC"
    },
    {
        "club": "Miami",
        "abbreviation": "MIA"
    },
    {
        "club": "Minnesota",
        "abbreviation": "MIN"
    },
    {
        "club": "Montreal",
        "abbreviation": "MTL"
    },
    {
        "club": "Nashville",
        "abbreviation": "NSH"
    },
    {
        "club": "New England",
        "abbreviation": "NE"
    },
    {
        "club": "NYCFC",
        "abbreviation": "NYC"
    },
    {
        "club": "NY Red Bulls",
        "abbreviation": "RBNY"
    },
    {
        "club": "Orlando",
        "abbreviation": "ORL"
    },
    {
        "club": "Philadelphia",
        "abbreviation": "PHI"
    },
    {
        "club": "Portland",
        "abbreviation": "POR"
    },
    {
        "club": "Salt Lake",
        "abbreviation": "RSL"
    },
    {
        "club": "San Jose",
        "abbreviation": "SJ"
    },
    {
        "club": "Seattle",
        "abbreviation": "SEA"
    },
    {
        "club": "St. Louis",
        "abbreviation": "STL"
    },
    {
        "club": "Toronto",
        "abbreviation": "TOR"
    },
    {
        "club": "Vancover",
        "abbreviation": "VAN"
    }
];

// get element with id of 'links'
const linksContainer = document.getElementById('links');

// for each club, add a list item and a link to its .ics file
clubsData.forEach(club => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  link.href = `webcal://${window.location.host}/${club.abbreviation}.ics`;
  link.innerText = club.club;
  listItem.appendChild(link);
  linksContainer.appendChild(listItem);
});
