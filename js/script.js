'use strict';

    let popupEngineer = document.querySelector('.popup_engineer_btn'), 
        popup = document.querySelector('.popup');

        
        function showModal(elem) {
            elem.style.display= 'block';
        }

        function closeModal(elem) {
            elem.style.display= 'none';
        }

        document.body.addEventListener('click', (e) => {
          let target = e.target;  
    
          if(target.classList.contains('popup_engineer_btn')) {
              showModal(popup);
          }
          console.log(target == 'strong');
          if(target.classList.contains('popup_close') || target.classList.contains('popup')) {
              console.log(popup);
              closeModal(popup);
          }

        
          


        });

        
        
      

    





