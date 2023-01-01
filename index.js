const qns = [
    {
        question: "Q1.  What is full form of HTML ?",
        a: "HyperText Makeup Language",
        b: "HyperText Markup Language",
        c: "HigherText Markup Language",
        d: "HighOrderText Make Language",
        ans: "ans2"
    },
    {
        question: "Q2.  How many headings are in HTML ?",
        a: 4,
        b: 1,
        c: 7,
        d: 6,
        ans: "ans4"
    },
    {
        question: "Q3.  What is HTTP stands for ?",
        a: "HyperText Transfer Protocol",
        b: "HyperText Test Protocol",
        c: "HigherText Transfer Procedure",
        d: "HighOrderText Transfer Product",
        ans: "ans1"
    },
    {
        question: "Q4.  Which is not a list ?",
        a: "Description List",
        b: "Ordered List",
        c: "Declaretive List",
        d: "UnOrdered List",
        ans: "ans3"
    },
    {
        question: "Q5.  How many way we can delare a javaScript Variable ?",
        a: 2,
        b: 3,
        c: 1,
        d: 4,
        ans: "ans2"
    }
    
]



const srt_btn = document.getElementById('start_btn');
const qns_box = document.getElementById('qns_box');

const qns_head = document.getElementById('qns');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 =  document.getElementById('option3');
const option4 = document.getElementById('option4');

const qns_no = document.getElementsByTagName('span')[0];
const nxt_qns = document.getElementById('next_qns');

const answers = document.getElementsByClassName('answer');

const user_details = document.getElementById('user');

const result_show = document.getElementById('result_show');
const player_name = document.getElementById('player_name');
const your_result = document.getElementById('your_result');
const emoji = document.getElementById('emoji');
const play_again = document.getElementById('play_again');


let qns_cnt = 0;
let total_mark = 0;
let user_name ;


// hide the questions and the result
qns_box.style.display = 'none';
result_show.style.display = 'none';


//by click the start button display questions
srt_btn.onclick = () => {
    user_name = user_details.value;
    
    if(user_name.length === 0)
    {
        user_details.style.border = '1px solid red';
        user_details.value = "enter your name";
    }
    else
    {        
        qns_box.style.display = 'block';
    }
}

//get the option that is checked by the player
const getCheckedOption = () => {
    let checked_option;
    for(let i = 0;i<answers.length;i++)
    {
        if(answers[i].checked)
        {
            checked_option = answers[i].id;
        }
    }

    return checked_option;
};



//load questions
const loadQuestions = () => {
    qns_head.innerText = qns[qns_cnt].question;

    option1.innerText = qns[qns_cnt].a;
    option2.innerHTML = qns[qns_cnt].b;
    option3.innerText = qns[qns_cnt].c;
    option4.innerText = qns[qns_cnt].d;

    qns_no.innerText = qns_cnt+1;
}


//call that function which load questions by 1st
loadQuestions();


//delete the selected option bydefault
const deselectQuestion = () => {
    for(let i =0;i<answers.length;i++)
    {
        answers[i].checked = false;
    }
}


//show result
const resultDisplay = () => {
    qns_box.style.display = 'none';
    result_show.style.display = 'block';

    player_name.innerHTML = `Hello,  ${user_name}`;
    your_result.innerHTML = `You Scored ${total_mark} of ${qns.length}`;
    
}


//show next questions by click next
nxt_qns.onclick = () => {

    const selected_opt = getCheckedOption();
    if(selected_opt === qns[qns_cnt].ans)
    {
        total_mark++;
    }

    qns_cnt ++;
    deselectQuestion();
    if(qns_cnt === qns.length-1)
    {
        nxt_qns.innerText = "Submit";
    }

    else if(qns_cnt == qns.length)
    {
        resultDisplay();
    }

    loadQuestions();   
}


play_again.onclick = () => {

    location.reload();
}

