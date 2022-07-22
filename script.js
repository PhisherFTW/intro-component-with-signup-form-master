let firstname = document.getElementById('first-name');
let lastname = document.getElementById('last-name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let button = document.getElementById('button');
let error1 = document.querySelector('.img1');
let error2 = document.querySelector('.img2');
let error3 = document.querySelector('.img3');
let error4 = document.querySelector('.img4');
let errormsg1 = document.querySelector('.errormsg1');
let errormsg2 = document.querySelector('.errormsg2');
let errormsg3 = document.querySelector('.errormsg3');
let errormsg4 = document.querySelector('.errormsg4');





firstname.placeholder = 'First name';
lastname.placeholder = 'Last name';
email.placeholder = 'Email Address';
password.placeholder = 'Password';
error1.style.display = 'none';
error2.style.display = 'none';
error3.style.display = 'none';
error4.style.display = 'none';
errormsg1.style.visibility = 'hidden';
errormsg2.style.visibility = 'hidden';
errormsg3.style.visibility = 'hidden';
errormsg4.style.visibility = 'hidden';
button.addEventListener('click',checkboxes)
function checkboxes () {
    var input = document.querySelector('#email').value;
    console.log('test')
    console.log(firstname.value)
    let i = 0;
    if (firstname.value == '') {
        error1.style.display = 'inline';
        errormsg1.style.visibility = 'visible';
    } else {
        error1.style.display = 'none';
        errormsg1.style.visibility = 'hidden';
    }
    if (lastname.value == '') {
        error2.style.display = 'inline';
        errormsg2.style.visibility = 'visible';
    } else {
        error2.style.display = 'none';
        errormsg2.style.visibility = 'hidden';
    }
    do{
        console.log(input)
        i++;
        if(input == '') {
            error3.style.display = 'inline';
            errormsg3.style.visibility = 'visible';
        } else if (input.includes('@')) {
            error3.style.display = 'none';
            errormsg3.style.visibility = 'hidden';
        } else {
            error3.style.display = 'inline';
            errormsg3.style.visibility = 'visible';
        }
    } while(i < 10)
    if (password.value == '') {
        error4.style.display = 'inline';
        errormsg4.style.visibility = 'visible';
    } else {
        error4.style.display = 'none';
        errormsg4.style.visibility = 'hidden';
    }
}