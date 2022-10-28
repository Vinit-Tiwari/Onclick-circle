const count=100


function createCircle(){
        let cir=document.createElement('span')
        cir.classList.add('circle')
        document.querySelector('.container').appendChild(cir)
        cir.style.left=event.clientX -10 + "px"
        cir.style.top=event.clientY  -10 + "px"
    
        setTimeout(() => {
            cir.style.display="none"
        }, 1000);
        console.log(111)    
}

function manyCircle(){

}

document.querySelector('.container').addEventListener('mouseover',createCircle)
