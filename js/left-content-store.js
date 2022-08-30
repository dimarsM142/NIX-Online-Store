window.addEventListener('load', setDropList);
window.addEventListener('load', setLeftButton);


function setDropList(){
    let resizableElem = document.getElementsByClassName('resizable');
    for(let i = 0; i < resizableElem.length; i++){
        resizableElem[i].onclick = (event) => {
            if(event.currentTarget.nextElementSibling.style.display === 'block'){
                event.currentTarget.nextElementSibling.style.display = 'none';
                event.currentTarget.children[0].innerHTML = ' &#8744;';
            }
            else{
                event.currentTarget.nextElementSibling.style.display = 'block';
                event.currentTarget.children[0].innerHTML = ' &#8743;';
            }
        }
    }
}

function setLeftButton(){
    let dropDownButtons = document.getElementsByClassName('content-list');
    let unresizableElem = document.getElementsByClassName('unresizable');
    for(let i = 0; i < dropDownButtons.length; i++){
        for (let j = 0; j < dropDownButtons[i].children.length; j++){
            if(dropDownButtons[i].children[j].innerHTML && dropDownButtons[i].children[j].className !='unavailable-left') {
                dropDownButtons[i].children[j].onclick = () =>{
                    for(let k = 0; k < dropDownButtons.length; k++){
                        for (let l = 0; l < dropDownButtons[k].children.length; l++){
                            if(dropDownButtons[k].children[l].style.backgroundColor == 'rgb(150, 150, 150)'){
                                dropDownButtons[k].children[l].style.backgroundColor = '';
                                dropDownButtons[k].children[l].style.opacity = '0.6';
                                dropDownButtons[k].children[l].style.padding = '0px 0px';
                                dropDownButtons[k].children[l].style.borderRadius = '0px';
    
                            }
                        }
                    }
                    for(let k = 0; k < unresizableElem.length; k++){
                        if(unresizableElem[k].style.backgroundColor == 'rgb(150, 150, 150)'){
                            unresizableElem[k].style.backgroundColor = '';
                            unresizableElem[k].style.padding = '0px 0px';
                            unresizableElem[k].style.borderRadius = '0px';
                        }
                    }
                    dropDownButtons[i].children[j].style.backgroundColor = '#969696';
                    dropDownButtons[i].children[j].style.opacity = '1';
                    dropDownButtons[i].children[j].style.padding = '10px 20px';
                    dropDownButtons[i].children[j].style.borderRadius = '20px';
                    //checkCurrentArr(dropDownButtons[i].children[j]);
                    let arr = getCurrentArr(dropDownButtons[i].children[j]);
                    sortArr(arr);
                    drawMainContent(arr, 0);
                    setPage();
                    setFavorite();
                    setCounterChange();
                    setCardButton();
                    setStartColor();
                    setColorChange();
                    checkSend();
                    checkFavorite();
                    checkBasket();
                }

            }
            if(dropDownButtons[i].children[j].className == 'unavailable-left'){
                dropDownButtons[i].children[j].style.cursor = 'not-allowed';
                dropDownButtons[i].children[j].style.opacity = '0.1';
            }
        }
    }
    for(let i = 0; i < unresizableElem.length; i++){
        if(unresizableElem[i].className !='name-list unresizable unavailable-left-large'){
            unresizableElem[i].onclick = ()=> { 
                let dropDownButtons = document.getElementsByClassName('content-list');
                for(let k = 0; k < dropDownButtons.length; k++){
                    for (let l = 0; l < dropDownButtons[k].children.length; l++){
                        if(dropDownButtons[k].children[l].style.backgroundColor == 'rgb(150, 150, 150)'){
                            dropDownButtons[k].children[l].style.backgroundColor = '';
                            dropDownButtons[k].children[l].style.opacity = '0.6';
                            dropDownButtons[k].children[l].style.padding = '0px 0px';
                            dropDownButtons[k].children[l].style.borderRadius = '0px';
                        }
                    }
                }
                for(let k = 0; k < unresizableElem.length; k++){
                    if(unresizableElem[k].style.backgroundColor == 'rgb(150, 150, 150)'){
                        unresizableElem[k].style.backgroundColor = '';
                        unresizableElem[k].style.padding = '0px 0px';
                        unresizableElem[k].style.borderRadius = '0px';
                    }
                }
                unresizableElem[i].style.backgroundColor = '#969696';
                unresizableElem[i].style.padding = '10px 20px';
                unresizableElem[i].style.borderRadius = '20px';
            }
        }else{
            unresizableElem[i].style.cursor = 'not-allowed';
            unresizableElem[i].style.opacity = '0.2';
        }   
    }  
}