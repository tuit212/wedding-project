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


1

let loginSection = document.querySelector(".login");
let login = document.querySelector(".login__left");
let register = document.querySelector(".login__right");
let active = document.querySelectorAll(".wrapper");
let loginBody = document.querySelector(".login__left-body");
let registerBody = document.querySelector(".register__left-body");
let leftButton = document.querySelector(".register-section-box");
let option = document.querySelector(".register-section-body");





for (let i = 0; i < active.length; i++) {
	active[i].addEventListener('click', function() {
		for (let x = 0; x < active.length; x++) {
			if (active[x] == this) {
				active[x].classList.add('login-active');
                loginBody.style.display = "none"
                registerBody.style.display = "block"
                
			} else {
				active[x].classList.remove('login-active');
                loginBody.style.display = "block"
                registerBody.style.display = "none"
			}
		}
	});
}


// select  start

let elSelect = document.querySelector(".form__select");
let selectArr = ["samarqand", "buxor", "andijon" , "farg'ona", "namangan", "sirdaryo", "jizzax", "qashqadaryo", "surxondaryo" , "navoiy" , "xorazm"];


for (let option = 0; option < selectArr.length; option++) {
    let selectOpt = document.createElement("option");
    selectOpt.value = selectArr[option];
    selectOpt.textContent = selectArr[option];
    elSelect.appendChild(selectOpt);
  
    elSelect.addEventListener('change', function (evt) {
      resultBread.textContent = evt.target.value;
    })
  }



let elSel = document.querySelector(".form-selectt");
let elSelArr = [
    "Nukus shahri",
    "Amudaryo tumani",
    "Beruniy tumani",
    "Kegeyli tumani",
    "Qanliko'l tumani",
    "Qorao‘zak tumani",
    "Chimboy tumani",
    "Shahrixon tumani",
    "Vobkent tumani",
    "Shofirkon tumani",
    "Qorako'l tumani",
    "G'ijduvon tumani",
    "Peshku tumani",
    "Buxoro shahri"
]

for (let option = 0; option < elSelArr.length; option++) {
    let selectOpt = document.createElement("option");
    selectOpt.value = elSelArr[option];
    selectOpt.textContent = elSelArr[option];
    elSel.appendChild(selectOpt);
  
    elSel.addEventListener('change', function (evt) {
      resultBread.textContent = evt.target.value;
    })
  }

  let registerSection = document.querySelector(".register")
  let forgetPassword = document.querySelector(".link")
  let newLogin = document.querySelector(".new-login")


  forgetPassword.addEventListener('click', () => {
	registerSection.style.display = 'none'
  	newLogin.style.display = 'block'
  })

  let smsKod = document.querySelector(".links");
  let newRegister = document.querySelector(".new-register");

  smsKod.addEventListener('click', () => {
	registerSection.style.display = 'none'
	newRegister.style.display = 'block'
  })




  let kodRegister = document.querySelectorAll(".new__register");
  let kodBody = document.querySelector(".new__register-body-kod");
  let parolBody = document.querySelector(".new__register-body-parol");


  for (let i = 0; i < kodRegister.length; i++) {
	kodRegister[i].addEventListener('click', function() {
		for (let x = 0; x < kodRegister.length; x++) {
			if (kodRegister[x] == this) {
				kodRegister[x].classList.add('new-register-active');
        kodBody.style.display = "none"
        parolBody.style.display = "block"
                
			} else {
				kodRegister[x].classList.remove('new-register-active');
        kodBody.style.display = "block"
        parolBody.style.display = "none"
			}
		}
	});
}



