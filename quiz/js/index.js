
let questionsList = document.getElementById('questionsList')


let questions = [
    {
        id: 1,
        question: 'question 1',
        right_answer: 'yes',
        img: 'https://picsum.photos/id/71/250/250', // false
    },
    {
        id: 2,
        question: 'question 2',
        right_answer: 'yes',
        img: '', // false
    },
    {
        id: 3,
        question: 'question 3',
        right_answer: 'yes',
        img: 'https://picsum.photos/id/76/250/250', // false
    }
]

/*
qustion_id: answer_clicked
*/
let results = []

function createNewLiElement(text, isActive = false){
    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    if (isActive) newLi.classList.add('active')
    newLi.innerHTML = text
    //console.log(newLi.outerHTML);
    return newLi
}

//console.log(createNewLiElement('new Q', true));
let activeID = 1

function drawQuestionList(){
    questionsList.innerHTML = ''
    questions.forEach(item => {
        let isActive = false
        if (item.id == activeID) isActive = true

        let li = createNewLiElement(item.question, isActive)
        li.setAttribute('data-id', item.id)
        questionsList.innerHTML += li.outerHTML
    })
}


function getQuestionByID(id){
    return questions.find(item => {
        return item.id == id
    })
}

//console.log(getQuestionByID(3));

/* QUESTION - RIGHT PANEL */


let question = document.getElementById('question')
let quesiton_image = document.querySelector('#question_image')

function drawOneQuestion()
{
    let currentQuestion = getQuestionByID(activeID)
    question.innerText = currentQuestion.question
    if (currentQuestion.img.trim().length != 0)
    {
        let img = document.createElement('img')
        img.src = currentQuestion.img
        quesiton_image.innerHTML = img.outerHTML
        console.log(img);
    } else {
        quesiton_image.innerHTML = ''
    }
    //console.log(quesiton_image);
}

/* start position */
drawQuestionList()
drawOneQuestion()

function removeActiveList(){
    questionsList.querySelectorAll('.list-group-item')
    .forEach(item => {
        item.classList.remove('active')
    })
}

questionsList.querySelectorAll('.list-group-item')
    .forEach(item => {
        console.log(item);

        item.addEventListener('click', event => {
            activeID = event.target.dataset.id
            console.log(activeID);

            removeActiveList()
            event.target.classList.add('active')

            //drawQuestionList()
            drawOneQuestion()
        
        })
    })
