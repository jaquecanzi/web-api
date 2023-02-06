const states = document.getElementById("states");
const capitals = document.getElementById("capitals");
const distritosPT = document.getElementById("distritosPT");

fetch(
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
)
  .then((statesReturned) => {
    return statesReturned.json();
  })
  .then((statesFormated) => {
    statesFormated.map((e) => {
      return (states.innerHTML += `<li>${e.nome}</li>`);
    });
  });

fetch(
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/regioes-metropolitanas"
  //Array > objetos > objeto.nome
)
  .then((rmReturned) => {
    return rmReturned.json();
  })
  .then((rmFormated) => {
    let municipios = rmFormated[0].municipios;
    console.log(municipios);
    municipios.map((e) => {
      capitals.innerHTML += `
      <li>
      ${e.nome}
      </li>
      `;
    });
  });

fetch('https://api.ipma.pt/open-data/distrits-islands.json') //objeto > array > objeto.local
.then(distReturned => {
    return distReturned.json()
})
.then(distFormated => {
    let local = distFormated.data
      local.map(e => {
        distritosPT.innerHTML += `
      <li>
      ${e.local}
      </li>
      `;
      })
    })
