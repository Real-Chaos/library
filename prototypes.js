// Novel Prototypes -------------------------------------------------------------------------------------------------------------------------------------------
let completed = [];
let onGoing = [];
let loved = [];
let novelTopList = [];
let animeTopList = [];
let mangaTopList = [];

function Novel(title, author, pages, img, status, appendTo, novelHide, hideNovelSection, novelRating, typeP) {
    this.title = title,
    this.author = `Author: ${author}`,
    this.pages = `Pages: ${pages}`,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection,
    this.novelRating = novelRating,
    this.typeP = typeP
}

Novel.prototype.createNovel = function() {
    let novelItem = document.createElement('div');
    novelItem.classList.add('novelSectionItem');
    this.appendTo.appendChild(novelItem);
    
    let novelImg = document.createElement('img');
    novelImg.src = this.img;
    novelItem.appendChild(novelImg);

    let titleOfNovel = document.createElement('h1');
    titleOfNovel.classList.add('title');
    titleOfNovel.textContent = this.title;
    novelItem.appendChild(titleOfNovel);
    
    let infoUl = document.createElement('ul');
    novelItem.appendChild(infoUl);

    let infoLiAuthor = document.createElement('li');
    infoLiAuthor.textContent = `${this.author}`
    infoUl.appendChild(infoLiAuthor);

    let infoLiPages = document.createElement('li');
    infoLiPages.textContent = `${this.pages}`
    infoUl.appendChild(infoLiPages);

    let infoLiStatus = document.createElement('li');
    infoLiStatus.textContent = `Status: ${this.status}`
    infoUl.appendChild(infoLiStatus);

    let starPlacing = document.createElement('div');
    starPlacing.classList.add('starPlacing');
    novelItem.appendChild(starPlacing);

    starPlacing.appendChild(this.stars())


    let markFavorite = document.createElement('button');
    markFavorite.classList.add('addToFavorite');
    markFavorite.textContent = 'Mark Favorite';
    novelItem.appendChild(markFavorite);
    
    // let addToTop5 = document.createElement('button');
    // addToTop5.classList.add('top5');
    // addToTop5.textContent = 'Add to Loved'
    // let favArray = ['Add To Top 5', 1, 2, 3, 4, 5];
    // for(let i=0; i<favArray.length; i++) {
    //     let options = document.createElement('option');
    //     options.value = favArray[i];
    //     options.textContent = favArray[i];
    //     addToTop5.appendChild(options)
    // }

    // novelItem.appendChild(addToTop5)

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    novelItem.appendChild(remove);


    markFavorite.addEventListener('click', ()=> {
        favImg.style.background = `url(${this.img}) no-repeat center center`
    })

    
        
    if(this.status === 'Read') {
        completed.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));

    for(let i=0; i<completed.length; i++) {
        let libraryLogNovel = document.querySelector('.libraryLogNovel');
        libraryLogNovel.appendChild(completed[i]);
        // completed[i].style.display = 'none';

    }
    }

    if(this.status === 'Not Read') {
        onGoing.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));

    for(let i=0; i<onGoing.length; i++) {
        let libraryLogNovel = document.querySelector('.libraryLogNovel');
        libraryLogNovel.appendChild(onGoing[i]);
        onGoing[i].style.display = 'none';
    }
    }
    // myNovels.push(novelItem)

    remove.addEventListener('click', ()=> {
        novelItem.style.display = 'none';
    })

//     if(this.typeP === 'Novel') {
    
//     let includes = false;
//     love = false;
//     addToTop5.addEventListener('click', ()=> {
//         // love = false;
//         if(includes === false) {
//             if(novelTopList.length < 5) {
//                 novelTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
//                 includes = true;
//             }
//         }
//         for(let i=0; i< novelTopList.length; i++) {
//             let favNovelList = document.querySelector('.favNovelList');
//             favNovelList.appendChild(novelTopList[i]);
//         }
//         if(love === false) {
//             loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//             love = true;
//         }

//         for(let i=0; i<loved.length; i++) {
//             let libraryLogNovel = document.querySelector('.libraryLogNovel');
//             libraryLogNovel.appendChild(loved[i]);
//             loved[i].style.display = 'none';
//         }
//     })
// }

// else if(this.typeP === 'Anime'){
    
//     let includes = false;
//     // love = false;
//     addToTop5.addEventListener('click', ()=> {
//         love = false;
//         if(includes === false) {
//             if(animeTopList.length < 5) {
//                 novelTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
//                 includes = true;
//             }
//         }
//         for(let i=0; i< animeTopList.length; i++) {
//             let favNovelList = document.querySelector('.favNovelList');
//             favNovelList.appendChild(animeTopList[i]);
//         }
//         if(love === false) {
//             loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//             love = true;
//         }

