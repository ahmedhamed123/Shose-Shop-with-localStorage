document.addEventListener("DOMContentLoaded", function() {
    let resetBtn = document.getElementById("reset-password");
    let email = document.querySelector("#login-email");
    let password = document.querySelector("#login-password");
    const pwShowHide = document.querySelectorAll(".showHidePw");
    const pwFields = document.querySelectorAll(".password");

    pwShowHide.forEach(showIcon => {
        showIcon.addEventListener("click", () => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";
                    showIcon.classList.replace("uil-eye-slash", "uil-eye");
                } else {
                    pwField.type = "password";
                    showIcon.classList.replace("uil-eye", "uil-eye-slash");
                }
            });
        });
    });

    // ------------------------------

    resetBtn.addEventListener("click", (e) => {
        e.preventDefault();

        let newPassword = password.value;
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(u => u.userEmail === email.value);
        if (user) {
            user.userPassword = newPassword;
            localStorage.setItem("users", JSON.stringify(users));

            alert("The password has been changed.");
            setTimeout(() => {
                window.location = "register.html";
            }, 1000);
        } else {
            alert("User not found. Please enter a valid email.");
        }
    });
});
