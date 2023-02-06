const url = "https://www.reddit.com/r/test/top/.json?limit=10"
const output = document.querySelector('.output')

fetch(url)
.then(res => res.json())
.then(data => {
    makeHTML(data.data.children)
})

function makeHTML(val) {
    output.innerHTML = ""
    val.forEach(e => {
        console.log(e.data.title);
        console.log(e.data.url);
        output.innerHTML += `<p>${e.data.title}<br> ${e.data.url}<br><br></p>`
    });
}


