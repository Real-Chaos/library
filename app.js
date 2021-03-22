// Making Book Form Visible --------------------------------------------------------------------------------------------------------------------------------------

const bookForm = document.querySelector('.bookForm');
const popupButton = document.querySelector('.bookBtn');
const close = document.querySelector('.closeBtn')

function makeBookFormVisible() {
    popupButton.addEventListener('click', ()=> {
        bookForm.style.display = 'flex';
    });
    
    close.addEventListener('click', ()=> {
        bookForm.style.display = 'none';
    })
}

makeBookFormVisible();