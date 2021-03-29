// LightMode -------------------------------------------------------------------------------------------------------------------------------------------------------

function theme() {

    themeSlider.addEventListener('click', ()=> {
        if(lightMode === false) {
            lightMode = true;
            document.body.style.background = 'white';
            themeChanger.classList.remove('fa-sun');
            themeChanger.classList.add('fa-moon');
            themeSlider.style.justifyContent = 'flex-start';
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
    profileChangeForm.addEventListener('submit', event => {
        event.preventDefault();
        profile.src = profileImgSrc.value;
        profileChange.style.display = 'none';
        profileChangeForm.reset()
    })
}


function displayProfileForm() {
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

function displayCoverForm() {
    coverImg.addEventListener('click', ()=> {
        imageForm.style.display = 'grid';
        coverImg.style.display = 'none';
        coverForm.reset()
    });

    closeImgForm.addEventListener('click', ()=> {
        imageForm.style.display = 'none';
        coverForm.reset()
        coverImg.style.display = 'block';
    });
    
} 

function changeCoverImage() {
    coverForm.addEventListener('submit', event => {
        event.preventDefault();
        coverImg.src = newCoverURL.value;
        imageForm.style.display = 'none';
        coverImg.style.display = 'block';
        profileChangeForm.reset();
        localStorage.setItem('cover', newCoverURL.value)
    })
}

// Add Novel -----------------------------------------------------------------------------------------------------------------------------------------------------

function displayNovelForm() {
    addNovel.addEventListener('click', ()=> {
        novelForm.style.display = 'block';
        form.reset()
    })
    closeForm.addEventListener('click', ()=> {
        novelForm.style.display = 'none';
        form.reset()
    })
}

function addNovelToPage() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNovel = new Novel(novelTitle.value, novelAuthor.value, novelPages.value, novelImgSrc.value, novelStatus.value, novelElement[0], novelHide, hideNovelSection, novelRating.value);
        myNovels.push(newNovel)
        novelForm.style.display = 'none';
        myNovels.forEach(novel => {
            myNovels.pop()
            newNovel.createNovel();
            newNovel.hideSection()
        })
    })
    novelRating.addEventListener('input', ()=> {
        let ratingValue = document.querySelector('.ratingValue');
        ratingValue.textContent = `${novelRating.value} out of 5`;
    })
}


// Add Anime -----------------------------------------------------------------------------------------------------------------------------------------------------

function displayAnimeForm() {
    addAnime.addEventListener('click', ()=> {
        animeFormElement.style.display = 'block';
        animeForm.reset()
    })
    animeClose.addEventListener('click', ()=> {
        animeFormElement.style.display = 'none';
        animeForm.reset()
    })
}

function addAnimeToPage() {
    animeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newAnime = new Anime(animeTitle.value, animeAuthor.value, animePages.value, animeImgSrc.value, animeStatus.value, novelElement[1], animeHide, hideAnimeSection, animeRating.value);
        // myNovels.push(newNovel)
        animeFormElement.style.display = 'none';
        newAnime.createNovel();
        newAnime.hideSection();
    })
    animeRating.addEventListener('input', ()=> {
        let ratingValue = document.querySelector('.animeRatingValue');
        ratingValue.textContent = `${animeRating.value} out of 5`;
    })
}

// Add Manga -----------------------------------------------------------------------------------------------------------------------------------------------------

function displayMangaForm() {
    addManga.addEventListener('click', ()=> {
        mangaFormElement.style.display = 'block';
        mangaForm.reset()
    })
    mangaClose.addEventListener('click', ()=> {
        mangaFormElement.style.display = 'none';
        mangaForm.reset()
    })
}

function addMangaToPage() {
    mangaForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newManga = new Manga(mangaTitle.value, mangaAuthor.value, mangaPages.value, mangaImgSrc.value, mangaStatus.value, novelElement[2], mangaHide, hideMangaSection, mangaRating.value);
        // myNovels.push(newNovel)
        mangaFormElement.style.display = 'none';
        newManga.createNovel();
        newManga.hideSection()
    })

    mangaRating.addEventListener('input', ()=> {
        let ratingValue = document.querySelector('.mangaRatingValue');
        ratingValue.textContent = `${mangaRating.value} out of 5`;
    })
}

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



