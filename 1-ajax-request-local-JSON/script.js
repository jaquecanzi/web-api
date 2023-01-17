const content = document.querySelector('.content')
const btn = document.querySelector('#btn')
const url = 'person.json'

btn.onclick = () => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
       addData(data)
    })
}

function addData(data) {
    let html = `<h2>Results</h2>`
    data.forEach(person => {
        console.log(person);
        html += `<div>${person.first }${person.last}</div>`
        
    })
    content.innerHTML = html /*     MUITO IMPORTANTE!     */
}

