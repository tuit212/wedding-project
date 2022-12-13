
let weddingLeft = document.querySelector(".wedding__button-left")
let weddingRight = document.querySelector(".wedding__button-right")
let lastWedding = document.querySelector(".last-wedding")
let righttWedding = document.querySelector(".right-wedding")

let weddingList = document.querySelector(".wedding__list")



// const display = () => {
//     weddingRight.displayed = true;
//     weddingLeft.displayed = true;
// }


// const enable = () => {
//     weddingRight.displayed = false;
//     weddingLeft.displayed = false;
// }










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