// LightMode Variables-------------------------------------------------------------------------------------------------------------------------------------------------

let lightMode = false;
const themeSlider = document.querySelector('.theme');
const themeChanger = document.querySelector('.lightMode');

// Nav Variables------------------------------------------------------------------------------------------------------------------------------------------------------

let mobileNav = false;
const desktopMenu = document.querySelector('nav');
const mobileNavbar = document.querySelector('.hamburgerMenu');
const mobileNavMediaQuery = window.matchMedia('(max-width: 500px)');

// Profile Variables--------------------------------------------------------------------------------------------------------------------------------------------------

const profile = document.querySelector('.profileImg');
const profileChange = document.querySelector('.changeProfile');
const profileChangeForm = document.querySelector('.profileChange');
let profileImgSrc = document.querySelector('.profileImgSrc')
let profileFormDisplayed = false;

// Back to Top Btn Variables------------------------------------------------------------------------------------------------------------------------------------------

const button = document.querySelector('.backToTop');
window.onscroll = () => backToTop();

// Cover Img Change Variables------------------------------------------------------------------------------------------------------------------------------------------

const imageForm = document.querySelector('.changeImageForm');
const coverForm = document.querySelector('.changeCoverForm')
const newCoverURL = document.querySelector('.newImage');
const coverImg = document.querySelector('.coverImg');
const closeImgForm = document.querySelector('.closeBtn');

// Add Novel Variables-----------------------------------------------------------------------------------------------------------------------------------------------

let myNovels = [];
let novelElement = Array.from(document.querySelectorAll('.newNovel'));
let novelHide = document.querySelector('.hideNovel');
let hideNovelSection = document.querySelector('.newNovel');

let addNovel = document.querySelector('.addNovel');
let novelForm = document.querySelector('.newNovelForm');
let form = document.querySelector('.form');
let novelTitle = document.querySelector('.novelTitle');
let novelAuthor = document.querySelector('.novelAuthor');
let novelPages = document.querySelector('.novelPages');
let novelImgSrc = document.querySelector('.novelImg');
let novelStatus = document.querySelector('.novelStatus');
let novelRating = document.querySelector('.novelRating');
let closeForm = document.querySelector('.newNovelForm h4');

// Add Anime Variables-------------------------------------------------------------------------------------------------------------------------------------------------

let animeHide = document.querySelector('.hideAnime')
let hideAnimeSection = document.querySelector('.newAnime')

let addAnime = document.querySelector('.addAnime');
let animeFormElement = document.querySelector('.animeFormElement');
let animeForm = document.querySelector('.animeForm')
let animeTitle = document.querySelector('.animeTitle');
let animeAuthor = document.querySelector('.animeAuthor');
let animePages = document.querySelector('.animePages');
let animeImgSrc = document.querySelector('.animeImg');
let animeStatus = document.querySelector('.animeStatus');
let animeRating = document.querySelector('.animeRating');
let animeClose = document.querySelector('.animeFormElement h4');

// Add Manga Variables-------------------------------------------------------------------------------------------------------------------------------------------------

let mangaHide = document.querySelector('.hideManga')
let hideMangaSection = document.querySelector('.newManga')

let addManga = document.querySelector('.addManga');
let mangaFormElement = document.querySelector('.mangaFormElement');
let mangaForm = document.querySelector('.mangaForm')
let mangaTitle = document.querySelector('.mangaTitle');
let mangaAuthor = document.querySelector('.mangaAuthor');
let mangaPages = document.querySelector('.mangaPages');
let mangaImgSrc = document.querySelector('.mangaImg');
let mangaStatus = document.querySelector('.mangaStatus');
let mangaRating = document.querySelector('.mangaRating');
let mangaClose = document.querySelector('.mangaFormElement h4')

// Calling Functions --------------------------------------------------------------------------------------------------------------------------------------------------

theme();

mobileMenu();

displayProfileForm();
changeProfile();

displayCoverForm();
changeCoverImage();

displayNovelForm();
addNovelToPage();

displayAnimeForm();
addAnimeToPage();

displayMangaForm();
addMangaToPage();

storage();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------