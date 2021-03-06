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

// let favorite = document.querySelector('.addToFavorite');

function addNovelToPage() {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let newNovel = new Novel(novelTitle.value, novelAuthor.value, novelPages.value, novelImgSrc.value, novelStatus.value, novelElement[0], novelHide, hideNovelSection, novelRating.value, 'Novel');
        myNovels.push(newNovel)
        novelForm.style.display = 'none';
        myNovels.forEach(novel => {
            myNovels.pop()
            newNovel.createNovel();
            newNovel.hideSection();
            newNovel.stars();
            // newNovel.mostLovedNovel();
            recentlyAddedArray.push(newNovel.recently())
            if(recentlyAddedArray.length > 5) {
            recentlyAddedArray.shift().style.display = 'none';
            
            }
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
        let newAnime = new Anime(animeTitle.value, animeAuthor.value, animePages.value, animeImgSrc.value, animeStatus.value, novelElement[1], animeHide, hideAnimeSection, animeRating.value, 'Anime');
        myAnime.push(newAnime)
        animeFormElement.style.display = 'none';
        myAnime.forEach(anime => {
            myAnime.pop()
            newAnime.createNovel();
            newAnime.hideSection();
            // newAnime.mostLovedAnime();
            recentlyAddedArray.push(newAnime.recently())
            if(recentlyAddedArray.length > 5) {
            recentlyAddedArray.shift().style.display = 'none';
            
            }
        })
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
        let newManga = new Manga(mangaTitle.value, mangaAuthor.value, mangaPages.value, mangaImgSrc.value, mangaStatus.value, novelElement[2], mangaHide, hideMangaSection, mangaRating.value, 'Manga');
        myManga.push(newManga)
        mangaFormElement.style.display = 'none'
        myManga.forEach(manga => {
            myManga.pop()
            newManga.createNovel();
            newManga.hideSection();
            
            recentlyAddedArray.push(newManga.recently())
            if(recentlyAddedArray.length > 5) {
            recentlyAddedArray.shift().style.display = 'none';
            
            }
        })
    })

    mangaRating.addEventListener('input', ()=> {
        let ratingValue = document.querySelector('.mangaRatingValue');
        ratingValue.textContent = `${mangaRating.value} out of 5`;
    })
}

// Add To Favorite--------------------------------------------------------------------------------------------------------------------------------------------------

let favImg = document.querySelector('.favorite')

// Library Log--------------------------------------------------------------------------------------------------------------------------------------------------

// let libraryTab = {
//     tab1: document.querySelector('.libraryTabs p:nth-child(1)'),
//     tab2: document.querySelector('.libraryTabs p:nth-child(2)'),
//     tab3: document.querySelector('.libraryTabs p:nth-child(3)')
// }

// let hideCompletedHidden = false;
// let hideCompleted = document.querySelector('.libraryGroup');


function libraryTabs() {
    libraryTab.tab1.addEventListener('click', ()=> {
        libraryTab.tab1.style.background = '#913fe2';
        libraryTab.tab2.style.background = 'none';
        libraryTab.tab3.style.background = 'none';
    });

    libraryTab.tab2.addEventListener('click', ()=> {
        libraryTab.tab2.style.background = '#913fe2';
        libraryTab.tab1.style.background = 'none';
        libraryTab.tab3.style.background = 'none';
        
    });

    libraryTab.tab3.addEventListener('click', ()=> {
        libraryTab.tab3.style.background = '#913fe2';
        libraryTab.tab1.style.background = 'none';
        libraryTab.tab2.style.background = 'none';
    });

    
}

// libraryTabs()

function showingCorrectInfo() {
    libraryTab.tab1.addEventListener('click', ()=> {
        for(let i=0; i<completed.length; i++) {
            completed[i].style.display = 'block';
        }

        for(let i=0; i<onGoing.length; i++) {
            onGoing[i].style.display = 'none';
        }

        for(let i=0; i<loved.length; i++) {
            loved[i].style.display = 'none';
        }
    })

    libraryTab.tab2.addEventListener('click', ()=> {
        for(let i=0; i<completed.length; i++) {
            completed[i].style.display = 'none';
        }
        for(let i=0; i<onGoing.length; i++) {
            onGoing[i].style.display = 'block';
        }
        for(let i=0; i<loved.length; i++) {
            loved[i].style.display = 'none';
        }
    })

    libraryTab.tab3.addEventListener('click', ()=> {
        for(let i=0; i<completed.length; i++) {
            completed[i].style.display = 'none';
        }
        for(let i=0; i<onGoing.length; i++) {
            onGoing[i].style.display = 'none';
        }
        for(let i=0; i<loved.length; i++) {
            loved[i].style.display = 'block';
        }
    })
}

// showingCorrectInfo()

// Most Loved -----------------------------------------------------------------------------------------------------------------------------------------------------

let top5Tabs = {
    1: document.querySelector('.tabs ul li:nth-child(1)'),
    2: document.querySelector('.tabs ul li:nth-child(2)'),
    3: document.querySelector('.tabs ul li:nth-child(3)'),
}

function top5Background() {
    top5Tabs[1].addEventListener('click', ()=> {
        top5Tabs[1].style.background = '#913fe2';
        top5Tabs[2].style.background = 'none';
        top5Tabs[3].style.background = 'none';
    });

    top5Tabs[2].addEventListener('click', ()=> {
        top5Tabs[2].style.background = '#913fe2';
        top5Tabs[1].style.background = 'none';
        top5Tabs[3].style.background = 'none';
        
    });

    top5Tabs[3].addEventListener('click', ()=> {
        top5Tabs[3].style.background = '#913fe2';
        top5Tabs[1].style.background = 'none';
        top5Tabs[2].style.background = 'none';
    });
}

top5Background();

function top5Info() {

    top5Tabs[1].addEventListener('click', ()=> {
        for(let i=0; i< novelTopList.length; i++) {
            novelTopList[i].style.display = 'flex';
        }
        for(let i=0; i< animeTopList.length; i++) {
            animeTopList[i].style.display = 'none';
        }
        for(let i=0; i< mangaTopList.length; i++) {
            mangaTopList[i].style.display = 'none';
        }
    })

    top5Tabs[2].addEventListener('click', ()=> {
        for(let i=0; i< novelTopList.length; i++) {
            novelTopList[i].style.display = 'none';
        }
        for(let i=0; i< animeTopList.length; i++) {
            animeTopList[i].style.display = 'flex';
        }
        for(let i=0; i< mangaTopList.length; i++) {
            mangaTopList[i].style.display = 'none';
        }
    })

    top5Tabs[3].addEventListener('click', ()=> {
        for(let i=0; i< novelTopList.length; i++) {
            novelTopList[i].style.display = 'none';
        }
        for(let i=0; i< animeTopList.length; i++) {
            animeTopList[i].style.display = 'none';
        }
        for(let i=0; i< mangaTopList.length; i++) {
            mangaTopList[i].style.display = 'flex';
        }
    })
}

top5Info()

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
let myAnime = [];
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
let myManga = []
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

// Library Log Variales-----------------------------------------------------------------------------------------------------------------------------------------------

let libraryTab = {
    tab1: document.querySelector('.libraryTabs p:nth-child(1)'),
    tab2: document.querySelector('.libraryTabs p:nth-child(2)'),
    tab3: document.querySelector('.libraryTabs p:nth-child(3)')
}

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

libraryTabs();
showingCorrectInfo()

storage();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// recentlyAdded()