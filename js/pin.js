function getpin(){
   const pinstring = generatepin();
    if(pinstring.length === 4){
        return pinstring;
    }
    else{
        return getpin();
    }
}

function generatepin(){    
    const pin = Math.round(Math.random()*10000)
    const pinstring = pin + '';
    return pinstring;
}
document.getElementById('pin_button').addEventListener('click', function(){
  const pinValue = getpin();
  document.getElementById("pin_value").value = pinValue;
  
})


function calcValuConcat(calculatorValue){
    const calcInput = document.getElementById('calc_value');    
    const calcInputVAlue = calcInput.value;
    if(isNaN(calculatorValue)){
        if(calculatorValue === 'C'){
            calcInput.value = '';
        }
        else if(calculatorValue === '<'){
           const splIt = calcInputVAlue.split('');
           const pOp = splIt.pop();
           console.log(pOp)
           const joIn = splIt.join('')
           calcInput.value = joIn;       
        }
    }

    else{
        const calcInputResult = calcInputVAlue + calculatorValue;
        calcInput.value = calcInputResult;
    }
}

document.getElementById('calculator_delegate').addEventListener('click', function(event){
    const calculatorValue = event.target.innerText;
    calcValuConcat(calculatorValue);
})

function pinmatching(matchingId, dNone){
    const notify = document.getElementById(matchingId)
    notify.style.display = 'block';
    document.getElementById(dNone).style.display = 'none'
}

document.getElementById('submit_btn').addEventListener('click', function(){
    const pinField = document.getElementById("pin_value");
    const currentPin = pinField.value;
    const calcPin = document.getElementById('calc_value');
    const currentCalcPin = calcPin.value;
    if(currentPin === ''){
        alert('please generate pin');
        document.getElementById('matched', 'didntmatch').style.display = 'none'        
    }
    else if(currentPin === currentCalcPin){
        pinmatching('matched', 'didntmatch')
        window.location.href = 'dashboard.html';
        
    }
    else{
        pinmatching('didntmatch','matched')
    }

})