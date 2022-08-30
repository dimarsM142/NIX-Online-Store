
window.addEventListener('load', setDownPart);
window.addEventListener('load', setCardColorChange);
window.addEventListener('load', setSizeButton);

function getCard(){
    let card = JSON.parse(localStorage.getItem('currCard'));
    return card;
}

function setDownPart(){
    let tittle = document.getElementsByClassName('last-tittle');
    tittle[0].children[0].onclick = () =>{
        tittle[0].children[0].style.opacity = '1';
        tittle[0].children[0].style.borderBottom = '2px solid black';
        tittle[0].children[1].style.opacity = '0.4';
        tittle[0].children[1].style.borderBottom = 'none';
        let desc = document.getElementsByClassName('desc-container');
        let answers = document.getElementsByClassName('answers-container');
        desc[0].style.display = 'block';

        answers[0].style.display = 'none';
    }
    tittle[0].children[1].onclick = () =>{
        tittle[0].children[0].style.opacity = '0.4';
        tittle[0].children[0].style.borderBottom = 'none';
        tittle[0].children[1].style.opacity = '1';
        tittle[0].children[1].style.borderBottom = '2px solid black';
        let desc = document.getElementsByClassName('desc-container');
        let answers = document.getElementsByClassName('answers-container');
        desc[0].style.display = 'none';
        answers[0].style.display = 'block';
    }
}

function setCardColorChange(){
    let page = document.getElementsByClassName('small-page')[0];

    for(let i = 0; i < page.children.length; i++){
        page.children[i].children[0].onclick = (event) =>{
            for(let j = 0; j < page.children.length; j++){
                page.children[j].children[0].style.outline = 'none';
                page.children[j].children[0].style.opacity = '0.4';
            }
            event.currentTarget.style.outline = '2px solid black';
            event.currentTarget.style.opacity = '1';
            for(let i = 0; i < 3; i++){
                document.getElementsByClassName('up-part')[i].style.backgroundImage = event.currentTarget.style.backgroundImage;
            }
        };
    }
}

function setSizeButton(){
    let buttonContainer = document.getElementsByClassName('size-content')[0];
    for(let i = 0; i < buttonContainer.children.length; i++){
        buttonContainer.children[i].onclick = (event) =>{
            for(let j = 0; j < buttonContainer.children.length; j++){
                buttonContainer.children[j].setAttribute('class', 'button-size button-size2');
            }
            event.currentTarget.setAttribute('class', 'button-size button-size1');
            let text = event.currentTarget.innerHTML.replace(/\//g,"'");
            document.getElementById('tittle-desc-size').innerHTML = event.currentTarget.innerHTML;
            document.getElementById('ref-size').innerHTML = event.currentTarget.innerHTML;
            document.getElementById('main-desc').innerHTML = text;
            let small = document.getElementsByClassName('small');
            for(let j = 0; j < small.length; j++){
                small[j].children[0].children[2].innerHTML = text;
            }
        }
    }
}
