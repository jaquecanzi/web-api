const url = 'https://randomuser.me/api/?results=10'
const button = document.querySelector('button')
const output = document.querySelector('.output')

button.addEventListener('click', getData)
function getData() {
    output.innerHTML = ""

    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
}

const showData = getData => {
    let img = document.createElement('img')
    getData.results.forEach(e => {
        img.setAttribute('src',e.picture.thumbnail)
        img.style.display = 'block'
        output.appendChild(img)
        output.innerHTML += `${e.name.first} ${e.name.last}<br>`
    });
}