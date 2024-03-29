let email = document.querySelector("#login-email")
let password = document.querySelector("#login-password")

let signinBtn = document.querySelector("#login-btn")

let getUser = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")



// signinBtn.addEventListener ("click" , function(e){
//     e.preventDefault()
//     if (email.value==="" || password.value===""){
//         alert("please fill data ")
//     } else {
//         if ( (getUser && getUser.trim() === email.value.trim() && getPassword && getPassword === password.value )  )
//         {
//             setTimeout ( () => {
//                 window.location = "homePage.html"
//             } , 1500)
//         } else {
//             if(getUser && getUser.trim() === email.value.trim())
//             {
//                 console.log("password is wrong ")
//             }
//             else if(getPassword && getPassword === password.value){
//                 console.log(" email is wrong ")
//             }
//             else{
//                 console.log("كله is wrong ")
//             }
            
//         }
//     }
// })

//-------------------------------


signinBtn.addEventListener("click", function(e) {
    e.preventDefault();

    // Get users data from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (email.value === "" || password.value === "") {
        alert("Please fill in all fields.");
    } 
    else if(email.value === "admin.gmail.com" || password.value === "admin"){
        setTimeout(() => {
            window.location = "admin.html";
        }, 1000);
    }
    else {
        let userFound = false;

        users.forEach(function(user) {
            if (user.userEmail === email.value && user.userPassword === password.value) {
                userFound = true;
                console.log("Login successful.");
                setTimeout(() => {
                    window.location = "products.html";
                }, 1000);
            }
        });

        if (!userFound) {
            console.log("Invalid email or password. Please try again.");
            alert("Invalid email or password. Please try again.")
        }
    }
});




