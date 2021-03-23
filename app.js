// LightMode -------------------------------------------------------------------------------------------------------------------------------------------------------

let lightMode = false;
const themeChanger = document.querySelector('.lightMode');

function theme() {

    themeChanger.addEventListener('click', ()=> {
        if(lightMode === false) {
            lightMode = true;
            document.body.style.background = 'white';
            themeChanger.classList.remove('fa-sun');
            themeChanger.classList.add('fa-moon');
            themeChanger.style.background = 'black';
            themeChanger.style.color = 'white';
        }
        
        else {
            lightMode = false;
            document.body.style.background = '#16151d';
            themeChanger.classList.remove('fa-moon');
            themeChanger.classList.add('fa-sun');
            themeChanger.style.background = 'white';
            themeChanger.style.color = 'black';
        }
    })
}

theme();
