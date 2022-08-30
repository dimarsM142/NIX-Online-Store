
window.addEventListener('load', setFavoriteStorage);
window.addEventListener('load', checkFavorite);
window.addEventListener('load', setFavorite);


function setFavorite(){
    let heart = document.getElementsByClassName('heart-picture');  
    for(let i = 0; i < heart.length; i++){
        heart[i].onclick = (event) => {
            if(event.currentTarget.getAttribute('class') === 'heart-picture white'){
                event.currentTarget.setAttribute('class', 'heart-picture black');
                event.currentTarget.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
                let cardName;
                if(event.currentTarget.parentElement.parentElement.nextElementSibling.className === 'middle-part'){
                    cardName = event.currentTarget.parentElement.parentElement.nextElementSibling.children[0].children[0].innerHTML;
                }
                else{
                    cardName = document.body.children[0].children[0].children[4].children[1].innerHTML.replace(' <span id="ref-size">', '<br>').replace('</span>', '');
                }
                localStorage.setItem('keyFavourite' + cardName, cardName);
                let current = +Number(localStorage.getItem('favouriteValue'));
                current++;
                localStorage.setItem('favouriteValue', current);
                setFavoriteStorage();
                checkFavouriteDouble(event.currentTarget.parentElement.parentElement.parentElement, i);
            }
            else {
                event.currentTarget.setAttribute('class', 'heart-picture white');
                event.currentTarget.innerHTML =  `<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>`;
                let cardName;
                if(event.currentTarget.parentElement.parentElement.nextElementSibling.className === 'middle-part'){
                    cardName = event.currentTarget.parentElement.parentElement.nextElementSibling.children[0].children[0].innerHTML;
                }
                else{
                    cardName = document.body.children[0].children[0].children[4].children[1].innerHTML.replace(' <span id="ref-size">', '<br>').replace('</span>', '');
                }
                localStorage.removeItem('keyFavourite' + cardName, cardName);
                let current = +Number(localStorage.getItem('favouriteValue'));
                current--;
                localStorage.setItem('favouriteValue', current);
                setFavoriteStorage();
                checkFavouriteDouble(event.currentTarget.parentElement.parentElement.parentElement, i);
            }
        };
    }
}



function setFavoriteStorage(){
    if(localStorage.getItem('favouriteValue')){
        document.getElementById('number-favourite').innerHTML = localStorage.getItem('favouriteValue');
    }
    else{
        localStorage.setItem('favouriteValue', document.getElementById('number-favourite').innerHTML);
    }
}

function checkFavorite(){
    let arrFavourite = [];
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).slice(0, 12) ==='keyFavourite'){
            arrFavourite.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    for(let j = 0; j < arrFavourite.length; j++){
        for(let i = 0; i < document.getElementsByClassName('card').length; i++){
            if(arrFavourite[j] === document.getElementsByClassName('card')[i].children[1].children[0].children[0].innerHTML){
                document.getElementsByClassName('card')[i].children[0].children[1].children[0].setAttribute('class', 'heart-picture black');
                document.getElementsByClassName('card')[i].children[0].children[1].children[0].innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
            }
        }
        if(document.getElementsByClassName('current-name')[0].children[1]){
            if(document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '') === arrFavourite[j]){
                let curButton = document.getElementsByClassName('heart-picture')[0];
                curButton.setAttribute('class', 'heart-picture black');
                curButton.innerHTML = `<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>`;
            }
        }
    }
    
}


function checkFavouriteDouble(current, index){
    let card = document.getElementsByClassName('card');
    if(document.body.children[0].children[1].className === 'left'){
        for(let i = 0; i < card.length; i++){
            if(i === index){
                continue;
            }
            if(card[i].children[1].children[0].children[0].innerHTML === current.children[1].children[0].children[0].innerHTML){
                document.getElementsByClassName('card')[i].children[0].children[1].children[0].setAttribute('class', current.children[0].children[1].children[0].getAttribute('class'));
                document.getElementsByClassName('card')[i].children[0].children[1].children[0].innerHTML = current.children[0].children[1].children[0].innerHTML;               
            }
        }
    }
    else{
        
        if(current.className === 'card'){
            if(document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '') === current.children[1].children[0].children[0].innerHTML){
                document.getElementsByClassName('left-content')[0].children[0].children[1].children[0].setAttribute('class', current.children[0].children[1].children[0].getAttribute('class'));
                document.getElementsByClassName('left-content')[0].children[0].children[1].children[0].innerHTML = current.children[0].children[1].children[0].innerHTML;          
            }
        }
        else{
            for(let i = 0; i < card.length; i++){
                if(card[i].children[1].children[0].children[0].innerHTML === document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '')){
                    document.getElementsByClassName('card')[i].children[0].children[1].children[0]
                    .setAttribute('class', current.children[0].children[1].children[0].getAttribute('class'));
                    document.getElementsByClassName('card')[i].children[0].children[1].children[0].innerHTML = current.children[0].children[1].children[0].innerHTML;               
                }
            }
        }
        
    }
}

