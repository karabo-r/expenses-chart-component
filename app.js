// import data from './modules/data.mjson'
const statsContainer = document.getElementById('statsContainer')

const data = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]

function processData(data){
    let boxes = []
    for (let i = 0; i < data.length; i++) {
        const boxContainer = document.createElement('div')
        const box = document.createElement('div')
        const pTag = document.createElement('p')

        boxContainer.className = 'boxContainer'

        box.style.height = `${ 200 / data[i].amount}rem`
        box.style.margin = '10px'
        box.className = 'main-box'
        

        pTag.append(data[i].day)
        boxContainer.append(box)
        boxContainer.append(pTag)



        boxes.push(boxContainer)
    }
    // console.log(boxes);
    return boxes;
}

function appendData(data){
    for (let i = 0; i < data.length; i++) {
        statsContainer.appendChild(data[i])
    }
}

appendData(processData(data))


// console.log(data[0].amount);
// processData(data)
// console.log((processData(data)));
// statsContainer.appendChild(processData(data))