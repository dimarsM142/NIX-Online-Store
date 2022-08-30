window.addEventListener('load', startDraw);

function startDraw(){
    let currentCard = getCard();
    document.getElementsByClassName('current-name')[0].innerHTML = `Головна/<a href="index.html">Каталог</a>/<a href="#">${currentCard.type} ${currentCard.name}, <span id="ref-size">${currentCard.size} СМ</span></a>`;
     document.getElementsByClassName('main')[0].children[0].innerHTML = `${currentCard.type} ${currentCard.name},
    <span id="tittle-desc-size">${currentCard.size} СМ</span><span id="mark">${currentCard.mark}</span><span id="star">&#9733;</span>`;
    document.getElementsByClassName('main')[0].children[0].innerHTML = `${currentCard.type} ${currentCard.name},
    <span id="tittle-desc-size">${currentCard.size} СМ</span><span id="mark">${currentCard.mark}</span><span id="star">&#9733;</span>`;
    for(let i = 0; i < 3; i++){
        document.getElementsByClassName('up-part')[i].style.backgroundImage = `url('${currentCard.image}')`;
        document.getElementsByClassName('desc')[i].innerHTML =`${currentCard.size} СМ`;
    }
    document.getElementsByClassName('name-item')[0].innerHTML = `${currentCard.type}<br />${currentCard.name}`;
    document.getElementsByClassName('name-item')[1].innerHTML = `Хороший матеріал`;
    document.getElementsByClassName('name-item')[2].innerHTML = `Багато різних розмірів`;
    document.getElementsByClassName('default-price')[0].innerHTML = `${currentCard.price} $`;
    document.getElementsByClassName('action-price')[0].innerHTML = `${currentCard.actionPrice} $`;
    document.getElementsByClassName('small-page')[0].innerHTML = ``;
    document.getElementsByClassName('size-content')[0].innerHTML = ``;
   
    setStartColorPage(currentCard);
    setStartButtons(currentCard);

}

function setStartColorPage(currentCard){
  for(let i = 0; i < currentCard.sizeAvailable.length; i++){
      document.getElementsByClassName('small-page')[0].innerHTML += ``;
  }
  let currentColor = currentCard.image.slice(currentCard.image.lastIndexOf('/') + 1, currentCard.image.lastIndexOf('.'));
  if(currentCard.blueDisplay.length === 0){
      
      document.getElementsByClassName('small-page')[0].innerHTML += `<div class="small">
      <div class="up-part" style="background-image:url('${currentCard.image.replace(currentColor, 'blue')}')">
        <p class="name-item">${currentCard.type} <br />${currentCard.name}</p>
        <div class="favorite-item">
          <svg class='heart-picture'  style="cursor:default" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="-2 -2 20 20">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
        <p class="desc">${currentCard.size} CM</p>
      </div>
      </div>`;
      if(currentColor === 'blue'){
          let page = document.getElementsByClassName('small-page')[0];
          page.children[page.children.length - 1].children[0].style.outline = '2px solid black';
          page.children[page.children.length - 1].children[0].style.opacity = '1';
      }
  }
  if(currentCard.greenDisplay.length === 0){
      document.getElementsByClassName('small-page')[0].innerHTML += `<div class="small">
      <div class="up-part" style="background-image:url('${currentCard.image.replace(currentColor, 'green')}')">
        <p class="name-item">${currentCard.type} <br />${currentCard.name}</p>
        <div class="favorite-item">
          <svg class='heart-picture'  style="cursor:default" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="-2 -2 20 20">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
        <p class="desc">${currentCard.size} CM</p>
      </div>
      </div>`;
      if(currentColor === 'green'){
          let page = document.getElementsByClassName('small-page')[0];
          page.children[page.children.length - 1].children[0].style.outline = '2px solid black';
          page.children[page.children.length - 1].children[0].style.opacity = '1';
      }
  }
  if(currentCard.blackDisplay.length === 0){
      document.getElementsByClassName('small-page')[0].innerHTML += `<div class="small">
      <div class="up-part" style="background-image:url('${currentCard.image.replace(currentColor, 'black')}')">
        <p class="name-item">${currentCard.type} <br />${currentCard.name}</p>
        <div class="favorite-item">
          <svg class='heart-picture'  style="cursor:default" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="-2 -2 20 20">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
        <p class="desc">${currentCard.size} CM</p>
      </div>
      </div>`;
      if(currentColor === 'black'){
          let page = document.getElementsByClassName('small-page')[0];
          page.children[page.children.length - 1].children[0].style.outline = '2px solid black';
          page.children[page.children.length - 1].children[0].style.opacity = '1';
      }
  }
  if(currentCard.redDisplay.length === 0){
      document.getElementsByClassName('small-page')[0].innerHTML += `<div class="small">
      <div class="up-part" style="background-image:url('${currentCard.image.replace(currentColor, 'red')}')">
        <p class="name-item">${currentCard.type} <br />${currentCard.name}</p>
        <div class="favorite-item">
          <svg class='heart-picture'  style="cursor:default" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="-2 -2 20 20">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
        <p class="desc">${currentCard.size} CM</p>
      </div>
      </div>`;
      if(currentColor === 'red'){
          let page = document.getElementsByClassName('small-page')[0];
          page.children[page.children.length - 1].children[0].style.outline = '2px solid black';
          page.children[page.children.length - 1].children[0].style.opacity = '1';
      }
  }
  if(currentCard.whiteDisplay.length === 0){
      document.getElementsByClassName('small-page')[0].innerHTML += `<div class="small">
      <div class="up-part" style="background-image:url('${currentCard.image.replace(currentColor, 'white')}')">
        <p class="name-item">${currentCard.type} <br />${currentCard.name}</p>
        <div class="favorite-item">
          <svg class='heart-picture'  style="cursor:default" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-heart" viewBox="-2 -2 20 20">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg>
        </div>
        <p class="desc">${currentCard.size} CM</p>
      </div>
      </div>`;
      if(currentColor === 'white'){
          let page = document.getElementsByClassName('small-page')[0];
          page.children[page.children.length - 1].children[0].style.outline = '2px solid black';
          page.children[page.children.length - 1].children[0].style.opacity = '1';
      }
  }  
}

function setStartButtons(currentCard){
if(currentCard.sizeAvailable.indexOf('S') != -1){
    if(currentCard.size[0] === 'S'){
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size1" role="button">S(96'82'100) CM</button>`;
    }
    else{
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size2" role="button">S(96'82'100) CM</button>`;
    }
    
}
if(currentCard.sizeAvailable.indexOf('M') != -1){
    if(currentCard.size[0] === 'M'){
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size1" role="button">M(100'88'104) CM</button>`;
    }
    else{
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size2" role="button">M(100'88'104) CM</button>`;
    }
   
}
if(currentCard.sizeAvailable.indexOf('L') != -1){
    if(currentCard.size[0] === 'L'){
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size1" role="button">L(104'94'108) CM</button>`;
    }
    else{
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size2" role="button">L(104'94'108) CM</button>`;
    }

}
if(currentCard.sizeAvailable.indexOf('X') != -1){
    if(currentCard.size[0] === 'X'){
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size1" role="button">XL(108'100'112) CM</button>`;
    }
    else{
        document.getElementsByClassName('size-content')[0].innerHTML += ` <button class="button-size button-size2" role="button">XL(108'100'112) CM</button>`;
    }

}
}