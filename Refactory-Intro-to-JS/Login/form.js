let sub = () => {
    const userName = document.getElementById("userName");
    const password = document.getElementById("password");
    userName.focus();

    //$ nothing more nothing lesss
    //^ on the beginning of the value (the start character)
    //- range of acceptible characters
    // + one or more characters
    // the slashes indicate the limits



    let text = /^[A-Za-z]+$/;

    if(userName.value.match(text)){
       alert("Right Input");
       console.log(userName.value);
       userName.style.border = "5px solid green";
    }

    // \w means a word
    // * means is mandatory - expected and a must
    // . means any character
    // () used to set boundaries  of characters
    // {}  used to set range {number of characters we expect}


    //let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // if(userEmail.value.match(email)){
    //     alert("Right Input");
    //     console.log(userEmail.value);
    //     userEmail.style.border = "5px solid green";
    // }
    // else{
    //     alert("wrong input");
    //}

    let passwordStandard = /^[0-9a-zA-Z]+$/;

    if(password.value.match(passwordStandard)){
        alert("Right  password Input");
        console.log(password.value);
        password.style.border = "5px solid green";
    }
    else{
        alert("Please input the correct password");
    }

//checking  for empty fields
// if (userName.value == "" && password.value == ""){
//     alert("Empty fields not acceptable as valid input");
//    userName.style.border = "5px solid red";
//    password.style.border = "5px solid red";
//    userName.focus();
//    return false;
    
// }
};