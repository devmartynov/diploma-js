/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let openCalc = document.querySelectorAll('.glazing_price_btn'),
        closeCalc = document.querySelector('.popup_calc_close'),
        popupCalc = document.querySelector('.popup_calc'),
        inputCalc = popupCalc.getElementsByTagName('input'),
        doMore = document.querySelectorAll('.balcon_icons img'),
        bigImg = document.querySelectorAll('.big_img img'),
        btnNext = document.querySelector('.popup_calc_button'),
        calcProfile = document.querySelector('.popup_calc_profile'),
        select = document.querySelector('#view_type'),
        chbox = document.querySelectorAll('.checkbox'),
        closeProfile = document.querySelector('.popup_calc_profile_close'),
        btnNextProfile = document.querySelector('.popup_calc_profile_button'),
        calcEnd = document.querySelector('.popup_calc_end'),
        closeEnd = document.querySelector('.popup_calc_end_close'),
        sendForm = calcEnd.getElementsByTagName('form')[0],
        calcObj = {};

    openCalc.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            popupCalc.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    closeCalc.addEventListener('click', function () {
        popupCalc.style.display = 'none';
        document.body.style.overflow = ' ';
        calcObj = {};
    });

    function inputphone(input) {
        input.onkeypress = function (e) {
            e = e || event;

            let chr = getChar(e);

            if (chr >= '0' && chr <= '9') {
                return true;
            } else {
                return false;
            }

        };
    }

    function getChar(event) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }

    inputphone(inputCalc[0]);
    inputphone(inputCalc[1]);

    function checkinput(input) {

    }

    let formBalcony = 'Тип1';

    doMore.forEach(function (item, key) {

        item.addEventListener('click', function (event) {
            event.preventDefault();

            doMore.forEach(function (item) {
                item.classList.remove('do_image_more');
            });
            event.target.classList.add('do_image_more');

            bigImg.forEach(function (item) {
                item.style.display = 'none';
                item.style.margin = 'auto';
            });
            bigImg[key].style.display = 'block';

            formBalcony = event.target.alt;
            return formBalcony;
        });

    });

    btnNext.addEventListener('click', function () {
        if (inputCalc[0].value != null && inputCalc[0].value != '' && inputCalc[1].value != null && inputCalc[1].value != '') {
            popupCalc.style.display = 'none';
            calcProfile.style.display = 'block';
            calcObj = {
                'Форма балкона': formBalcony,
                'Ширина': inputCalc[0].value,
                'Высота': inputCalc[1].value
            };
        }
    });

    chbox[0].addEventListener('change', function () {
        chbox[1].checked = false;
    });

    chbox[1].addEventListener('change', function () {
        chbox[0].checked = false;
    });

    closeProfile.addEventListener('click', function () {
        calcProfile.style.display = 'none';
        document.body.style.overflow = '';
        calcObj = {};
    });

    btnNextProfile.addEventListener('click', function () {
        if (chbox[0].checked == true || chbox[1].checked == true) {
            calcProfile.style.display = 'none';
            calcEnd.style.display = 'block';

            let selection;
            if (chbox[0]) {
                selection = chbox[0].parentElement.getElementsByTagName('span')[1].textContent;
            } else {
                selection = chbox[1].parentElement.getElementsByTagName('span')[1].textContent;
            }
            calcObj['Тип остекления'] = select.value;
            calcObj['Профиль'] = selection;
            statusMassage.innerHTML = '';
        }
    });

    inputphone(document.querySelector('.popup_calc_end').getElementsByTagName('input')[1]);

    closeEnd.addEventListener('click', function () {
        calcEnd.style.display = 'none';
        document.body.style.overflow = '';
        calcObj = {};
    });

    function clearInput(form = document) {
        form.querySelectorAll('input').forEach(function (item) {
            item.value = '';
            select.selectedIndex = 0;
        });
    }
    clearInput();

}
module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let massage = {
        loading: 'Идет отправка...',
        success: 'Форма успешно отправлена!',
        failure: 'Что-то пошло не так...'
    },
    form = document.querySelectorAll('.form'),
    statusMassage = document.createElement('div');

statusMassage.classList.add('status');

form.forEach(function (item) {

    item.addEventListener('submit', function (event) {
        event.preventDefault();
        item.appendChild(statusMassage);

        let formData = new FormData(item);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        formData.forEach(function (value, key) {
            calcObj[key] = value;
        });
        let json = JSON.stringify(calcObj);

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMassage.innerHTML = massage.loading;
            } else if (request.readyState == 4) {
                if (request.status == 200 && request.status < 300) {
                    statusMassage.innerHTML = massage.success;
                    clearInput();
                }
            } else {
                statusMassage.innerHTML = massage.failure;
            }
        });
    });

    function inputphone(input) {
        input.onkeypress = function (e) {
            e = e || event;

            let chr = getChar(e);


            return(chr >= '0' && chr <= '9');

        };
    }

    function getChar(event) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which);
    }
    inputphone(item.getElementsByTagName('input')[1]);
});

} 
module.exports = form;

