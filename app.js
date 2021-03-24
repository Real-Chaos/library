// LightMode -------------------------------------------------------------------------------------------------------------------------------------------------------

function theme() {

    themeSlider.addEventListener('click', ()=> {
        if(lightMode === false) {
            lightMode = true;
            document.body.style.background = 'white';
            themeChanger.classList.remove('fa-sun');
            themeChanger.classList.add('fa-moon');
            themeSlider.style.justifyContent = 'flex-start';
            document.body.style.color = 'black';
        }
        
        else {
            lightMode = false;
            document.body.style.background = '#16151d';
            document.body.style.color = 'white';
            themeChanger.classList.remove('fa-moon');
            themeChanger.classList.add('fa-sun');
            themeSlider.style.justifyContent = 'flex-end';
            // themeChanger.style.color = 'black';
        }
    })
}


// Mobile Navigation ------------------------------------------------------------------------------------------------------------------------------------------------


function mobileMenu() {
    mobileNavbar.addEventListener('click', ()=> {
        if(mobileNav === false) {
            mobileNav = true;
            desktopMenu.style.display = 'inline-block';
        }

        else if(mobileNav === true){
            mobileNav = false;
            desktopMenu.style.display = 'none';
        }
    })
}


// Profile Image ---------------------------------------------------------------------------------------------------------------------------------------------------

function changeProfile() {
    profile.addEventListener('click', ()=> {
        if(profileFormDisplayed === false) {
            profileChange.style.display = 'grid';
            profileFormDisplayed = true;
        }
        
        else {
            profileChange.style.display = 'none';
            profileFormDisplayed = false;
        }
    });
}

// Cover Image -----------------------------------------------------------------------------------------------------------------------------------------------------

function displayForm() {
    coverImg.addEventListener('click', ()=> {
        imageForm.style.display = 'grid';
        coverImg.style.display = 'none';
        newCoverURL.value = '';
    });

    closeImgForm.addEventListener('click', ()=> {
        imageForm.style.display = 'none';
        coverImg.style.display = 'block';
        newCoverURL.value = '';
    });
    
} 

function changeCoverImage() {
    coverButton.addEventListener('click', ()=> {
        coverImg.src = newCoverURL.value;
        imageForm.style.display = 'none';
        coverImg.style.display = 'block';
        localStorage.setItem('cover', `${newCoverURL.value}`);
    });
}

// Back to top -----------------------------------------------------------------------------------------------------------------------------------------------------


// Local Storage -----------------------------------------------------------------------------------------------------------------------------------------------------

function storage() {
    if(localStorage.cover) {
        coverImg.src = localStorage.getItem('cover');
    }
    else {
        coverImg.src = 'images/libraryCover.jpeg';
    }
}


// --------------------------------------------------------------------------------------------------------------------------------------------------------------------

let lightMode = false;
const themeSlider = document.querySelector('.theme');
const themeChanger = document.querySelector('.lightMode');


let mobileNav = false;
const desktopMenu = document.querySelector('nav');
const mobileNavbar = document.querySelector('.hamburgerMenu');
const mobileNavMediaQuery = window.matchMedia('(max-width: 500px)');


const profile = document.querySelector('.profileImg');
const profileChange = document.querySelector('.changeProfile');
let profileFormDisplayed = false;


const imageForm = document.querySelector('.changeImageForm');
const newCoverURL = document.querySelector('.newImage');
const coverImg = document.querySelector('.coverImg');
const closeImgForm = document.querySelector('.closeBtn');
const coverButton = document.querySelector('.changeCoverBtn');


theme();
mobileMenu();
displayForm();
changeProfile();
changeCoverImage();
storage();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------