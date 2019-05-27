'use strict';
//modals

    let popupEngineer = document.querySelector('.popup_engineer_btn'), 
        phoneLink = document.querySelector('.phone_link'),
        popup = document.querySelector('.popup');

        
        function showModal(elem) {
            elem.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        function closeModal(elem) {
            elem.style.display= 'none';
            document.body.style.overflow = '';
        }

        document.body.addEventListener('click', (e) => {
          let target = e.target;  
    
          if(target.classList.contains('popup_engineer_btn')) {
              showModal(popup);
          }
          
          if(target.classList.contains('phone_link')) {
            showModal(popup);
        }


         let close = document.querySelector('strong');

          if(target === close || target.classList.contains('popup')) {
                        closeModal(popup);
                    }

        // setTimeout(function(){
        //     overlay.style.display = 'flex';
        //     popupCallback.style.display = 'flex';
        // }, 4000);  


        });

// forms

  let form = document.querySelector('.main_form'),
      decorForm = document.querySelector('.decoration_form'),
      coverForm = document.querySelector('.form');


//   console.log('main_form');

let message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с Вами свзяжемся!",
    failure: "Что-то пошло не так!"
};

let forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll(".form input"),
    statusMessage = document.createElement("div"),
    allInputsUserPhone = document.querySelectorAll("input[name='user_phone']");

function setValidation(elem) {
    for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener("input", () => {
            elem[i].value = elem[i].value.replace(/[^0-9]/ig, "");
        });
    }
}
setValidation(allInputsUserPhone);

statusMessage.classList.add("status");

function sendform(ourForm, ourInputs) {
    for (let f = 0; f < ourForm.length; f++) {
        let form = ourForm[f];

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader("Content-Type", "application/json; charset=utf-8");

                let formData = new FormData(form);
                let obj = {};
                formData.forEach(function (value, key) {
                    obj[key] = value;
                });

                let json = JSON.stringify(obj);
                request.send(json);

                request.addEventListener("readystatechange", () => {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < ourInputs.length; i++) {
                    ourInputs[i].value = "";
                }
            }); // конец обработчика событий

        } // конец цикла for f
    }

    sendform(forms, inputs);


// В ПРОЦЕССЕ, запушила для себя пока



// timer
let deadline = '2019-05-30';

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)) % 24),
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            
 

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

        // console.log(minutes);

		function updateClock() {
			let t = getTimeRemaining(endtime);
			days.textContent = formatDate(t.days);
			hours.textContent = formatDate(t.hours);
            minutes.textContent = formatDate(t.minutes);
			seconds.textContent = formatDate(t.seconds);


			if (t.total <= 0) {
                clearInterval(timeInterval);
				days.textContent = "00";
				hours.textContent = "00";
				minutes.textContent = "00";
				seconds.textContent = "00";
				
			}

		}

	}
	const formatDate = function (num) {
		if (num < 10) {
			num = '0' + num;
		}
		return num;
	}

    setClock('timer', deadline);


    // image - zoom

    let images = document.querySelectorAll(".works img.pa");
    let overlay = document.querySelector(".overlay");

for (let i = 0; i < images.length; i++) {
    let actual = images[i],
        div = document.createElement("div"),
        img = document.createElement("img");
    img.setAttribute("src", images[i].getAttribute("src"));

    actual.addEventListener("click", (event) => {
        event.preventDefault();
        overlay.style.display = "block";
        overlay.appendChild(div).appendChild(img);
        img.classList.add("d");
        document.body.style.overflow = "hidden";
    });
}

window.addEventListener("click", (event) => {
    if (event.target === overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    }
});
    
    

    













// let body = body.querySelector('body');
// body.addEventListener('click', function(event){
//     let target = event.target;
//           console.log(target);
// });