
// let userName = document.getElementById("signup-name").value,
// userPhone=document.getElementById("signup-phone").value,
//  userEmail = document.getElementById("signup-email").value,
//  userPassword=document.getElementById("signup-password").value




// let signupBtn = document.querySelector(".btn-register")


// signupBtn.addEventListener("click",function(e){
//     e.preventDefault()
//     if(userName.value === "" || userPhone.value === "" || userEmail.value === "" ||userPassword.value === "")
//     {
//         alert("please fill all data ")
//     }
//     else{
//         // localStorage.setItem("username", userName.value)
//         // localStorage.setItem("phone", userPhone.value)
//         // localStorage.setItem("email", userEmail.value)
//         // localStorage.setItem("password", userPassword.value)



//         // ---------------------
//         console.log("the data is saved")
//         console.log(users)
//         setTimeout ( () => {
//             window.location = "homePage.html"
//         } , 1500)
//     }


// })
//-------------------------------------------
let signupBtn = document.querySelector(".btn-register");

signupBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Get form values
    let userName = document.getElementById("signup-name").value;
    let userPhone = document.getElementById("signup-phone").value;
    let userEmail = document.getElementById("signup-email").value;
    let userPassword = document.getElementById("signup-password").value;

    if (userName === "" || userPhone === "" || userEmail === "" || userPassword === "") {
        alert("Please fill in all fields.");
    } else {
        // Create user object
        let userObj = {
            userName: userName,
            userPhone: userPhone,
            userEmail: userEmail,
            userPassword: userPassword
        };

        // Get existing users data from local storage or initialize empty array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user data to the array
        users.push(userObj);

        // Save updated users array back to local storage
        localStorage.setItem("users", JSON.stringify(users));

        console.log("The data is saved.");

        setTimeout(() => {
            window.location = "products.html";
        }, 1500);
    }
});


//----------------------------------------


const container = document.querySelector(".container"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp = document.querySelector(".signup-link"),
      login = document.querySelector(".login-link");

    //   js code to show/hide password and change icon
    pwShowHide.forEach(showIcon =>{
        showIcon.addEventListener("click", ()=>{
            pwFields.forEach(pwField =>{
                if(pwField.type ==="password"){
                    pwField.type = "text";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })
                }else{
                    pwField.type = "password";

                    pwShowHide.forEach(icon =>{
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }
            }) 
        })
    })

    // js code to appear signup and login form
    signUp.addEventListener("click", ( )=>{
        container.classList.add("active");
    });
    login.addEventListener("click", ( )=>{
        container.classList.remove("active");
    });



