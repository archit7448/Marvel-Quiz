var readlinesync = require('readline-sync');

var username = readlinesync.question("Enter your name? ");
console.log("let's "+username+" play to our MARVEL quiz")

var highScore = [
  {
    name: "Archit",
    score : 6
  },{
    name : "sanchi",
    score: 5,
  }
]


var score=0
function play(question,answer){
  var useranswer = readlinesync.question(question);
if (useranswer === answer ){
  console.log("you are right"); 
  score = score + 1
}else{
  console.log("you are wrong")
}
  console.log("score=",score)
}
var questions=[
  {
    question: "what is Iron-man real name?\n a-Nick Fury\n b-Bucky Barnes \n c-Tony Stark\n ",
    answer: "c"
},
  {
    question: "what is real name of hulk?\n a-Bruce Banner \n b-Steve Rogers \n c-Black Widow\n ",
    answer: "a"
},
{
    question:"What is title of loki? \n a-god of evil \n b-god of mischief\n c- god of pranks\n ",
    answer: "b"
},
{
    question:"Who is the original owner of reality stone?\n a-Asgardians \n b-Dark-Elves \n c-The Humans\n ",
    answer : "b"
},
{
    question:"In which movie spider-man first appear?\n a-Civil War\n b-Spider-man Homecoming\n c-Avengers\n ",
    answer:"a"
},
{
    question:"What is the special force work in Wakanda?\n a-Shuri \n b- Dora Milajae \n c-Okoyo\n ",
    answer:"b"
},
{
    question:"In the movie Thor:The Dark World loki take which avenger form?\n a-Thor \n b-Captain America \n c-black widow\n ",
    answer: "b"
}];

for (var i=0; i<questions.length ;i++){
  var currentquestion= questions[i]
  play(currentquestion.question , currentquestion.answer)
}

function showHighScore(){
  console.log("yay! you scored",score)
  console.log("checkout High score ,if you score more than high score inform me I will update it ")
  highScore.map(score=> console.log(score.name, ":",score.score)) 
}
showHighScore()