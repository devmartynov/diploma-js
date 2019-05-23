'use strict';

    let popupEngineer = document.querySelector('.popup_engineer_btn'), 
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
          
         let close = document.querySelector('strong');

          if(target === close || target.classList.contains('popup')) {
                        closeModal(popup);
                    }


        });

        
        
      

    





