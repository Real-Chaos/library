// ------------ Declaring Variables --------------------- //

const dialog = document.querySelector('dialog')
const addBookBtn = document.querySelector('.add-book')



// ---------------------- Handing Modal --------------------

addBookBtn.addEventListener('click', () => {
  dialog.showModal()
})

window.addEventListener('click', (e) => {
  if(e.target === dialog) {
    dialog.close()
  }
})

