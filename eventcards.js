let images = [ 
'You had a fight with [character]. Who was it? What happened?',
'You committed a crime. What did you do? Who was involved?',
'You have developed a crush on [character]. Who is it? Do they know? Will you act on it?',
'You are having an affair with [character]. Who is it? How did this develop?',
'You tricked [character] into helping you with something. Who was it? What happened?',
'You betrayed [character]. What did you do? What happened after?',
'You had a serious accident. What happened? How do you feel now?',
'You had a life changing event. What happened? How did you change?',
'You changed jobs. Where do you work now? How do you feel about it?',
'You got married! To whom? Are you happy?',
'You had a child. With whom? How do you feel being a parent?',
'You decided to change careers. What do you do now?How do you feel about it?',
'You went back to study. What are you studying? Do you enjoy it?',
'You moved to a new city/part of town. How did the move go? Are you happy in your new place?',
'You wrote a book! What about? Is it successful?',
'You suspect [character] of a crime. What do you suspect? How do you feel about it?',
'You are jealous of [character]. For what?',
'You think the others are scheming against you. What do you think they will do?',
'You think [character] is going to go public about your ritual. How do you feel about it?',
'You are becoming fearful of the devils. Maybe you could confide in [character]. What will you do?',
'You created something that has become very popular and is selling like crazy. What is it? How do you feel about the publicity?',
'You have become a celebrity! What are you famous for? How do you feel about the publicity?',
'A project you worked very hard on failed miserably. Who might be responsible?How do you feel?',
'You have a wish you want to ask of the devils. What is it?'

    ]
    
    function newImage() {
        var randomNumber = Math.floor(Math.random() * (images.length));
        document.getElementById('imageDisplay').innerHTML = images[randomNumber];
        }