const correctAnswers = ["B","B","B","B"];
const result = document.querySelector(".result");
const form = document.querySelector(".quiz-form");
const spani = document.querySelector(".spani");
let score = 0;
form.addEventListener("submit", e =>{
    e.preventDefault();
    scrollTo(0,0);
    const answers = [form.q1.value , form.q2.value , form.q3.value , form.q4.value];
    if(score!==0){
        alert("you can't submit again");
        return score;
    } 
    for(let i=0 ; i<answers.length;i++){
        if(answers[i]=== correctAnswers[i]){
            score++;
        }
    };
    let results = score/answers.length *100;
    let output = 0 ;
    const counter = setInterval( () => {
        document.querySelector(".spani").textContent = ` ${output}%`;
        if(results === output){
            clearInterval(counter);
        }else{
            output++;
        }
    },100)
    
});
