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


// login

let loginTopLeft = document.querySelectorAll(".login__left");
let loginTopRight = document.querySelectorAll(".login__right");


let loginBody = document.querySelector(".login__left-body");

loginTopLeft.addEventListener("click", () => {
	
})