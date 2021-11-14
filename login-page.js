
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Vincent" && password === "Big_Boy") {
        alert("Hi Vincent This is test for now");
        location.reload();
    if (username === "Olivia" && password === "binmanisepic23") {
        alert("Hi Vincent This is test for now");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
