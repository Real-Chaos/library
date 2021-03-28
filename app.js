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
let myNovels = [];

let addNovel = document.querySelector('.addNovel');
let novelForm = document.querySelector('.newNovelForm');
let novelElement = document.querySelector('.newNovel');


let form = document.querySelector('.form');
let novelTitle = document.querySelector('.novelTitle');
let novelAuthor = document.querySelector('.novelAuthor');
let novelPages = document.querySelector('.novelPages');
let novelImgSrc = document.querySelector('.novelImg');
let novelStatus = document.querySelector('.novelStatus');
let closeForm = document.querySelector('.newNovelForm h4');

function Novel(title, author, pages, img, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.img = img,
    this.status = status
}

function displayForm() {
    addNovel.addEventListener('click', ()=> {
        novelForm.style.display = 'block';
        form.reset()
    });
    closeForm.addEventListener('click', ()=> {
        novelForm.style.display = 'none';
        form.reset()
    })
}

displayForm();

function addNovelToPage() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNovel = new Novel(novelTitle.value, novelAuthor.value, novelPages.value, novelImgSrc.value, novelStatus.values);
        myNovels.push(newNovel)
        novelForm.style.display = 'none';
        createNovelOnPage();
    })
}

addNovelToPage();

function createNovelOnPage() {
    let novelItem = document.createElement('div');
    let novelImg = document.createElement('img');
    let titleOfNovel = document.createElement('h1');
    let markFavorite = document.createElement('button');
    let addToTop5 = document.createElement('button');
    let remove = document.createElement('button');
    novelItem.classList.add('novelSectionItem');
    titleOfNovel.classList.add('title');
    markFavorite.classList.add('addToFavorite');
    addToTop5.classList.add('top5');
    remove.classList.add('remove');
    novelImg.src = novelImgSrc.value;
    titleOfNovel.textContent = novelTitle.value;
    markFavorite.textContent = 'Mark Favorite';
    addToTop5.textContent = 'Add to Top 5';
    remove.textContent = 'Remove';
    novelElement.appendChild(novelItem);
    novelItem.appendChild(novelImg);
    novelItem.appendChild(titleOfNovel);
    novelItem.appendChild(markFavorite)
    novelItem.appendChild(addToTop5)
    novelItem.appendChild(remove)
}

let hideItems = document.querySelector('.hideNovel');

function hide() {
    hideItems.addEventListener('click', ()=> {
        novelElement.style.display = 'none';
    })
}

hide();

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