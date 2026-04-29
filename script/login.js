const loginForm = document.querySelector(".loginForm");
console.log(loginForm);
loginForm.addEventListener('submit', event => {
    event.preventDefault();

    const formValue = validateForm();

    sendLoginRequest(JSON.stringify(formValue));
});

function sendLoginRequest(data) {
    fetch("http://localhost:3000/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(response => {
        console.log(response, "response");
        const jwtToken = response;
        localStorage.setItem("token", jwtToken.token);
        localStorage.setItem("refreshToken", jwtToken.refreshToken);
        window.location.assign("index.html");
    })
    .catch(er => console.log(er));
}