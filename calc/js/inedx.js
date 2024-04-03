/*
let btn = document.getElementById('mybtn')

btn.addEventListener('click', function(event){

    //console.log('you clicked the button!');
    console.log(event);

})
*/

let buttons = document.getElementsByClassName('btn')
let frmResult = document.getElementById('frmResult')

let math = ['/', '*', '-', '+']


Array.from(buttons).forEach((btn, index) => {
    btn.addEventListener('click', event => {
        //console.log(event.target.innerText);
        let btnTitle = event.target.innerText

        if (btnTitle == '='){
            calculateResult()
        } else if (btnTitle == 'CE') {
            emptyFrmResult()
        } else {
            
            if (checkMathSymbol(btnTitle) == false) {
                printInFrmResult(btnTitle)
            }
        }
        
    })
});

function printInFrmResult(text){
    frmResult.value += text
}

function emptyFrmResult(){
    frmResult.value = ''
}

function calculateResult(){
    let value = frmResult.value
    emptyFrmResult()
    printInFrmResult(eval(value))
}

function checkMathSymbol(newSymbol){
    let lastSymbol = frmResult.value.trim().substr(-1, 2)
    return lastSymbol == newSymbol && math.includes(lastSymbol)
}


frmResult.addEventListener('keydown', event => {
    console.log(event.key);

    if (event.key == 'Enter')
    {
        calculateResult()
    } 
    else if (isNaN(event.key) == true && !math.includes(event.key) || 
        checkMathSymbol(event.key)){
            event.preventDefault()
    }
    
})