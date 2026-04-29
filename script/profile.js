const inputEmail = document.getElementById('email');
const inputName = document.getElementById('name');
const editButton = document.querySelector('.change');
const saveButton = document.querySelector('.save');
let userId;

function updateProfile(data) {
    const id = data.id;

    fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
           name: data.name,
        })
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(response => {
        inputName.setAttribute('disabled', 'true');
        saveButton.style.display = "none";
        editButton.style.display = "block";
        alert("Користувача оновлено");
    })
    .catch(er => console.log(er));
}

function getProfile() {
    fetch("http://localhost:3000/profile", {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(response => {
        console.log(response);
        inputEmail.value = response.user.email;
        inputName.value = response.user.name;
        userId = response.user.id;
    })
    .catch(er => {
        console.log(er);
        refreshToken();
    });
}

getProfile();

editButton.addEventListener('click', (event) => {
    event.preventDefault();

    inputName.removeAttribute('disabled');
    saveButton.style.display = "block";
    editButton.style.display = "none";
});

saveButton.addEventListener('click', (event) => {
    event.preventDefault();
    updateProfile({
        name: inputName.value,
        id: userId,
    });
});

function refreshToken() {
    fetch("http://localhost:3000/refresh", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('refreshToken')}`,
        },
    })
    .then(response => {
        if (!response.ok) {
            return response.text().then(text => { throw new Error(text) });
        }
        return response.json();
    })
    .then(response => {
        console.log(response);
        localStorage.setItem("token", response.token);
        getProfile();
    })
    .catch(er => {
        console.log(er);
    });
}