//         for(let i=0; i<loved.length; i++) {
//             let libraryLogNovel = document.querySelector('.libraryLogNovel');
//             libraryLogNovel.appendChild(loved[i]);
//             loved[i].style.display = 'none';
//         }
//     })

// }

// else if(this.typeP === 'Manga'){
    
//     let includes = false;
//     // love = false;
//     addToTop5.addEventListener('click', ()=> {
//         love = false;
//         if(includes === false) {
//             if(mangaTopList.length < 5) {
//                 novelTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
//                 includes = true;
//             }
//         }
//         for(let i=0; i< mangaTopList.length; i++) {
//             let favNovelList = document.querySelector('.favNovelList');
//             favNovelList.appendChild(mangaTopList[i]);
//         }
//         if(love === false) {
//             loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//             love = true;
//         }

//         for(let i=0; i<loved.length; i++) {
//             let libraryLogNovel = document.querySelector('.libraryLogNovel');
//             libraryLogNovel.appendChild(loved[i]);
//             loved[i].style.display = 'none';
//         }
//     })

// }

    // return novelItem;

    // for(let i=0; i<novelTopList.length; i++) {
    //     let libraryLogNovel = document.querySelector('.libraryLogNovel');
    //     loved.push(novelTopList[i])
    //     libraryLogNovel.appendChild(novelTopList[i]);
    //     novelTopList[i].style.display = 'none';
    // }

    // for(let i=0; i < novelTopList.length; i++) {
    //     loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
        
    // }

    // for(let i=0; i<loved.length; i++) {
    //     let libraryLogNovel = document.querySelector('.libraryLogNovel');
    //     libraryLogNovel.appendChild(loved[i]);
        
    // }

    // this.mostLovedNovel();
if(this.typeP === 'Novel') {
    if(this.novelRating === '5') {
        if(novelTopList.length < 5) {
            novelTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
            for(let i=0; i< novelTopList.length; i++) {
                let favNovelList = document.querySelector('.favNovelList');
                favNovelList.appendChild(novelTopList[i]);
            }
        }
        loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
            
        for(let i=0; i<loved.length; i++) {
            let libraryLogNovel = document.querySelector('.libraryLogNovel');
            libraryLogNovel.appendChild(loved[i]);
            loved[i].style.display = 'none';
        }
    }
}
if(this.typeP === 'Anime') {
    if(this.novelRating === '5') {
        if(animeTopList.length < 5) {
            animeTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
            for(let i=0; i< animeTopList.length; i++) {
                let favNovelList = document.querySelector('.favNovelList');
                favNovelList.appendChild(animeTopList[i]);
            }
        }
        loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
            
        for(let i=0; i<loved.length; i++) {
            let libraryLogNovel = document.querySelector('.libraryLogNovel');
            libraryLogNovel.appendChild(loved[i]);
            loved[i].style.display = 'none';
        }
    }
}

if(this.typeP === 'Manga') {
    if(this.novelRating === '5') {
        if(mangaTopList.length < 5) {
            mangaTopList.push(top5(this.img, this.title, this.author, this.pages, this.status, this.stars()));
            for(let i=0; i< mangaTopList.length; i++) {
                let favNovelList = document.querySelector('.favNovelList');
                favNovelList.appendChild(mangaTopList[i]);
            }
        }
        loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
            
        for(let i=0; i<loved.length; i++) {
            let libraryLogNovel = document.querySelector('.libraryLogNovel');
            libraryLogNovel.appendChild(loved[i]);
            loved[i].style.display = 'none';
        }
    }
}


}


Novel.prototype.isNovelHidden = false;

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

let recentlyAddedArray = [];
Novel.prototype.recently = function() {
    
    let recentlyAddedList = document.querySelector('.recentlyAddedList');
        let recentlyAddedGroup = document.createElement('div');
        recentlyAddedGroup.classList.add('recentlyAddedGroup');
     
        let recentlyAddedImg = document.createElement('img');
        recentlyAddedImg.src = this.img;
      
        let novelTitle = document.createElement('h1');
        novelTitle.textContent = this.title;
        novelTitle.classList.add('h1')

        let novelLength = document.createElement('p');
        novelLength.classList.add('length')
        novelLength.textContent = `${this.pages}`

        let typeOfAdd = document.createElement('div');
        typeOfAdd.classList.add('type');

        let recentlyAddedType = document.createElement('p');
        recentlyAddedType.textContent = this.typeP;
        
        recentlyAddedList.appendChild(recentlyAddedGroup);
        recentlyAddedGroup.appendChild(recentlyAddedImg);
        recentlyAddedGroup.appendChild(novelTitle);
        recentlyAddedGroup.appendChild(novelLength);
        recentlyAddedGroup.appendChild(this.stars())
        recentlyAddedGroup.appendChild(typeOfAdd);
        typeOfAdd.appendChild(recentlyAddedType);
        
        return recentlyAddedGroup
}

