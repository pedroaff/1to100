var numbers = new Array()
var isFinish = false

document.getElementById('add').addEventListener('click', addButtonFinish)

verify = n => {
    return n > 0 && n <= 100 ? true : false
}

function add() {
    let valueField = document.querySelector('input#number').value
    let value = Number(valueField)

    if (isFinish) {
        numbers = new Array()
        document.querySelector('div#total').innerHTML = ''
        document.querySelector('select#values').innerHTML = ''
        isFinish = false
    }

    if (verify(value)) {
        let select = document.querySelector('select#values')
        let opt = document.createElement('option')

        opt.text = value
        select.appendChild(opt)
        numbers.push(value)
    } else {
        alert('Add a valid number')
    }
    
    

    document.querySelector('input#number').value = ''
}

function addButtonFinish() {
    if (numbers.length > 0) {
        const res = document.querySelector('div#res')

        res.insertAdjacentHTML("afterend", "<input type='button' value='Finish' onclick='finish()'>")

        document.getElementById('add').removeEventListener('click', addButtonFinish)
    }
}

finish = () => {
    const res = document.querySelector('div#res')
    let cont = 0
    let maior = 0
    let menor = 101
    let media = 0
    

    for (let pos in numbers) {

        if (numbers[pos] < menor ) {
            menor = numbers[pos]
        } 
        if (numbers[pos] > maior) {
            maior = numbers[pos]
        }

        cont++
        media += numbers[pos]
    }

    media = media / cont

    if (isFinish === false) {
        res.insertAdjacentHTML('afterend', `
        <div id='total'>
            Maior: ${maior} <br> 
            Menor: ${menor} <br> 
            Cont: ${cont} <br> 
            Média: ${media} 
        </div>`)
    }

    isFinish = true
}
