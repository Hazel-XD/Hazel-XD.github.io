let images = [

'1',
'2',
'3'

]

function newImage() {
var randomNumber = Math.floor(Math.random() * (images.length));
document.getElementById('imageDisplay').innerHTML = images[randomNumber];
}

let color = [

'4',
'5',
'6'

]

function newColor() {
var randomNumber = Math.floor(Math.random() * (color.length));
document.getElementById('colorDisplay').innerHTML = color[randomNumber];
}

