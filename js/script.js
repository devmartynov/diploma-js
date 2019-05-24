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




        });

// forms

  let form = document.querySelector('.main_form');
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
    inputPhone[i].addEventListener('inout', function() {
    inputPhone[i].value = inputPhone[i].value.replace(/[^+\d]/g, '');
    });
}


// В ПРОЦЕССЕ, запушила для себя пока

