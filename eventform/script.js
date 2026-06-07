document.getElementById('type').addEventListener('change', (event) => {
    const element = document.getElementById('type')
    const studentDiv = document.getElementById('studentDiv')
    const guestDiv = document.getElementById('guestDiv')
    studentDiv.style.display = 'none';
    guestDiv.style.display = 'none';

    if (value == 'student') {
        studentDiv.style.display = 'block';
    } else if (value == 'guest') {
        guestDiv.style.display = 'block';
    }
})