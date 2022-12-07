

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
    "Qorako‘l tumani",
    "G‘ijduvon tumani",
    "Peshku tumani",
    "Buxoro shahri",
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

// seleck end