window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = require('./parts/calc'),
        form = require('./parts/form'),
        glaz = require('./parts/glaz'),
        image = require('./parts/image'),
        modals = require('./parts/modals'),
        tabs = require('./parts/tabs'),
        timer = require('./parts/timer.js');

        
    calc();
    form();
    glaz();
    image();
    modals();
    tabs();
    timer();
   
});   

    


 


