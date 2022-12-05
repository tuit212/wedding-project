// header start
let lists = document.querySelectorAll(".header__item-list");

for (let i = 0; i < lists.length; i++) {
	lists[i].addEventListener('click', function() {
		for (let x = 0; x < lists.length; x++) {
			if (lists[x] == this) {
				lists[x].classList.add('active');
			} else {
				lists[x].classList.remove('active');
			}
		}
	});
}

// header end



// carusel start


let left = document.querySelector(".left");
let right = document.querySelector(".right");
let hero = document.querySelector(".hero");
let span1 = document.querySelector("#span1");
let span2 = document.querySelector("#span2");
let span3 = document.querySelector("#span3");
let span4 = document.querySelector("#span4");

let plus = 0

let active = document.querySelectorAll(".box1-span");




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


// carusel end



// sms start


let sms = document.querySelector(".sms");
let wrapper = document.querySelector(".sms__box");
let del = document.querySelector(".ellips");

sms.addEventListener('click', () => {
    // console.log("asadbek");
    wrapper.classList.add("playing")
})

del.addEventListener('click', () => {
    wrapper.classList.remove("playing");
})


// let chat = document.querySelector(".last");

// function ekrangaChiqarish(){

//     let res = " "
//     `
//     <div class="last__img">
//         <a href="#">
//             <img src="./img/sms__user.svg" alt="user-sms" width="28" height="29">
//         </a>
//     </div>
//     <div class="last__chat">
//         <p>
//             Salom 😊 
//             Keling, tadbiringiz uchun sayt topishga yordam beraylik.
//             Sana haqida qaror qabul qildingizmi?
//         </p>
//     </div>
//     `
    
// }

// ekrangaChiqarish()



// sms end

// hero boox  start
let heroBox = document.querySelectorAll(".box__item-list");

for (let i = 0; i < heroBox.length; i++) {
	heroBox[i].addEventListener('click', function() {
		for (let x = 0; x < heroBox.length; x++) {
			if (heroBox[x] == this) {
				heroBox[x].classList.add('box-active');
			} else {
				heroBox[x].classList.remove('box-active');
			}
		}
	});
}

// hero boox  end


// services start
let services = document.querySelectorAll(".services__body-item-list");

for (let i = 0; i < services.length; i++) {
	services[i].addEventListener('click', function() {
		for (let x = 0; x < services.length; x++) {
			if (services[x] == this) {
				services[x].classList.add('active-services');
			} else {
				services[x].classList.remove('active-services');
			}
		}
	});
}
// services end