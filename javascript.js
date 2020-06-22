let images = [

'You engaged in an inappropriate enterprise togethers (politics, gambling, activism) - now one of you does not trust the other',
'One of you is trying to persuade the other of you to elope. ',
'You  are married. One or both of you  suspect  the other of having a secret affair which may or may not be the case ',
'One of you is writing an autobiography, the other wants to make sure that the family secret* does not get revealed in it ',
'You used to be sworn enemies. Now, a secret binds you togetherand forces you to cooperate',
'One of you employs the other. The employer is considering firing the employee; the employee is either inexplicably loyal or secretly disloyal',
'Everyone expects the two of you  will get engaged soon. There is a problem with that.',
'One of you is seen by the family as a war hero but in reality they deserted or committed another shameful deed. The other knows hat but is keeping silent so far',
'One of you saved the other’s life or reputation. Now it is time to repay that debt',
'One of you knows the others dirty secret and is intending to blackmail them',
'One of you leads a dangerous lifestyle. The other is worried for them and will do anything to make them change their ways.',
'You are having an illicit affair. One of you wants more than the other can give.',
'One of you resents the other and now has the opportunity to destroy  or take away something or someone they cherish. The other will do anything to stop this.',
'One of you owes the other a large sum of money they cannot repay. The other is getting increasingly impatient.',
'You are confidants, bound by a shared secret. Now your friendship is threatened.',
'One of you posed nude for the  other. The resulting painting is a work of art and deserves recognition, but it would cause a scandal.',
'The recent marriage between you is considered a scandalous mesalliance. The more affluent of you is trying to help the other fit in',
'One of you did something that destroyed your reputation. The other is trying to redeem them'

]

function newImage() {
var randomNumber = Math.floor(Math.random() * (images.length));
document.getElementById('imageDisplay').innerHTML = images[randomNumber];
}

let color = [

'Marrying X would give you the money or the status that you crave. You are planning to seducet hem, or, if that fails, manipulate them or their family.',
'You are terminally ill. You need to break the news to X. The doctor suggested a drastic lifestyle change which might prolong your life',
'You recently got released from prison. Your stay there was a secret and was in some way caused by X',
'An element of your lifestyle* is inappropriate for someone in your position. You wonder if X shares your preferences.',
'You are related to X, though they do not know this yet',
'You are in deep trouble. You need to get X‘s help by any means necessary, otherwise your reputation will be destroyed',
'You have returned from the war a changed person. You wonder how X will see you  now',
'You did  something  that, perhaps  inadvertently, hurt X. Now you are  guilt ridden and want to make it up to them in any way  possible',
'You are an imposter, liar or artists of some sort. You  feel that you need to finally tell X the truth',
'You are the reason  the Unexpected Guest isnt here. You feel you need to tell X about this',
'You are infatuated with X but do not know whether they feel the same back',
'You are in deep debt and almost broke. You wonder if X can help you in your circumstances',
'You are considering bequeathing your fortune to  X and possibly disowning your  true heirs'

]

function newColor() {
var randomNumber = Math.floor(Math.random() * (color.length));
document.getElementById('colorDisplay').innerHTML = color[randomNumber];
}

