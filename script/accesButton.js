const token = localStorage.getItem('token');
console.log(token);

const loginBtn = document.querySelector('.goIn');
const registrationBtn = document.querySelector('.registration');
const profileBtn = document.querySelector('.profile');
const logOut = document.querySelector('.logOut');

function displayRegistrationButtons() {
    loginBtn.style.display = "block";
    registrationBtn.style.display = "block";
    profileBtn.style.display = "none";
    logOut.style.display = "none";
}

if (token) {
    loginBtn.style.display = "none";
    registrationBtn.style.display = "none";
    profileBtn.style.display = "block";
    logOut.style.display = "block";
}
else {
    displayRegistrationButtons();
}

logOut.addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    displayRegistrationButtons();
})