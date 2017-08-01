console.log(customers);
let main = document.querySelector('.main');

for (let i = 0; i < customers.results.length; i++) {
  let profile = document.createElement('div');
  profile.setAttribute('class', 'profile');
  // shorthand variable
  const results = customers.results[i];
  profile.innerHTML = `
    <img src="${results.picture.large}" alt="profile">
    <div class="info">
      <p class="name">${results.name.first} ${results.name.last}</p>
      <p class="email">${results.email}</p>
      <p class="address">${results.location.street}</p>
      <p class="address">${results.location.city}, ${results.location.state} ${results.location.postcode}</p>
      <p class="address">${results.phone}</p>
      <p class="id">${results.id.value}</p>
    </div>
  `;

  main.appendChild(profile);
}
