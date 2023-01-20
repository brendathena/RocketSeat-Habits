const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)

function add() {
    const today = "01/01"

    const dayExists = nlwSetup.dayExists(today)

    alert(dayExists)

    nlwSetup.addDay("01/01")
}