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

// Add Novel -----------------------------------------------------------------------------------------------------------------------------------------------------
let addNovel = document.querySelector('.addNovel');
let novelForm = document.querySelector('.newNovelForm');
let closeForm = document.querySelector('.newNovelForm h4');
let formSubmition = document.querySelector('.submit')
let myNovels = [];
let novelTitle = document.querySelector('.novelTitle');

function Novel(title, pages, status, author, summary, link, img) {
    this.title = title,
    this.pages = pages,
    this.status = status,
    this.author = author,
    this.favorite = false,
    this.top5 = false,
    this.summary = summary,
    this.link = link,
    this.img = img
}

function displayForm() {
    addNovel.addEventListener('click', ()=> {
        novelForm.style.display = 'block';
    });
    closeForm.addEventListener('click', ()=> {
        novelForm.style.display = 'none';
    })
}

displayForm();

function addNovelToPage() {
    formSubmition.addEventListener('click', ()=> {
        console.log('hi')
    })
    
}

addNovelToPage();

// Back to top -----------------------------------------------------------------------------------------------------------------------------------------------------

function backToTop() {
    if(document.documentElement.scrollTop >= 20) {
        button.style.display = 'flex';
    }

    else {
        button.style.display = 'none';
    }
}

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


const button = document.querySelector('.backToTop');
window.onscroll = () => backToTop();


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