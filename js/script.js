console.log('Hello!');

/*
nombre, imagen, tipo, altura y peso
*/

const tittle = document.getElementById('tittle-js');
const text = document.getElementById('text-js');

const button = document.getElementById('get-pokemon');
function renderPokemon(pokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const template = `
      <li>
        <h3>Nombre: ${data.species.name}</h3>
        <img src="${data.species.url}" alt="${data.species.name}">
        <p>Tipo: ${data.types[0].type.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>      
      </li>
      `;
      text.innerHTML = template;
    })
    .catch((error) => console.log(`${error}`));
}

// renderPokemon('squirtle');

// select.addEventListener('click', (value) => {
//   console.log(value.srcElement.value);
// });

button.addEventListener('click', () => {
  const select = document.getElementById('pokemon-select');
  console.log(select.value);
  renderPokemon(`${select.value}`);
});
