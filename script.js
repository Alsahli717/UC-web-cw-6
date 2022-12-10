function bmi(weight =100, height =1.8){
    return (weight / (height*height) )
}
console.log(bmi(200,1.8))
console.log(bmi())

function Status(bmi){
    if(bmi < 18.5){
         return "you have weight lose"
    } else if (bmi >= 18.5 && bmi < 25){
         return "you have a healthy weight"
    } else if(bmi >= 25) {
         return "you're overweight"
    }
    
}

function calculate(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let bmiResult = bmi(weight, height)
    let desc = Status(bmiResult)
    document.getElementById("result").innerText = bmiResult+ " " + desc
}