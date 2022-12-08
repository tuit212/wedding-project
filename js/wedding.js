
let weddingLeft = document.querySelector(".wedding__button-left")
let weddingRight = document.querySelector(".wedding__button-right")
let weddingList = document.querySelector(".wedding__list")

let qoshish = 0

weddingRight.addEventListener('click', () => {
    console.log(weddingRight);

    if(qoshish == -3543){
        weddingRight.type.disabled
        

    }
    
    else{
        weddingList.style.transform = `translateX(${qoshish -= 1181}px)`

    }


    
} )

weddingLeft.addEventListener('click', () => {
    console.log(weddingLeft);

    if(qoshish == 0){
        weddingLeft.type.disabled

    }

    else{

        weddingList.style.transform = `translateX(${qoshish += 1181}px)`

    }
    
} )

