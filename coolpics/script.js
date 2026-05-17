const gallery = document.querySelector('#wrapper');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
    modalImage.src = e.srcElement.currentSrc
    modal.show()
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        modal.close();
    }
});

function toggleMenu(){
    document.querySelector('nav').classList.toggle('hidden')
}