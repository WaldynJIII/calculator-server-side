$(document).ready(handleReady);
var calculateObject = {
    val1: 0,
    funk: "0",
    val2: 0
}
var answer = 0
function handleReady() {

    $('#plusB').on('click', addValue);
    $('#minusB').on('click', subtractValue);
    $('#multiB').on('click', multiValue);
    $('#divideB').on('click', divideValue);
    $('#submitB').on('click', submitCalc);
    $('#clearB').on('click', clearT);
}


function addValue() {

    calculateObject.val1 = $('#val1').val(),
        calculateObject.funk = "plus"
    calculateObject.val2 = $('#val2').val()

    console.log(calculateObject)
}


function subtractValue() {

    calculateObject.val1 = $('#val1').val(),
        calculateObject.funk = "minus"
    calculateObject.val2 = $('#val2').val()

    console.log(calculateObject)
}

function multiValue() {

    calculateObject.val1 = $('#val1').val(),
        calculateObject.funk = "multi"
    calculateObject.val2 = $('#val2').val()

    console.log(calculateObject)
}

function divideValue() {

    calculateObject.val1 = $('#val1').val(),
        calculateObject.funk = "divide"
    calculateObject.val2 = $('#val2').val()

    console.log(calculateObject)
} 
function makeAnswer(returnArray){
    answer = 0
    if(returnArray.funk == 'plus'){
        answer += Number(returnArray.val1) + Number(returnArray.val2)
    }
    else if (returnArray.funk == 'minus') {
        answer += Number(returnArray.val1) - Number(returnArray.val2)
    }
    else if (returnArray.funk == 'multi') {
        answer += Number(returnArray.val1) * Number(returnArray.val2)
    }
    else if (returnArray.funk == 'divide') {
        answer += Number(returnArray.val1) / Number(returnArray.val2)
    }
    
}
function submitCalc() {

makeAnswer(calculateObject)


    $('#cAlc').append(`<tr>
      <td> ${answer}  </td>
      </tr>`
    );
}
function clearT() {
    $('#cAlc').empty()
}
