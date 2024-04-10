
google.charts.load('current', {'packages':['bar']});

let questionsList = document.getElementById('questionsList')
let btnNO = document.getElementById('btnNO')
let btnYES = document.getElementById('btnYES')
let btnShowChart = document.getElementById('btnShowChart')


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
 ['Copper', 8.94, '#b87333', 'Cu' ],
*/
let results = [
    /*{ // 0
        question_id: 1,
        yes: 0,
        no: 0    
    }*/
]

btnNO.addEventListener('click', event => {
    console.log(activeID);
    saveAnswer(activeID, 'NO')
})

btnYES.addEventListener('click', event => {
    console.log(activeID);
    saveAnswer(activeID, 'YES')
})

btnShowChart.addEventListener('click', event => {
    if (results.length == questions.length)
    {
        // show chart
        
        let chartWithData = drawChart(parseResultForGoogleChart())
        google.charts.setOnLoadCallback(chartWithData);

    } else {

        let modal = document.getElementById('exampleModal')
        modal.querySelector('#exampleModalLabel').innerText = 'Info'
        modal.querySelector('#mdlInfoBody').innerText = 'Answer all questions!'

        const mdlInfo = new bootstrap.Modal(modal, {})
        mdlInfo.show()
    }
})

function drawChart(customData) {
    //console.log(customData);
    var data = google.visualization.arrayToDataTable(customData);

    var options = {
      chart: {
        title: 'Question results',
        subtitle: 'My custom answers yes/no',
      }
    };

    var chart = new google.charts.Bar(document.getElementById('chart_div'));
    chart.draw(data, google.charts.Bar.convertOptions(options));
  }

function saveAnswer(questionID, answer){

    // 0 == -1
    if (results.length == 0){
        results.push({
          question_id: questionID.toString(),
          yes: answer.toUpperCase() == 'YES' ? 1 : 0,
          no: answer.toUpperCase() == 'NO' ? 1 : 0    
        })  
    } else {
        // save existing results
        let isResultsFound = false
        results.forEach((result, index) => {
            if (result.question_id == questionID)
            {
                if (answer.toUpperCase() == 'NO')
                {
                    result.no += 1
                } else if (answer.toUpperCase() == 'YES') {
                    result.yes += 1
                }
                isResultsFound = true
            }
        })
        // save additional result for question
        if (isResultsFound == false){
            results.push({
                question_id: questionID.toString(),
                yes: answer.toUpperCase() == 'YES' ? 1 : 0,
                no: answer.toUpperCase() == 'NO' ? 1 : 0    
              }) 
        }
    }


    
}

function parseResultForGoogleChart(){
    //['Copper', 8.94, '#b87333', 'Cu' ],
    let data = [
            ['Question ID', 'Answer Yes', 'Answer No' ],
    ]

    if (results.length >= 1)
    {
        results.forEach(result => {
            data.push([
                result.question_id,
                result.yes,
                result.no
            ])
        })
    }
    return data
}

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
