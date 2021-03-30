// Novel Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

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
    // this.favorite = favorite,
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

    let stars = document.createElement('div');
    stars.classList.add('stars');
    starPlacing.appendChild(stars)

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


    let markFavorite = document.createElement('button');
    markFavorite.classList.add('addToFavorite');
    markFavorite.textContent = 'Mark Favorite';
    novelItem.appendChild(markFavorite);
    
    let addToTop5 = document.createElement('button');
    addToTop5.classList.add('top5');
    addToTop5.textContent = 'Add to Top 5';
    novelItem.appendChild(addToTop5)

    let remove = document.createElement('button');
    remove.classList.add('remove');
    remove.textContent = 'Remove';
    novelItem.appendChild(remove);

    markFavorite.addEventListener('click', ()=> {
        favImg.style.background = `url(${this.img}) no-repeat center center`
    })

    remove.addEventListener('click', ()=> {
        novelItem.style.display = 'none';
    })
    
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
        recentlyAddedList.appendChild(recentlyAddedGroup);

        let recentlyAddedImg = document.createElement('img');
        recentlyAddedImg.src = this.img;
        recentlyAddedGroup.appendChild(recentlyAddedImg);

        let novelTitle = document.createElement('h1');
        novelTitle.textContent = this.title;
        novelTitle.classList.add('h1')
        recentlyAddedGroup.appendChild(novelTitle);


        let novelLength = document.createElement('p');
        novelLength.classList.add('length')
        novelLength.textContent = `${this.pages}`
        recentlyAddedGroup.appendChild(novelLength)

        let typeOfAdd = document.createElement('div');
        typeOfAdd.classList.add('type');
        recentlyAddedGroup.appendChild(typeOfAdd);

        let recentlyAddedType = document.createElement('p');
        recentlyAddedType.textContent = this.typeP;
        typeOfAdd.appendChild(recentlyAddedType);
        
        return recentlyAddedGroup
}


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