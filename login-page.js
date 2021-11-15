
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vincent" && password === "1324") {
        alert("Hi Vincent... Redirecting");
        window.location = "https://backtableweb.netlify.app/vincent.html"
        loginErrorMsg.style.opacity = 0;
    } 
    
    else if (username === "leon" && password === "8257") {
        alert("Hi Leon... Redirecting");
        window.location = "https://backtableweb.netlify.app/leon.html"
    } 
    else if (username === "somayina" && password === "1234") {
        alert("Hi Somayina... Redirecting");
        window.location = "https://backtableweb.netlify.app/somyinia.html"
    }
     else if (username === "olivia" && password === "4321") {
        alert("Hi Olivia... Redirecting");
        window.location = "https://backtableweb.netlify.app/olivia.html"
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }
})
