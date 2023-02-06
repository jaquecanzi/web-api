const url = "https://dummyjson.com/users"
const output = document.querySelector('.output')

fetch(url)
.then((res) => res.json())
.then(data => {
    addData(data)
})

function addData(data) {

    data.users.forEach(e => {
        console.log(e);
        output.innerHTML += `<h3>${e.firstName}</h3><br>`
    })

}