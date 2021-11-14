
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vincent" && password === "1234") {
        alert("Hi Vincent... Redirecting");
        window.location = "https://backtableweb.netlify.app/vincent.html"
    } 
    
    else if (username === "leon" && password === "5678") {
        alert("Hi Leon... Redirecting");
        window.location = "https://backtableweb.netlify.app/leon.html"
    } 
    else if (username === "somayina" && password === "9101112") {
        alert("Hi Somayina... Redirecting");
        window.location = "https://backtableweb.netlify.app/olivia.html"
    }
     else if (username === "leon" && password === "13141516") {
        alert("Hi Olivia... Redirecting");
        window.location = "https://backtableweb.netlify.app/olivia.html"
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
