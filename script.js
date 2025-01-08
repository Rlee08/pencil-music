const hint = document.getElementById('piece1hint');
let isClicked = true;

let showToggle = function(){
    if(isClicked){
        hint.style.display = 'block';
        isClicked = false;
    }else{
        hint.style.display = 'none';
        isClicked = true;
    }
}

