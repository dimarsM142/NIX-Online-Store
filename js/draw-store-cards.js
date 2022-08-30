window.addEventListener('load', startDrawing);

function startDrawing(){
    let classOfCards = new Cards();
    classOfCards.setTshirts();
    sortArr(classOfCards.arrOfTshirts, 0);
    drawMainContent(classOfCards.arrOfTshirts, 0);
    let dropDownButtons = document.getElementsByClassName('content-list');
    dropDownButtons[0].children[4].style.backgroundColor = '#969696';
    dropDownButtons[0].children[4].style.opacity = '1';
    dropDownButtons[0].children[4].style.padding = '10px 20px';
    dropDownButtons[0].children[4].style.borderRadius = '20px';
}





function drawMainContent(arr, startIndex = 0){
    let elem = document.getElementsByClassName('card-container')[0];
    elem.innerHTML = ``;
    for(let i = startIndex; i < startIndex + 12; i++){
        if(arr[i]){
            elem.innerHTML += `<div class="card">
            <div class="up-part" style="background-image: url('${arr[i].image}')">
                <p class="name-item">${arr[i].type}<br />${arr[i].name}</p>
                <div class="favorite-item">
                    <svg class='heart-picture white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="-2 -2 20 20">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                </div>
                <p class="desc">${arr[i].size} СМ</p>
            </div>
            <div class="middle-part">
                <p><a href="product.html">${arr[i].type} ${arr[i].name},<br />${arr[i].size} СМ</a></p>
                <div class="round blue-color" style="${arr[i].blueDisplay}">0</div>
                <div class="round green-color" style="${arr[i].greenDisplay}">0</div>
                <div class="round black-color" style="${arr[i].blackDisplay}">0</div>
                <div class="round red-color" style="${arr[i].redDisplay}">0</div>
                <div class="round white-color" style="${arr[i].whiteDisplay}">0</div>
            </div>
            <div class="down-part">
                <div class="price">
                    <p class="value">${arr[i].price} $</p>
                    <p class="price-desc">Ціна</p>
                </div>
                <div class="act-price">
                    <p class="value">${arr[i].actionPrice} $</p>
                    <p class="price-desc">Опт від 1000$</p>
                </div>
                <div class="input-container">
                    <div class="input-number">
                        <div class="input-left">	&#60;</div>
                        <input class="input-number__input" type="text" pattern="^[0-9]+$" value="1">
                        <div class="input-right">></div>
                    </div>
                    <p>Кількість</p>
                </div>
            </div>
            <div class="last-part">
                <button class="card-button button-1" role="button">В кошик</button>
                <p class="mark">${arr[i].mark} <span id="star">&#9733;</span></p>
            </div>
        </div>`
        }
    }
}

