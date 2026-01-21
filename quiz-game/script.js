const questions=[
    {
        question:"What is the largest animal in the world",
        answer:[
            {text:"Elephant",correct:false},
            {text:"Girafee",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Bear",correct:false}

        ]
    },
    {
        question:"Where does charminar is situated",
        answer:[
            {text:"Mumbai",correct:false},
            {text:"Hyderabad",correct:true},
            {text:"Delhi",correct:false},
            {text:"Visakapatnam",correct:false}

        ]
    },
    {
        question:"Who is the father of the computer",
        answer:[
            {text:"Charles Babbage",correct:true},
            {text:"Albert Einstein",correct:false},
            {text:"Thomas Edison",correct:false},
            {text:"Nicolas Tesla",correct:false}

        ]
    },
    {
        question:"Which one is the fastest programming language among these ?.",
        answer:[
            {text:"Python",correct:false},
            {text:"Java",correct:false},
            {text:"JavaScript",correct:false},
            {text:"C++",correct:true}

        ]
    }
]

const questionElement=document.getElementById("question")
const answerButtons=document.querySelector(".answer-btns")
const answerButton=document.getElementsByClassName(".ans-btn")
const nextButton=document.getElementById("nxt-btn")
let currentQuestionIndex=0;
let score=0;
let completed=false;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    showQuestion()
}

function showQuestion(){
    resetQuestion()
    let currentQuestion=questions[currentQuestionIndex]
    let questionNumber=currentQuestionIndex+1
    questionElement.innerHTML=questionNumber+". "+currentQuestion.question
    
    currentQuestion.answer.forEach(answer => {
        let button=document.createElement("button")
        button.innerHTML=answer.text
        button.classList.add("ans-btn")
        if(answer.correct){
            button.dataset.correct=answer.correct;
           
        }
        button.addEventListener("click",selectAnswer)
        answerButtons.appendChild(button)
   });
}
function resetQuestion(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
   selectedButton=e.target
   isCorrect=e.target.dataset.correct==="true"
   if(isCorrect){
    selectedButton.classList.add("correct")
    score++
   }else{
    selectedButton.classList.add("in-correct")
   }

   //doubt
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct==="true"){
        button.classList.add("correct")
    }
    button.disabled=true;
  });
nextButton.style.display="block";
}
function showScore(){
    resetQuestion()
    questionElement.innerHTML=`You have scored ${score} out of ${questions.length}`
    nextButton.innerHTML="Play Again"
}
function handleNextQuestion(){
    currentQuestionIndex++
if(currentQuestionIndex<questions.length){
    showQuestion()
}else{
    showScore()
}
}
nextButton.addEventListener("click",()=>{
        if(currentQuestionIndex<questions.length){
            handleNextQuestion()
        }
        else{
            startQuiz()
        }
})
startQuiz()




