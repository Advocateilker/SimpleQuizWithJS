const quizData = [
    {
        question: 'What is the Capital of Canada?',
        a: 'Toronto',
        b: 'Ottava',
        c: 'Calgary',
        d: 'Montreal',
        e: 'Québec',
        correct: 'b'
    },
    {
        question: 'What is the Capital of Turkey?',
        a: 'İstanbul',
        b: 'Kayseri',
        c: 'İzmir',
        d: 'Ankara',
        e: 'Bursa',
        correct: 'd'
    },
    {
        question: 'What is the Capital of France?',
        a: 'Paris',
        b: 'Lyon',
        c: 'Marsilya',
        d: 'Nice',
        e: 'Toulouse',
        correct: 'a'
    },
    {
        question: 'What is the Capital of Australia?',
        a: 'Melbourne',
        b: 'Sydney',
        c: 'Brisbane',
        d: 'Perth',
        e: 'Kanberra',
        correct: 'e'
    },
    {
        question: 'What is the Capital of Democratic Republic of Congo?',
        a: 'Boma',
        b: 'Matadi',
        c: 'Kinshasa',
        d: 'Kenge',
        e: 'Kananga',
        correct: 'c'
    }
];


const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');
const eText = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const deselectedAnswers = () =>{
    answerEls.forEach((answerEl)=>(answerEl.checked = false))
}



const loadQuiz = () => {
    const currentQuizData = quizData[currentQuiz];
    deselectedAnswers()
    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
    eText.innerText = currentQuizData.e

}
loadQuiz()

function getSelected(){
    let answer;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer=answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer=getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
    }
    currentQuiz++
    if(currentQuiz<quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML= 
        ` <h2> Test completed,You Get ${score * 20}  Points </h2>
        <button class="submit" onClick="location.reload()"> Try Again 🌀  </button>`
    }
})










