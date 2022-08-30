window.addEventListener('load', checkSend);

function checkSend(){
    let elem = document.getElementsByClassName('card');
    for(let i = 0; i < elem.length; i++){
        elem[i].children[1].children[0].children[0].onclick = (event) => {
           
            let type = elem[i].children[1].children[0].children[0].innerHTML.slice(0, elem[i].children[1].children[0].children[0].innerHTML.indexOf(' '));
            let name = elem[i].children[1].children[0].children[0].innerHTML.slice(elem[i].children[1].children[0].children[0].innerHTML.indexOf('"'), elem[i].children[1].children[0].children[0].innerHTML.lastIndexOf('"') + 1);
            let size = elem[i].children[1].children[0].children[0].innerHTML.slice(elem[i].children[1].children[0].children[0].innerHTML.indexOf('>') + 1, elem[i].children[1].children[0].children[0].innerHTML.lastIndexOf(' '));
            let arr = getCurrentArr(type);
            for(let j = 0; j < arr.length; j++){
                if(arr[j].type === type && arr[j].name === name && arr[j].size === size){
                    localStorage.setItem('currCard', JSON.stringify(arr[j]));
                    return 0;
                }
            }
            return 0;
        };
    }   
}
