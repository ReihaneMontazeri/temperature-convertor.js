let $ = document
let ChangeBtn = $.querySelector('.changeButton')
let resetBtn = $.querySelector('.resetButton')
let convertBtn = $.querySelector('.convertButton')
let firstValue = $.querySelector('.C')
let secondValue = $.querySelector('.F')
let converter = $.querySelector('#converter')
let result = $.querySelector('.result')
let flag = true


ChangeBtn.addEventListener('click', function(){
    if (firstValue.className == '.C' && secondValue.className == '.F'){
        console.log('f to c')
        firstValue.innerHTML = '°F'
        secondValue.innerHTML = '°C'
        firstValue.className = '.F'
        secondValue.className = '.C'
        converter.placeholder = '°F'
        $.title = '°F to °C'
        flag = false
    }else {
        console.log('c to f')
        firstValue.innerHTML = '°C'
        secondValue.innerHTML = '°F'
        firstValue.className = '.C'
        secondValue.className = '.F'
        converter.placeholder = '°C'
        $.title = '°C to °F'
        flag = true
    }
})

resetBtn.addEventListener('click',function(){
    converter.value = ''
    result.innerHTML = ''
})

convertBtn.addEventListener('click',function(){
    let userValue = converter.value
    let resultNumber
    if(userValue === ''){
        result.innerHTML = 'please enter a number'
    }else if(typeof userValue != 'number'){
        result.innerHTML = 'please enter valid entry'
    }else{
        if(flag){
            resultNumber = (userValue * 9 / 5) + 32
        }
        else {
            resultNumber = (userValue - 32) * 5 / 9
        }
        result.innerHTML = resultNumber
    }
    

})