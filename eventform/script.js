document.getElementById('type').addEventListener('change', (event) => {
    const element = document.getElementById('type')
    const studentDiv = document.getElementById('studentDiv')
    const guestDiv = document.getElementById('guestDiv')
    const submitBtn = document.getElementById('submit')
    studentDiv.style.display = 'none'
    guestDiv.style.display = 'none'
    submitBtn.disabled = true

    if (element.value == 'student') {
        studentDiv.style.display = 'grid'
        submitBtn.disabled = false
    } else if (element.value == 'guest') {
        guestDiv.style.display = 'grid'
        submitBtn.disabled = false
    }
})

const form = document.querySelector('form')
const message = document.getElementById('message')
form.addEventListener('submit', (event) => {
    message.innerHTML = ''
    event.preventDefault()
    if (futureCheck(form.date.value)){
        if (form.type.value=='student') {
            if (form.inum.value.length==9){
                renderTicket()
            } else {
                renderError('Your I-number must be 9 digits long.')
            }
        } else if (form.type.value=='guest'){
            if (form.access.value=='EVENT131'){
                renderTicket()
            } else {
                renderError('Your acces code is invalid :(')
            }
        }
    } else {
        renderError('You cannot reserve past dates!')
    }
})

function renderTicket(){
    message.innerHTML = `<h2>Ticket Created!</h2><p>${form.firstname.value} ${form.lastname.value}</p><p>${form.type.value}</p><p>${form.date.value}</p>`
}

function renderError(errmessage){
    message.innerHTML = `<p style='color:red;'>${errmessage}</p>`
}

function futureCheck(dateStr){
    const dateRaw = dateStr.split('-')
    const date = dateRaw.map(numRaw => parseInt(numRaw))
    const todayRaw = new Date().toLocaleDateString("en-CA").split('-')
    const today = todayRaw.map(numRaw => parseInt(numRaw))
    if (date[0]>today[0]){
        return true
    } else if (date[1]>today[1]){
        return true
    } else if (date[2]>today[2]){
        return true
    } else {
        return false
    }
}