/***/ }),

/***/ "./src/js/parts/glaz.js":
/*!******************************!*\
  !*** ./src/js/parts/glaz.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function glaz() {
    let menuGlaz = document.querySelector('.glazing_slider'),
    tabGlaz = document.querySelectorAll('.glazing_block'),
    tabContent = document.querySelectorAll('.glazing .container .row');

menuGlaz.addEventListener('click', function (event) {
    tabGlaz.forEach(function (item) {

        if (event.target && event.target.classList.contains('glazing_block') || item.children[1] || item.children[0]) {

            tabGlaz.forEach(function (items) {
                items.children[1].classList.remove('active');
            });
            event.target.classList.add('active');

            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = 'none';
                
                if (event.target == tabGlaz[i] || event.target == tabGlaz[i].children[1] || event.target == tabGlaz[i].children[0]) {
                    tabContent[i].style.display = 'block';
                    tabGlaz[i].children[1].classList.add('active');
                }
            }
        }
    });
});

}
module.exports = glaz;

/***/ }),

/***/ "./src/js/parts/image.js":
/*!*******************************!*\
  !*** ./src/js/parts/image.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function image() {
    let works = document.querySelector('.works'),
        links = works.getElementsByTagName('a'),
        cont = works.getElementsByClassName('container')[0],
        div = document.createElement('div'),
        bigImage = document.createElement('img'),
        ol = document.querySelector('.overlay');
        


    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (event) => {
        event.preventDefault();
        div.classList.add('popup_img');
        bigImage.src = links[i].getAttribute('href');
        bigImage.classList.add('myimage');
        div.appendChild(bigImage);
        cont.appendChild(div);
        document.body.style.overflow = "hidden";
        ol.style.display = 'block';
        div.style.display = 'block';
      });
    }

    div.addEventListener('click', (event) => {
      if (event.target != bigImage) {
        ol.style.display = 'none';
        div.style.display = 'none';
        document.body.style.overflow = "auto";
      }  
    });
}
module.exports = image;

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modals() {
    let engineer = document.querySelector('.header_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close');

    function formEng() {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    engineer.addEventListener('click', formEng);

    close[1].addEventListener('click', function () {
        popupEngineer.style.display = 'none';
        document.body.style.overflow = '';
    });

    function back(elem) {
        elem.addEventListener('click', function (event) {
            if (event.target == elem) {
                elem.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
    back(popupEngineer);

    setTimeout(() => {
        popupCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }, 40000);

    let callBtn = document.querySelectorAll('.phone_link'),
        popupCall = document.querySelector('.popup');

    function formCall(event) {
        popupCall.style.display = 'block';
        document.body.style.overflow = 'hidden';
        event.preventDefault();
    }

    for (let i = 0; i < 2; i++) {
        callBtn[i].addEventListener('click', formCall);
    }

    close[0].addEventListener('click', () => {
        popupCall.style.display = 'none';
        document.body.style.overflow = '';
    });

    back(popupCall);
}

module.exports = modals;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let menu = document.querySelector('.decoration_slider'),
        tab = document.querySelectorAll('.decoration_item div'),
        internal = document.querySelector('.internal'),
        external = document.querySelector('.external'),
        rising = document.querySelector('.rising'),
        roof = document.querySelector('.roof'),
        mass = [internal, external, rising, roof];

    menu.addEventListener('click', function (event) {
       
        tab.forEach(function (item) {

            if (event.target == item || event.target == item.children[0] || event.target.classList == 'decoration_item') {

                tab.forEach(function (item) {
                    item.classList.remove('after_click');
                });

                for (let i = 0; i < mass.length; i++) {
                    mass[i].style.display = 'none';
                    if (event.target == tab[i] || event.target == tab[i].children[0]) {
                        mass[i].style.display = 'block';
                        item.classList.add('after_click');
                    }
                }
            }
        });
    });
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = '2019-05-31';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60) % 24),
            days = Math.floor((t / 1000 / 60 / 60 / 24));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let days = document.querySelector('#days'),
            hours = document.querySelector('#hours'),
            minutes = document.querySelector('#minutes'),
            seconds = document.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            function editTime(elem, key) {
                if (elem <= 0) {
                    elem = '00';
                } else {
                    if (elem < 10) {
                        elem = '0' + elem;
                    }
                }
                key.textContent = elem;
            }
            editTime(t.days, days);
            editTime(t.hours, hours);
            editTime(t.minutes, minutes);
            editTime(t.seconds, seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
    setClock('.timer', deadline);
}
module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        glaz = __webpack_require__(/*! ./parts/glaz */ "./src/js/parts/glaz.js"),
        image = __webpack_require__(/*! ./parts/image */ "./src/js/parts/image.js"),
        modals = __webpack_require__(/*! ./parts/modals */ "./src/js/parts/modals.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");

        
    calc();
    form();
    glaz();
    image();
    modals();
    tabs();
    timer();
   
});   

    


 




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map