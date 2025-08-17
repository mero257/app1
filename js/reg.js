let username = document.querySelector("#username")
let password = document.querySelector("#password")
let email = document.querySelector("#email")
let btn = document.querySelector("#sign_in")
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (username.value === "" || password.value === "" || email.value === "") {
        alert("Please complete entering the data")
    }
    else {
        localStorage.setItem("username", username.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setTimeout(() => {
            window.location = "login.html"
        }, 1500)
    }

})