const valueTable = {
    Dog: 1,
    tenyearold: 8.9,
    groupOfMillenials: 8,
    presidentPope:10,
    individualCrossingTheRoad:7.4,
    aGroupOfPeopleCrossingTheRoad:7,
    aFemale:6,
    aMale:5,
    childBaby:8.2,
    seniorCitizen: 2,
    nationalFootballTeam: 9,
    Accountant: 4,
    AIEngineer:7,
    doctorPolice:8.5,
    student:5.5,
    janitor:3
}
const output = document.getElementById('output')
const firstInputValue = document.getElementById('firstcase')
const secondfInputValue = document.getElementById('secondcase')
secondfInputValue.addEventListener('change' , compare)
firstInputValue.addEventListener('change',compare)

function compare(){
    const getFirstValue = firstInputValue.value
    const getSecondValue = secondfInputValue.value 

    compareTwoValues(getFirstValue,getSecondValue)
}


function compareTwoValues(value1, value2){
    console.log(valueTable[value1], valueTable[value2])
    if(valueTable[value1] > valueTable[value2]){
        output.innerHTML = `<h2> the self driving car would save the: </h2>  <h2>${value1}</h2>`
    }
    else{
        output.innerHTML = `<h2> the self driving car would save the: </h2> <h2>${value2}</h2>`

    }
}