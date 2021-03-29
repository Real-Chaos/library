// Novel Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

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

// Anime Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

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

// Manga Prototypes -------------------------------------------------------------------------------------------------------------------------------------------

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