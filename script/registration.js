const registrationForm = document.querySelector(".registrationForm");
registrationForm.addEventListener('submit', event => {
    event.preventDefault();

    const formValue = validateForm();

    sendRegistrationRequest(JSON.stringify(formValue));
});

function sendRegistrationRequest(data) {
    fetch("http://localhost:3000/register", {
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
        window.alert("You have been registrated. Now you should log in.");
        window.location.assign("index.html");
    })
    .catch(er => console.log(er));
}