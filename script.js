

let nameError = document.getElementById('nameError');
let phoneError = document.getElementById('phoneError');
let emailError = document.getElementById('emailError');
let messageError = document.getElementById('messageError');
let submitError = document.getElementById('submitError');



function validateName(){
    let name = document.getElementById('contactName').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;

    }

    if(name < 5){
        nameError.innerHTML = 'Write full Name';
        return false;

    }
    else{
        nameError.innerHTML = '';
    return true;
    }


}

function validatePhone(){
    let phone = document.getElementById('contactPhone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone is required';
        return false;

    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone Number should be 10 digits';
        return false;

    }

    if(!phone.match(/[0-9]*/)){
        phoneError.innerHTML = 'Invalid Phone number';
        return false;

    }

    else{
        phoneError.innerHTML = '';
    return true;
    }


}

function validateEmail(){
    let email = document.getElementById('contactEmail').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;

    }

    if(!email.match(/[A-Za-z]+\.[0-9]*[@][a-z]*[\.][a-z]{2,4}/)){
        emailError.innerHTML = 'Email invalid';
        return false;

    }
    else{
        emailError.innerHTML = '';
    return true;
    }
}

    function validateMessage(){
        let message = document.getElementById('contactMessage').value;
    
        if(message.length == 0){
            messageError.innerHTML = 'Enter Your Message';
            return false;
    
        }
    
        if(message.length < 20){
            messageError.innerHTML = 'Message should be 20 characters long';
            return false;
    
        }
        else{
            messageError.innerHTML = '';
        return true;
        }

    }

    function validateForm(){


        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
            submitError.innerHTML = "Please Enter all the details";
            return false;
        }

        else{
            messageError.innerHTML = '';
        return true;
        }



    }


