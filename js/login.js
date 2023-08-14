

document.getElementById('submit-btn').addEventListener('click',function(){
    
    //get email
    const emailField = document.getElementById('user-email')
    const email = emailField.value

    //get password
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value

    //***DANGER : DO NOT VERIFY Email and Password on the client side..
    //verify email && password
    if(email !=="rezwan@gmail.com" && password !=="1234"){
        alert("Invalid email address & Password")
    }
    else if(email !=="rezwan@gmail.com"){
        alert("Invalid email address")
    }
    else if(password !=="1234"){
        alert("Invalid Password")
    }
    else{
        window.location.href = "bank.html"
    }



    
})