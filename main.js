function uporedi() {
    let output = document.querySelector('#output')
    let firstNum = document.querySelector('#firstNum').value
    let secondNum = document.querySelector('#secondNum').value
    let thirdNum = document.querySelector('#thirdNum').value

    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)
    thirdNum = parseInt(thirdNum)

    switch(true) {
        case (firstNum > secondNum && firstNum > thirdNum):
            output.innerHTML = ' prvi broj je najveci'
            break;

        case (secondNum > firstNum && secondNum > thirdNum):
                output.innerHTML = ' drugi broj je najveci'
            break;

        case (thirdNum > firstNum && thirdNum > secondNum):
            output.innerHTML = ' treci broj je najveci'
            break;

    }


    // if (firstNum > secondNum ) {
    //     output.innerHTML = ' prvi broj je najveci'
    // }
    // else if (secondNum > firstNum ) {
    //     output.innerHTML = ' drugi broj je najveci'
    // } 
    // else {
    //     output.innerHTML = ' brojevi su jednaki'
    //     // output.innerHTML = 'treci broj je najveci'
    // }
}

function saberi() {
    let ukupno = document.querySelector('#ukupno')
    let firstNum = document.querySelector('#firstNum').value
    let secondNum = document.querySelector('#secondNum').value

    firstNum = parseInt(firstNum)
    secondNum = parseInt(secondNum)

    let izracunato = firstNum + secondNum
    ukupno.innerHTML = `ukupno je ${izracunato}`


}

