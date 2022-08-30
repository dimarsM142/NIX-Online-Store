window.addEventListener('load', chooseSort);
window.addEventListener('load', setPage);


function chooseSort(){
    let elem = document.getElementsByClassName('sort-variable');
    elem[0].style.opacity = 1;
    for(let i = 0; i < elem.length; i++){
        elem[i].onclick = (event) => {
            let curArr = getCurrentArr();
            let start;
            for(let j = 0; j < elem.length; j++){
                if(elem[j].style.opacity === '1'){
                    start = j;
                    elem[j].style.opacity = '0.5';
                }
            }
            if(event.currentTarget.innerHTML != elem[start].innerHTML){
                resetPage();
                sortArr(curArr, i);
                setFavorite();
                setCounterChange();
                setCardButton();
                setStartColor();
                setColorChange();
                checkSend();
                checkFavorite();
                checkBasket();
            }
            event.currentTarget.style.opacity = '1';
        }
    }
}

function sortArr(arr, type = null){
    if(type === null){
        let sortTyle = document.getElementsByClassName('sort-variable');
        for(let i = 0; i < sortTyle.length;i++){
            if(sortTyle[i].style.opacity === '1'){
                type = i;
            }
        }
    }


    if(type === 0){
        arr.sort((a, b) =>{
            if(a.mark < b.mark){
                return 1;
            }
            if(a.mark > b.mark){
                return -1;
            }
            return 0;
        });
        drawMainContent(arr, 0);
    }
    if(type === 1){
        arr.sort((a, b) =>{
            if(a.price > b.price){
                return 1;
            }
            if(a.price < b.price){
                return -1;
            }
            return 0;
        });
        drawMainContent(arr, 0);
    }
    if(type === 2){
        arr.sort((a, b) =>{
            if(a.price < b.price){
                return 1;
            }
            if(a.price > b.price){
                return -1;
            }
            return 0;
        });
        drawMainContent(arr, 0);
    }

}


function setPage(){
    const numberOfPages = Math.ceil(getCurrentArr().length / 12);
    let page = document.getElementsByClassName('page');
    page[0].innerHTML = `<span id="name">Сторінка</span>`;
    if(!document.getElementsByClassName('page-number')[0]){
        for(let i = 0; i < numberOfPages; i++){
        let currentSpan = document.createElement('span');
            currentSpan.className = 'page-number';
            currentSpan.innerHTML = i + 1;
            currentSpan.style.marginRight = '10px';
            if(i == 0){
                currentSpan.style.backgroundColor = 'black';
                currentSpan.style.opacity = '1';
                currentSpan.style.color = 'white';
            }
            page[0].append(currentSpan);  
        }
    }
    for(let i = 0; i < numberOfPages; i++){
        let page = document.getElementsByClassName('page-number');
        page[i].onclick = (event) =>{
            for(let j = 0; j < numberOfPages; j++){
                page[j].style.backgroundColor = '';
                page[j].style.opacity = '';
                page[j].style.color = '';
            }
            let arr = getCurrentArr();
            sortArr(arr);
            drawMainContent(arr, (event.currentTarget.innerHTML - 1) * 12);
            setFavorite();
            setCounterChange();
            setCardButton();
            setStartColor();
            setColorChange();
            checkSend();
            checkFavorite();
            checkBasket();
            event.currentTarget.style.backgroundColor = 'black';
            event.currentTarget.style.opacity = '1';
            event.currentTarget.style.color = 'white';
        }
    }
}

function resetPage(){
    let page = document.getElementsByClassName('page-number');
    for(let i = 0; i < page.length; i++){
        page[i].style.backgroundColor = '';
        page[i].style.opacity = '';
        page[i].style.color = '';
    }
    page[0].style.backgroundColor = 'black';
    page[0].style.opacity = '1';
    page[0].style.color = 'white';
}