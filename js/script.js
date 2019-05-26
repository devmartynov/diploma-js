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

        setTimeout(function(){
            overlay.style.display = 'flex';
            popupCallback.style.display = 'flex';
        }, 4000)       ;  


        });

// forms

  let form = document.querySelector('.main_form'),
      decorForm = document.querySelector('.decoration_form'),
      coverForm = document.querySelector('.form');


//   console.log('main_form');

function sendForm(elem) {
    let input = document.getElementsByTagName('.form_input'),
    statusMessage = document.createElement('div');
    statusMessage.classList.add('status');

    let message = {
        loading: 'Идет отправка',
        success: 'Отправлено!',
        failure: 'Ошибка...'
    };

    elem.addEventListener('submit', function(e) {
        e.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData() {
            return new Promise(function(resole,reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                request.addEventListener('readystatechange', () => {
                    if (request.readyState < 4 ) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });

    request.send(formData);

            });
        }
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
    
			postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);

    });
}

sendForm(form);

let inputPhone = document.querySelectorAll('input[type="tel"]');
for(let i = 0; i < inputPhone.length; i++){
    inputPhone[i].addEventListener('inрut', function() {
    inputPhone[i].value = inputPhone[i].value.replace(/[^+\d]/g, '');
    });
}


// В ПРОЦЕССЕ, запушила для себя пока



// timer
let deadline = '2019-05-31';

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
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);



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
    













// let body = body.querySelector('body');
// body.addEventListener('click', function(event){
//     let target = event.target;
//           console.log(target);
// });