Novel.prototype.stars = function() {

    let stars = document.createElement('div');
    stars.classList.add('stars');

    if(this.novelRating >= 1) {
        for(let i=0; i < this.novelRating; i++) {
            let starElement = document.createElement('span');
            starElement.classList.add('checked');
            starElement.classList.add('fa');
            starElement.classList.add('fa-star');
            stars.appendChild(starElement);
        }
    }

    for(let i=0; i < 5 - this.novelRating; i++) {
        let starElement = document.createElement('span');
        starElement.classList.add('fa');
        starElement.classList.add('fa-star');
        stars.appendChild(starElement);
    }
    return stars
}

// Novel.prototype.mostLovedNovel = function() {
//     if(this.typeP === 'Novel') {
    
//         let includes = false;
//         love = false;
//         let addToTop5 = document.querySelector('.top5')
//         addToTop5.addEventListener('click', ()=> {
//             if(includes === false) {
//                 if(novelTopList.length < 5) {
//                     novelTopList.push(top5(this.img, this.favorite));
//                     includes = true;
//                 }
//             }
//             for(let i=0; i< novelTopList.length; i++) {
//                 let favNovelList = document.querySelector('.favNovelList');
//                 favNovelList.appendChild(novelTopList[i]);
//             }
//             if(love === false) {
//                 loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//                 love = true;
//             }
    
//             for(let i=0; i<loved.length; i++) {
//                 let libraryLogNovel = document.querySelector('.libraryLogNovel');
//                 libraryLogNovel.appendChild(loved[i]);
//                 loved[i].style.display = 'none';
//             }
//         })
//     }
// }

// Anime Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

function Anime(title, author, pages, img, status, appendTo, novelHide, hideNovelSection, novelRating, typeP) {
    this.title = title,
    this.author = `Creator: ${author}`,
    this.pages = `Episodes: ${pages}`,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection,
    this.novelRating = novelRating,
    this.typeP = typeP
}

Anime.prototype = Object.create(Novel.prototype);

// Anime.prototype.mostLovedAnime = function() {
//     // let includes = false;
//     love = false;
//     addToTop5 = document.querySelector('.top5')
//     addToTop5.addEventListener('click', ()=> {
//         let includes = false;
//         if(includes === false) {
//             if(animeTopList.length < 5) {
//                 animeTopList.push(top5(this.img, this.favorite));
//                 includes = true;
//             }
//         }
//         for(let i=0; i< animeTopList.length; i++) {
//             let favNovelList = document.querySelector('.favNovelList');
//             favNovelList.appendChild(animeTopList[i]);
//             animeTopList[i].style.display = 'none';
//         }
//     })
//     if(love === false) {
//         loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//         love = true;
//     }

//     for(let i=0; i<loved.length; i++) {
//         let libraryLogNovel = document.querySelector('.libraryLogNovel');
//         libraryLogNovel.appendChild(loved[i]);
//         loved[i].style.display = 'none';
//     }
// }

// Manga Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

function Manga(title, author, pages, img, status, appendTo, novelHide, hideNovelSection, novelRating, typeP) {
    this.title = title,
    this.author = `Mangaka: ${author}`,
    this.pages = `Chapters: ${pages}`,
    this.img = img,
    this.status = status,
    this.appendTo = appendTo,
    this.novelHide = novelHide,
    this.hideNovelSection = hideNovelSection,
    this.novelRating = novelRating,
    this.typeP = typeP
}

Manga.prototype = Object.create(Novel.prototype);

// Manga.prototype.mostLovedManga = function() {
//     let included = false;
//     love = false;
//     addToTop5 = document.querySelector('.top5')
//     addToTop5.addEventListener('click', ()=> {
//         if(included === false) {
//             if(mangaTopList.length < 5) {
//                 mangaTopList.push(top5(this.img, this.favorite));
//                 included = true;
//             }
//         }
//         for(let i=0; i< mangaTopList.length; i++) {
//             let favNovelList = document.querySelector('.favNovelList');
//             favNovelList.appendChild(mangaTopList[i]);
//             mangaTopList[i].style.display = 'none';
//         }
//     })
//     if(love === false) {
//         loved.push(libraryLog(this.img, this.title, this.pages, this.stars(), this.typeP));
//         love = true;
//     }

