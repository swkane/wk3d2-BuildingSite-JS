console.log(customers);
console.log(customers.results[0].email);
let container = document.querySelector('.container');
// let image = document.createElement('img');
// image.setAttribute('src', customers.results[0].picture.large);
// container.appendChild(image);
let profile = document.createElement('div');
profile.setAttribute('class', 'profile');
// shorthand variable
const results = customers.results[0];
profile.innerHTML = `
  <img src="${results.picture.large}" alt="profile">
  <p class="name">${results.name.first} ${results.name.last}</p>
  <p class="email">${results.email}</p>
  <p class="address">${results.location.street}</p>
  <p class="address">${results.location.city}, ${results.location.state} ${results.location.postcode}</p>
  <p class="number">${results.phone}</p>




`;

container.appendChild(profile);
