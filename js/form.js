window.addEventListener('load', setFormValidation);
window.addEventListener('load', setMark);

function setFormValidation(){
    let form = document.getElementsByTagName('form')[0];
    form.children[1].addEventListener('input', ()=>{
        let start = form.children[1].value;
        form.children[1].value = form.children[1].value.replace(/[\s<>\/\|\\\?:\*"']/, '');
        document.getElementsByClassName('error-name')[0].innerHTML = 'You can`t use this symbol';
        if(start !== form.children[1].value){
            document.getElementsByClassName('error-name')[0].style.display = 'block';
            form.children[1].style.outline = '2px solid red';
            setTimeout(()=>{
                document.getElementsByClassName('error-name')[0].style.display = 'none';
                form.children[1].style.outline = '';
                document.getElementsByClassName('error-name')[0].innerHTML = 'Enter 1 to 20 characters';
            }, 1000);
        }
    })
    form.children[2].addEventListener('input', ()=>{
        let start = form.children[2].value;
        form.children[2].value = form.children[2].value.replace(/[^\w@.-]/, '');
       
        if(start !== form.children[2].value){
            form.children[2].style.outline = '2px solid red';
            document.getElementsByClassName('error-email')[0].style.display = 'block';
            document.getElementsByClassName('error-email')[0].innerHTML = 'You can`t use this symbol';
            setTimeout(()=>{
                document.getElementsByClassName('error-email')[0].style.display = 'none';
                form.children[2].style.outline = '';
                document.getElementsByClassName('error-email')[0].innerHTML = 'Enter from 1 to 500 characters';
            }, 1000);
        }
    })
    let isValid = true;
    form.children[6].onclick = () =>{
        checkName(form);
        checkEmail(form);
        checkComment(form);
        checkMark(form);
        if(!checkName(form) || !checkEmail(form) || !checkComment(form) || !checkMark(form)){
            isValid = false;
        }
        else{
            form.submit();
        }
            
    }
}

function checkName(form){
    if(form.children[1].value.length < 1 || form.children[1].value.length > 20) {
        form.children[1].style.outline = '2px solid red';
        document.getElementsByClassName('error-name')[0].style.display = 'block';
        setTimeout(()=>{
            document.getElementsByClassName('error-name')[0].style.display = 'none';
            form.children[1].style.outline = '';
        }, 2000);
        return false;
    }
    return true;
}

function checkEmail(form){
    if(form.children[2].value.length < 1) {
        document.getElementsByClassName('error-email')[0].style.display = 'block';
        form.children[2].style.outline = '2px solid red';
        setTimeout(()=>{
            document.getElementsByClassName('error-email')[0].style.display = 'none';
            form.children[2].style.outline = '';
        }, 2000);
        return false;
    }
    let arrOfAt = form.children[2].value.match(/@/g);
    if(arrOfAt === null || arrOfAt.length !== 1){
        document.getElementsByClassName('error-email')[0].style.display = 'block';
        form.children[2].style.outline = '2px solid red';
        setTimeout(()=>{
            document.getElementsByClassName('error-email')[0].style.display = 'none';
            form.children[2].style.outline = '';
        }, 2000);
        return false;
    }
    let domain = form.children[2].value.slice(form.children[2].value.indexOf('@') + 1);
    if(domain.length === 0 || domain.indexOf('.') === -1){
        document.getElementsByClassName('error-email')[0].style.display = 'block';
        form.children[2].style.outline = '2px solid red';
        setTimeout(()=>{
            document.getElementsByClassName('error-email')[0].style.display = 'none';
            form.children[2].style.outline = '';
        }, 2000);
        return false;
    }
    return true;
}

function checkComment(form){
    if(form.children[3].value.length < 1 || form.children[3].value.length > 500) {
        document.getElementsByClassName('error-comment')[0].style.display ='block';
        form.children[3].style.outline = '2px solid red';
        setTimeout(()=>{
            form.children[3].style.outline = '';
            document.getElementsByClassName('error-comment')[0].style.display ='';
        }, 2000);
        return false;
    }

    return true;
}

function checkMark(form){
    for(let i = 0; i < form.children[5].children.length; i++){
        if(form.children[5].children[i].innerHTML == `<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>`){
            return true;
        }
    }
    form.children[5].style.border = '2px solid red';
    form.children[5].style.borderRadius = '20px';
        setTimeout(()=>{
            form.children[5].style.border = '';
        }, 2000);
    return false;
}


function setMark(){
    let answer = document.getElementsByClassName('user-answer')[0];
    for(let i = 0; i < answer.children.length; i++){
        answer.children[i].onclick = (event) =>{
            for(let j = 0; j < answer.children.length; j++){
                answer.children[j].innerHTML = `<path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>`;
            }
            for(let j = 0; j < i + 1; j++){
                answer.children[j].innerHTML = `<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>`;
            }
            
        }
    }

}
