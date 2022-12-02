

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let hero = document.querySelector(".hero");
let span1 = document.querySelector("#span1")
let span2 = document.querySelector("#span2")
let span3 = document.querySelector("#span3")
let span4 = document.querySelector("#span4")

let plus = 0


right.addEventListener('click', () => {
    console.log(right);

    if(plus == -4050){
        right.type.disabled
    }
    else{
        hero.style.transform = `translateX(${plus -= 1350}px)`
    }


    
} )

left.addEventListener('click', () => {
    console.log(left);

    if(plus == 0){
        left.type.disabled
    }
    else{

        hero.style.transform = `translateX(${plus += 1350}px)`
    }
    
} )


let dot = 0

span1.addEventListener("click", () => {
if(plus == -1350){
    span3.type.disabled
}
else{
    hero.style.transform= `translateX(${dot+0}px)`

}
});

span2.addEventListener("click", () => {
if(dot == -800){
span2.type.disabled
}
else{
    hero.style.transform= `translateX(${dot-1350}px)`

}
});

span3.addEventListener("click", () => {
if(plus == -800){
    span3.type.disabled
}
else{
    hero.style.transform= `translateX(${dot-2700}px)`

}
});
span4.addEventListener("click", () => {
if(plus == -800){
    span4.type.disabled
}
else{
    hero.style.transform= `translateX(${dot-4050}px)`

}
});