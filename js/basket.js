window.addEventListener('load', setBasket);
window.addEventListener('load', checkBasket);
window.addEventListener('load', setCardButton);

function setCardButton() {
    let button = document.getElementsByClassName('card-button');
    for(let i = 0; i < button.length; i++) {
        button[i].onclick = (event) => {
            if(event.currentTarget.innerHTML == 'В кошик'){
                event.currentTarget.innerHTML = `В кошику`;
                event.currentTarget.setAttribute('class', 'card-button button-2');
                let value;
                if(button[i].parentElement.className ==='last-part') {
                    localStorage.setItem('keyBasket' + button[i].parentElement.parentElement.children[1].children[0].children[0].innerHTML, 
                    button[i].parentElement.parentElement.children[1].children[0].children[0].innerHTML);
                    value = +button[i].parentElement.parentElement.children[2].children[0].children[0].innerHTML
                        .slice(0, button[i].parentElement.parentElement.children[2].children[0].children[0].innerHTML.indexOf(' '));
                }
                else{
                    let cardName = document.body.children[0].children[0].children[4].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '');
                    localStorage.setItem('keyBasket' + cardName, cardName);
                    value = +document.getElementsByClassName('default-price')[0].innerHTML
                    .slice(0, document.getElementsByClassName('default-price')[0].innerHTML.indexOf(' '));
                }
                let current = Number(localStorage.getItem('basketValue'));
                current += value;
                localStorage.setItem('basketValue', current);
                setBasket();
                checkBasketDouble(button[i].parentElement.parentElement, i);
            }
            else{
                event.currentTarget.innerHTML = `В кошик`;
                event.currentTarget.setAttribute('class', 'card-button button-1');
               
                let value;
                if(button[i].parentElement.className ==='last-part'){
                    localStorage.removeItem('keyBasket' + button[i].parentElement.parentElement.children[1].children[0].children[0].innerHTML);
                    value = +button[i].parentElement.parentElement.children[2].children[0].children[0].innerHTML
                        .slice(0, button[i].parentElement.parentElement.children[2].children[0].children[0].innerHTML.indexOf(' '));
                }
                else{
                    let cardName = document.body.children[0].children[0].children[4].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '');
                    localStorage.removeItem('keyBasket' + cardName, cardName);
                    value = +document.getElementsByClassName('default-price')[0].innerHTML
                    .slice(0, document.getElementsByClassName('default-price')[0].innerHTML.indexOf(' '));
                }
                let current = Number(localStorage.getItem('basketValue'));
                current -= value;
                localStorage.setItem('basketValue', current);
                setBasket();
                checkBasketDouble(button[i].parentElement.parentElement, i);
            }
        }
    }
}


function setBasket(){
    if(localStorage.getItem('basketValue')){
        document.getElementById('number-basket').innerHTML = localStorage.getItem('basketValue');
    }
    else{
        localStorage.setItem('basketValue', document.getElementById('number-basket').innerHTML);
    }
}


function checkBasket(){
    let arrBasket = [];
    for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i).slice(0, 9) ==='keyBasket'){
            arrBasket.push(localStorage.getItem(localStorage.key(i)));
        }
    }
    for(let j = 0; j < arrBasket.length; j++){
        for(let i = 0; i < document.getElementsByClassName('card').length; i++){
            if(arrBasket[j] === document.getElementsByClassName('card')[i].children[1].children[0].children[0].innerHTML){
                let curButton = document.getElementsByClassName('card')[i].children[3].children[0];
                curButton.innerHTML = `В кошику`;
                curButton.setAttribute('class', 'card-button button-2');
            }
        }
        if(document.getElementsByClassName('current-name')[0].children[1]){
            if(document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '') === arrBasket[j]){
                let curButton = document.getElementsByClassName('card-button')[0];
                curButton.innerHTML = `В кошику`;
                curButton.setAttribute('class', 'card-button button-2');
            }
        }
    }
}

function checkBasketDouble(current, index){
    let card = document.getElementsByClassName('card');
    if(document.body.children[0].children[1].className === 'left'){
        for(let i = 0; i < card.length; i++){
            if(i === index){
                continue;
            }
            if(card[i].children[1].children[0].children[0].innerHTML === current.children[1].children[0].children[0].innerHTML){
                card[i].getElementsByClassName('card-button')[0].className = current.getElementsByClassName('card-button')[0].className;
                card[i].getElementsByClassName('card-button')[0].innerHTML = current.getElementsByClassName('card-button')[0].innerHTML;
            }
        }
    }
    else{
        if(current.className === 'card'){
            if(document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '') === current.children[1].children[0].children[0].innerHTML){
                document.getElementsByClassName('buttons-container')[0].children[0].innerHTML = current.getElementsByClassName('card-button')[0].innerHTML;
                document.getElementsByClassName('buttons-container')[0].children[0].className = current.getElementsByClassName('card-button')[0].className;

            }
        }
        else{
            for(let i = 0; i < card.length; i++){
                if(card[i].children[1].children[0].children[0].innerHTML === document.getElementsByClassName('current-name')[0].children[1].innerHTML.replace(' <span id="ref-size">','<br>').replace('</span>', '')){
                    card[i].getElementsByClassName('card-button')[0].className = current.getElementsByClassName('card-button')[0].className;
                    card[i].getElementsByClassName('card-button')[0].innerHTML = current.getElementsByClassName('card-button')[0].innerHTML;
                }
            }
        }
        
    }
}
