
const button=document.querySelector('button')
const body=document.querySelector('body')

const color=['red', 'blue','white','black','green','orenge']

body.style.backgroundColor='red'

button.addEventListener('click',chengeB)

function chengeB(){
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
}