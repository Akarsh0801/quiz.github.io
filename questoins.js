const questions=[
    {
        "que":"Number of sides in square?",
        "answer1":"4",
        "answer2":"8",
        "answer3":"6",
        "answer4":"10",
        "correct":"ans3",
        
    },

    {
        "que":"Which number should be there next in this series? 25, 24, 22, 19, 15",
        "answer1":"14",
        "answer2":"5",
        "answer3":"30",
        "answer4":"10",
        "correct":"ans4",
        
    },

    {
        "que":"When was JavaScript launched",
        "answer1":"1996",
        "answer2":"1995",
        "answer3":"1994",
        "answer4":"none of these",
        "correct":"ans2",
        
    },

    {
        "que":"Which one of the five is least like the other four?",
        "answer1":"Cow",
        "answer2":"Tiger",
        "answer3":"Snake",
        "answer4":"Dog",
        "correct":"ans3",
        
    },

    {
        "que":"Fullform of NaN",
        "answer1":"Not a number",
        "answer2":"Noted as number",
        "answer3":"none of above",
        "answer4":"Both a and b",
        "correct":"ans1",
        
    },
    
    {
        "que":"If you rearrange the letters 'BARBIT', you would have the name of a",
        "answer1":"Animal",
        "answer2":"Ocean",
        "answer3":"City",
        "answer4":"Country",
        "correct":"ans1",
        
    },

    {
        "que":"Which one of the five is least like the other four?",
        "answer1":"Potato",
        "answer2":"Apple",
        "answer3":"Carrot",
        "answer4":"Bean",
        "correct":"ans2",
        
    },

    {
        "que":"Nia, twelve years old, is three times as old as her sister. How old will Nia be when she is twice as old as her sister?",
        "answer1":"15",
        "answer2":"20",
        "answer3":"21",
        "answer4":"16",
        "correct":"ans4",
        
    },

    {
        "que":"Which one of the five makes the best comparison? Brother is to sister as niece is to:",
        "answer1":"Mother",
        "answer2":"Daughter",
        "answer3":"Nephew",
        "answer4":"Uncle",
        "correct":"ans3",
        
    },

    {
        "que":"Which one of the five makes the best comparison? CAACCAC is to 3113313 as CACAACAC is to:",
        "answer1":"31313113",
        "answer2":"13133313",
        "answer3":"31311131",
        "answer4":"31311313",
        "correct":"ans4",
        
    },






]
let count=0;
let index=0;
const quizblock=document.getElementById("quizblock")
const ques=document.getElementById("ques")
const option=document.querySelectorAll(".option")
const option1=document.getElementById("option1")
const option2=document.getElementById("option2")
const option3=document.getElementById("option3")
const option4=document.getElementById("option4")
const next=document.getElementById("next")
const score=document.getElementById("score")
const submit=document.getElementById("submit")
const home=document.getElementById("home")
const page=document.getElementById("page")
let total=questions.length;


// Reset the next selected options
const reset=()=>{
    option.forEach(
        (option)=>{
            option.checked=false;
            }
       )
}

function load(){

    reset() 
    var data=questions[index]
    ques.innerHTML=`${index+1}) ${data.que}`;

    option1.innerText=data.answer1;
    option2.innerText=data.answer2;
    option3.innerText=data.answer3;
    option4.innerText=data.answer4;
    page.innerHTML=`<p>${index+1}/${questions.length}</p>`
    
}
load();

// Main page
function showquiz(){

    var input1=document.getElementById("input1").value
    if(input1==""){
        alert("Enter name")
    }
else{
    document.getElementById("quizblock").style.display="block"
    document.getElementById("start").style.display="none"
    document.getElementById("input").style.display="none"
    document.getElementById("resblock").style.display="none"
}
 }


// Taking answer
function getans(){
    let answer;
    option.forEach(
        (option)=>{
            if(option.checked){
               answer=option.id;
            }
        }
       );
       return answer;
}





// Next question and result
 function nextque(){
    var data=questions[index]
    if(index<=questions.length){
    ques.innerHTML=`${index+1}) ${data.que}`;
    option1.innerText=data.answer1;
    option2.innerText=data.answer2;
    option3.innerText=data.answer3;
    option4.innerText=data.answer4;
    if(index==data.length){
        document.getElementById("next").style.innerText="Submit"
    }
    const check=getans()
    console.log(check)
    if(check===data.correct){
        count++;
    };
    index++
    if(index < questions.length){
        load()
    }else{
       score.innerHTML=`
       <div class="flex flex-col justify-center items-center space-y-1 mx-auto">
       <p class="text-lg">${input1.value}</p>
       <h3>You scored ${count}/${questions.length}</h3>
       </div>
       `;

       document.getElementById("quizblock").style.display="none"
       document.getElementById("resblock").style.display="block"
    }

   load()  
}
}

