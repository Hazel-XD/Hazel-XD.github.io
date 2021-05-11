let images = [
'Shockers pro: You can channel an unlimited amount of electricity harmlessly through your body. con: The electricity must be channelled into something (which usually destroys it. If a Shocker discharges into a Lighter, unless it’s exceptionally powerful, the Lighter only receives a mild electric shock).',
'Cloakers - pro: You can completely hide from sight. con: It only works for as long as you can hold your breath.',
'Scholars. pro: You can ingest written content at a lightning pace. con: You forget the information when you next fall asleep or are knocked unconscious.'



]

function newImage() {
var randomNumber = Math.floor(Math.random() * (images.length));
document.getElementById('imageDisplay').innerHTML = images[randomNumber];
}