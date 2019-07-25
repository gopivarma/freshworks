var countries = [];
var countryNames = [];
var searchBar = document.getElementById('search-bar');
var searchInput = document.getElementById('search-input');
var tableContent =  document.getElementById('table-content');
var searchResults = document.getElementById('search-results');
var logo = document.getElementById('company-logo')
var countriesList = document.getElementById('countries-list');
var closeInput = document.getElementById('close-input');

function getACountry(name) {
  fetch('https://restcountries.eu/rest/v2/name/{name}?fullText=true')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    countries = data;
    countryNames = countries.map(country => country.name);
    generateCountriesTable()
    
  }).
  catch(error=> {
    showToaster('Something went wrong', error)
  })
}

countriesDOM = '';
  searchResultsDOM = ''
  const html = `<tr onclick="showCountry('${country.name}')" data-country=${country.name}>

    <td>${country.name}</td>
    <td><img class="country-flag" src=${country.flag}></td>
    <td>${country.capital}</td>
    <td>${country.population}</td>
    </tr>`
    countriesDOM +=html;
    const searchHTML = `<li data-country=${country.name} onclick="showCountry('${country.name}')">
    <div class="flag"><img class="country-flag" src=${country.flag}></div>
    <div class="name">${country.name}</div>
    <div class="nCapital">\n\nCapital=${country.capital}</div>
    <div class="nPopulation">\n\nPopulation=${country.population}</div>
    </li>`