window.addEventListener('load', setCounterChange);
window.addEventListener('load', setColorChange);
window.addEventListener('load', setStartColor);

function setCounterChange(){
    let container = document.getElementsByClassName('input-number');
    for(let i = 0; i < container.length; i++){
        container[i].children[0].onclick = () => {
            if(+container[i].children[1].value > 1){
                +container[i].children[1].value--;
                container[i].children[1].style.outline = '';
            }
            else{
                container[i].children[1].style.outline = '2px solid red';
                setTimeout(()=>{
                    container[i].children[1].style.outline = '';
                }, 1000);
            }
        };
        container[i].children[2].onclick = () => { 
            if(+container[i].children[1].value < 70){
                +container[i].children[1].value++;
                container[i].children[1].style.outline = '';
            }
            else{
                container[i].children[1].style.outline = '2px solid red';
                setTimeout(()=>{
                    container[i].children[1].style.outline = '';
                }, 1000);
            }
        };
        container[i].children[1].value = 1;
    }
    document.querySelectorAll('.input-number__input').forEach(function(el) {
        el.addEventListener('input', function() {
            this.value = this.value.replace(/[\D]/g, '');
            if(this.value === '0'){
                this.value = '';
                setTimeout(()=>{
                    this.style.outline = '';
                }, 1000);
            }
            if(this.value > 70){
                this.value = 70;
                this.style.outline = '2px solid red';
                setTimeout(()=>{
                    this.style.outline = '';
                }, 1000);
            }
            else{
                this.style.outline = 'none';
            }           
        });
      });
}

function setColorChange(){
    let card = document.getElementsByClassName('card');
    for(let i = 0; i < card.length; i++){
        let colorType = card[i].getElementsByClassName('round');
        let file = card[i].children[0].style.backgroundImage;
        let currentColor = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'));
        for (let j = 0; j < colorType.length; j++){
            if(colorType[j].style.display != 'none'){
                colorType[j].onclick = (event) =>{
                    for (let k = 0; k < colorType.length; k++){
                        colorType[k].style.border = '';
                        colorType[k].style.boxShadow = '';
                    }
                    let colorToCheck = colorType[j].className.slice(colorType[j].className.indexOf(' ') + 1, colorType[j].className.indexOf('-'));
                    card[i].children[0].style.backgroundImage = file.replace(currentColor, colorToCheck);

                    event.currentTarget.style.border = '2px solid gold';
                    event.currentTarget.style.boxShadow = '1px 2px 4px';
                }
            }
        }
        
    }
}


function setStartColor(){
    let card = document.getElementsByClassName('card');
    for(let i = 0; i < card.length; i++){
        let colorType = card[i].getElementsByClassName('round');
        let file = card[i].children[0].style.backgroundImage;
        let currentColor = file.slice(file.lastIndexOf('/') + 1, file.lastIndexOf('.'));
        for (let j = 0; j < colorType.length; j++){
            if(colorType[j].style.display != 'none'){
               let colorToCheck = colorType[j].className.slice(colorType[j].className.indexOf(' ') + 1, colorType[j].className.indexOf('-'));
               if(colorToCheck === currentColor){
                   colorType[j].style.border = '2px solid gold';
                   colorType[j].style.boxShadow = '1px 2px 4px';
               }
            }
        }
    }
}

