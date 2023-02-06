const url = 'json.json'
const output = document.getElementsByClassName('output')

let xHR = new XMLHttpRequest()
xHR.open('GET',url)
xHR.responseType = 'json'
xHR.onload = () => {
    console.log(xHR.response);
}

xHR.send()
//console.log(xHR)