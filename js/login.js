let username = document.querySelector("#username")
let password = document.querySelector("#password")
let btn = document.querySelector("#sign_in")
let getusername = localStorage.getItem("username")
let getpassword = localStorage.getItem("password")
console.log(getpassword)
console.log(getusername)
btn.addEventListener('click', function (e) {
    e.preventDefault()
    if (getusername == null && getpassword == null) {
        alert("please sign up first")
        setTimeout(() => {
            window.location = "reg.html"
        }, 1500)
    }
    else if (getusername === username.value && getpassword === password.value) {
        setTimeout(() => {
            window.location = "index.html"
        }, 1500)
        
    }
    else {
        if (username.value == "" || password.value == "") {
            alert("Please complete entering the data")
        }
        else if (getusername !== username.value || getpassword !== password.value) {
            alert("Please enter correct username and password")
        }
    }
})