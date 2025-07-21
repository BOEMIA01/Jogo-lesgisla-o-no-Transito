'use strict'
const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var claasName = document.bondy.claasName;
    if(claasName == "light-theme") {
        this.textcontent = "dark";
    }
    else {
        this.textcontent = "light";
    }
    console.log('current class name: ' + claasName);
});
