const url = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=javascript&site=stackoverflow'
const btn = document.querySelector('button')
const output = document.querySelector('.output')

btn.addEventListener('click', getData)

function getData(e) {
    e.preventDefault()
    fetch(url)
    .then(resp => resp.json())
    .then(data => data.items.forEach(e => {
        let div = document.createElement('div')
        div.innerHTML = `${e.question_id} <a href="${e.link}" target="_blank">${e.title}</a>`
        output.appendChild(div)
    }))

}