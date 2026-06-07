document.getElementById('type').addEventListener('change', (event) => {
    const element = document.getElementById('type')
    const studentDiv = document.getElementById('studentDiv')
    const guestDiv = document.getElementById('guestDiv')
    studentDiv.style.display = 'none';
    guestDiv.style.display = 'none';

    if (element.value == 'student') {
        studentDiv.style.display = 'grid';
    } else if (element.value == 'guest') {
        guestDiv.style.display = 'grid';
    }
})

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()
})