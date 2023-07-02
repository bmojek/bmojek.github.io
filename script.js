function fcheck(a){
    //console.log(a)
    a.style.backgroundColor = '#fff';
    if(isNaN(a.value)|| a.value<0 || a.value>120){
        alert(a.value+'nie jest wiekiem człowieka. Podaj poprawną wartość.')
    }else{
        console.log(a.value)
    }
}

function ffocus(a){
    a.style.backgroundColor = '#afa';
    
}


function over(b){

    y = document.getElementsByClassName('i')


    for(x=0; x<y.length; x++){
        y[x].style.visibility = 'hidden'
    }

    iId=b.nextElementSibling.getAttribute('id')
    console.log(iId)
    i = document.getElementById(iId)
    i.style.visibility = 'visible'
}
function out(c){
    c.style.visibility = 'hidden'
}