//     for(let i=0; i<loved.length; i++) {
//         let libraryLogNovel = document.querySelector('.libraryLogNovel');
//         libraryLogNovel.appendChild(loved[i]);
//         loved[i].style.display = 'none';
//     }
// }



// Library Log  ------------------------------------------------------------------------------------------------------------------------------------------

// let completed = [];

function libraryLog(img, title, length, stars, type) {
    // let libraryLogNovel = document.querySelector('.libraryLogNovel');
    let libraryGroup = document.createElement('div');
    libraryGroup.classList.add('libraryGroup')

    let libraryGroupImg = document.createElement('img');
    libraryGroupImg.src = img;

    let libraryGroupTitle = document.createElement('h1');
    libraryGroupTitle.classList.add('h1');
    libraryGroupTitle.textContent = title;

    let libraryGroupLength = document.createElement('p');
    libraryGroupLength.classList.add('length');
    libraryGroupLength.textContent = length;

    let libraryGroupTypeDiv = document.createElement('div');
    libraryGroupTypeDiv.classList.add('type');

    let libraryGroupType = document.createElement('p');
    libraryGroupType.textContent = type;

    let deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa');
    deleteIcon.classList.add('fa-trash');
    deleteIcon.classList.add('deleteImg')

    // libraryLogNovel.appendChild(libraryGroup);
    libraryGroup.appendChild(libraryGroupImg);
    libraryGroup.appendChild(libraryGroupTitle);
    libraryGroup.appendChild(libraryGroupLength);
    libraryGroup.appendChild(stars);
    libraryGroup.appendChild(libraryGroupTypeDiv);
    libraryGroup.appendChild(deleteIcon)
    libraryGroupTypeDiv.appendChild(libraryGroupType)
    libraryGroup.addEventListener('mouseover', ()=> {
        deleteIcon.style.display = 'block';
        libraryGroup.style.background = '#60100B';
        libraryGroupImg.style.display = 'none';
        libraryGroupTitle.style.display = 'none';
    })
    libraryGroup.addEventListener('mouseleave', ()=> {
        deleteIcon.style.display = 'none';
        libraryGroup.style.background = 'rgb(34, 34, 34)';
        libraryGroupImg.style.display = 'block';
        libraryGroupTitle.style.display = 'block';
    })

    libraryGroup.addEventListener('click', ()=> {
        libraryGroup.style.display = 'none';
    })

    return libraryGroup;
}

// Top 5  ------------------------------------------------------------------------------------------------------------------------------------------

function top5(img, title, author, pages, status, stars) {
    
    // for(let i=0; i<5; i++) {
    // let num = [1, 2, 3, 4, 5]
    // let top5List = document.querySelector('.favNovelList');

    let top5Group = document.createElement('div');
    top5Group.classList.add('novelGroup');

    // let number = document.createElement('div');
    // number.textContent = `1`;
    // number.classList.add('number');

    let favImg = document.createElement('img');
    favImg.src = img;

    let favTitle = document.createElement('h1');
    favTitle.classList.add('title');
    favTitle.classList.add('novelgroupH1')
    favTitle.textContent = `${title}`;

    top5Group.appendChild(stars)
    let infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    let authorInfo = document.createElement('p');
    authorInfo.textContent = `${author}`
    infoDiv.appendChild(authorInfo)

    let pagesInfo = document.createElement('p');
    pagesInfo.textContent = `${pages}`
    infoDiv.appendChild(pagesInfo)

    // let statusInfo = document.createElement('p');
    // statusInfo.textContent = `Status: ${status}`
    // infoDiv.appendChild(statusInfo)

    // top5List.appendChild(top5Group);
    // top5Group.appendChild(number);
    top5Group.appendChild(favImg);
    top5Group.appendChild(favTitle);
    top5Group.appendChild(infoDiv)

    return top5Group;
    }
    
// }

// top5();

// function addToTop5() {

// }

// let favNovelList = document.querySelector('.favNovelList').childNodes;


// let top5List = {
//     1: favNovelList[1],
//     2: favNovelList[3],
//     3: favNovelList[5],
//     4: favNovelList[7],
//     5: favNovelList[9],
// }

// console.log(top5List)

