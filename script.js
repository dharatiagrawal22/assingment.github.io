const quize=[
{
    question:"Q1: Who is the CEO of Google?",
    a:"Nandita Sinha",
    b:"Andy Jassy",
    c:"Sundar Pichai",
    d:"Brendan Eich",
    ans:"ans3"
},
{
    question:"Q2: Who is the CEO of amazon?",
    a:"Jeff Weiner",
    b:"Andy Jassy",
    c:"Vidit Aatrey",
    d:"Susan Wojcicicki",
    ans:"ans2"
},
{
    question:"Q3: Who is the CEO of YouTube?",
    a:"Susan Wojcicicki",
    b:"Parag Agrawal",
    c:"Jeff Bezos",
    d:"Pavel Durov",
    ans:"ans1"
},
{
    question:"Q4: Who is the CEO of linkedIn?",
    a:"Salil Parekh",
    b:"Sameer Nigam",
    c:"Vijay Shekhar Sharma",
    d:"Jeff Weiner",
    ans:"ans4"
},
];
const question=document.querySelector('.question');
const option1=document.querySelector('#opt1');
const option2=document.querySelector('#opt2');
const option3=document.querySelector('#opt3');
const option4=document.querySelector('#opt4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
const show=document.querySelector('#score');

let questionCount=0;
let score=0;

const loadQuestion=()=>{
    const questionList=quize[questionCount];
    question.innerText=questionList.question;

    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckedAnswer=()=>{
    let answer;
    answers.forEach((currans) => {
        if(currans.checked){
            answer=currans.id;
        }
    })
    return answer;
};
const deleteAll=()=>{
    answers.forEach((currans) => currans.checked=false);
}
submit.addEventListener('click',()=>{
    const checkedAns=getCheckedAnswer();
    console.log(checkedAns);

    if(checkedAns === quize[questionCount].ans){
        score++;
    };

    questionCount++;
    deleteAll();
    if(questionCount<quize.length){
        loadQuestion();
    }else{
       show.innerHTML=`
       <h3>Your Score ${score}/${quize.length} ✌️ </h3>
       <button class="btn" onclick="location.reload()">Play Again</button>
       `;
       show.classList.remove('display');
    }
});