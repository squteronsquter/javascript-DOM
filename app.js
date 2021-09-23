// console.log('Javascript app.js file is loading')
// console.dir(document)
console.log(document.body.children[0].innerHTML)

const header = document.querySelector('h1')

header.textContent = 'Whatever I say is true always.'

console.log(document.body.children[0].innerHTML)
