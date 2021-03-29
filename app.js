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
let closeForm = document.querySelector('.newNovelForm h4');

function Novel(title, author, pages, img, status, appendTo, novelHide, hideNovelSection) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection
}

Novel.prototype.createNovel = function() {
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
    novelImg.src = this.img;
    titleOfNovel.textContent = this.title;
    markFavorite.textContent = 'Mark Favorite';
    addToTop5.textContent = 'Add to Top 5';
    remove.textContent = 'Remove';
    this.appendTo.appendChild(novelItem);
    novelItem.appendChild(novelImg);
    novelItem.appendChild(titleOfNovel);
    novelItem.appendChild(markFavorite)
    novelItem.appendChild(addToTop5)
    novelItem.appendChild(remove)
}

Novel.prototype.isNovelHidden = false;

// let novelHide = document.querySelector('.hideNovel');
// let hideNovelSection = document.querySelector('.newNovel');
// let animeHide = document.querySelector('.hideAnime')
// let hideAnimeSection = document.querySelector('.newAnime')
let mangaHide = document.querySelector('.hideManga')
let hideMangaSection = document.querySelector('.newManga')
Novel.prototype.hideSection = function() {
    this.novelHide.addEventListener('click', ()=> {
        if(this.isNovelHidden === false) {
            this.appendTo.style.display = 'none';
            this.novelHide.textContent = 'Show'
            this.isNovelHidden = true;
        }

        else if(this.isNovelHidden === true) {
            this.appendTo.style.display = 'grid';
            this.novelHide.textContent = 'Hide';
            this.isNovelHidden = false;
        }
    })
}

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

displayNovelForm();

function addNovelToPage() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNovel = new Novel(novelTitle.value, novelAuthor.value, novelPages.value, novelImgSrc.value, novelStatus.values, novelElement[0], novelHide, hideNovelSection);
        myNovels.push(newNovel)
        novelForm.style.display = 'none';
        newNovel.createNovel();
        newNovel.hideSection()
    })
}

addNovelToPage()

// Add Anime -----------------------------------------------------------------------------------------------------------------------------------------------------


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
let animeClose = document.querySelector('.animeFormElement h4')

function Anime(title, author, pages, img, status, appendTo, novelHide, hideNovelSection) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection
}

Anime.prototype = Object.create(Novel.prototype);

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

displayAnimeForm();

function addAnimeToPage() {
    animeForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newAnime = new Anime(animeTitle.value, animeAuthor.value, animePages.value, animeImgSrc.value, animeStatus.values, novelElement[1], animeHide, hideAnimeSection);
        // myNovels.push(newNovel)
        animeFormElement.style.display = 'none';
        newAnime.createNovel();
        newAnime.hideSection();
    })
}

addAnimeToPage();

// Add Manga -----------------------------------------------------------------------------------------------------------------------------------------------------

let addManga = document.querySelector('.addManga');
let mangaFormElement = document.querySelector('.mangaFormElement');
let mangaForm = document.querySelector('.mangaForm')
let mangaTitle = document.querySelector('.mangaTitle');
let mangaAuthor = document.querySelector('.mangaAuthor');
let mangaPages = document.querySelector('.mangaPages');
let mangaImgSrc = document.querySelector('.mangaImg');
let mangaStatus = document.querySelector('.mangaStatus');
let mangaClose = document.querySelector('.mangaFormElement h4')


function Manga(title, author, pages, img, status, appendTo, novelHide, hideNovelSection) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection
}
Manga.prototype = Object.create(Novel.prototype);


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

displayMangaForm();

function addMangaToPage() {
    mangaForm.addEventListener('submit', (event) => {
        event.preventDefault()
        let newManga = new Manga(mangaTitle.value, mangaAuthor.value, mangaPages.value, mangaImgSrc.value, mangaStatus.values, novelElement[2], mangaHide, hideMangaSection);
        // myNovels.push(newNovel)
        mangaFormElement.style.display = 'none';
        newManga.createNovel();
        newManga.hideSection()
    })
}

addMangaToPage();


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
// displayForm();
changeProfile();
changeCoverImage();
storage();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------