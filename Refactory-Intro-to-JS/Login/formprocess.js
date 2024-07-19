//We can access elements in the form using the form itself

//Login Form

const formAccess = () =>{
    const userName = document.userLoginForm.userName;
    const userPassword = document.userLoginForm.password;
    userName.focus();
}

//Signup Form Access
const signupFormAccess = () => {

    const signupName = document.signupForm.userName;
    const  signupEmail = document.signupForm.email;
    const signupPassword = document.signupForm.password;
    const userPhone =  document.signupForm.phone;

//Validation of elements
//Signup name
    let userNameStandard = /^[A-Za-z]+$/; //Validates text input field

    if (signupName.value.match(userNameStandard)){
        console.log(signupName.value);
        alert("Right Input");
        signupName.style.border = "2px solid green";
    }
    else {
        alert("Please provide a valid username");
        signupName.style.border = "2px solid red"
    }
//Signup email
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.test(signupEmail.value) == true){ //You dont have to put true, its the default value for the test statement
        alert("Correct Email");
        signupEmail.style.border = "2px solid green"
    }
    else{
        alert("wrong email");

    }

    //Validate password

    let passWord = /^\w{7,12}$/;
    if(signupPassword.value.match(passWord)){
        alert("Correct Password");
        signupPassword.style.border = "2px solid green";
    }
    else{
        alert("password must have characters between 7 to 12");
        signupPassword.style.border = "2px dotted red";
    }

    let phonenumber = /^+[0-9]{3}-[0-9]+$/



}

//Two Names Regex = /^(\w+ )+\w+$/; 
