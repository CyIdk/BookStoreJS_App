window.onload = function(){
    // Email Validation
    var emailInput = document.getElementById("email");
    var email_error = document.getElementById("email.error");
    email_error.style.color="red";
    var emailChecker = false
    emailInput.addEventListener('input',function(){
        // Email Validation 
        // 1. Check if email is empty
        if(emailInput.value === ''){
            email_error.style.display = 'block';
            email_error.innerHTML = 'Email is required';
        }
        // 2. Check if emailprovided has an @ sign
        else if(emailInput.value.indexOf('@')=== -1) {
            email_error.style.display= 'block';
            email_error.innerHTML = 'Email must contain a @ character';
            
        }
        // 3. Check if emailprovided has an . sign
        else if (emailInput.value.indexOf('.')=== -1){
            email_error.style.display = 'block';
            email_error.innerHTML = 'Email must contain a .. character'
        }
        // 4.Otherwise approve login
        else {
            email_error.style.display = 'none';
            emailChecker = true
        }
    
    });

    // Password Validation
    let passwordInput =document.getElementById('password');
    let pass_error = document.getElementById('pass_error');
    let passChecker = false;
    passwordInput.addEventListener('input',function(){
        /**
         * > Check if the password field is left blank
         * > If the password field is left blank, use the style property to show the error element
         * > If the password field is left blank, set the innerHTML of the error element to 'Password is required'
         * 
         * Reference (style): https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
         * Reference (innerHTML): https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
         */
        if (passwordInput.value===''){
            pass_error.style.display = 'block';
            pass_error.innerHTML = 'Password is required'
        }
        /**
         * > Checking string length 
         * Reference (length): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
         */
        else if(passwordInput.value.length < 8){
            pass_error.style.display = 'block';
            pass_error.innerHTML= 'password must be at least 8 characters';
        }
        // Check if the password contains any numbers
        // Check if the password contains any numbers
        else if (passwordInput.value.match(/[0-9]/)=== null){
            pass_error.style.display = 'block';
            pass_error.innerHTML= 'Password must contain a special character';
        }
        else if (passwordInput.value.match(/A-Z]/)=== null){
            pass_error.style.display = 'block';
            pass_error.innerHTML= 'Password must contain a capital character';
        }
        else if (passwordInput.value.match(/[^a-zA-Z0=9]/)=== null){
            pass_error.style.display = 'block';
            pass_error.innerHTML= 'Password must contain a special character';
        }
        else{
            pass_error.style.display=' none';
            passChecker='true';
            
        }
    })
}