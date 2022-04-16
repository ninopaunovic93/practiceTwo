function uporedi() {
    let output = document.querySelector('#output')
    let firstNum = document.querySelector('#firstNum').value
    let secondNum = document.querySelector('#secondNum').value

    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)

    if (firstNum > secondNum) {
        output.innerHTML = ' prvi broj je veci'
    }
    else if (secondNum > firstNum) {
        output.innerHTML = ' drugi broj je veci'
    }
    else {
        output.innerHTML = ' brojevi su jednaki'
    }
}

function saberi(){
    let ukupno = document.querySelector('#ukupno')
    let firstNum = document.querySelector('#firstNum').value
    let secondNum = document.querySelector('#secondNum').value
    
    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)
    
    let izracunato = firstNum + secondNum 
    ukupno.innerHTML = `ukupno je ${izracunato}`


}

