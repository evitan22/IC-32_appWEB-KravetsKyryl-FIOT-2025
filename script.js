fetch("http://localhost:3000/students", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Vasya", age: 19, id: 1 })
})
.then(response => response.json())
.then(response => console.log(response, "response"));

fetch("http://localhost:3000/students", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Olena", age: 85, id: 2 })
})
.then(response => {
    console.log(response, response.status)
    return response.json()
})
.then(response => console.log(response, "response"));

fetch("http://localhost:3000/students/1", {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
})
.then(response => response.json())
.then(response => console.log(response, "response"));

fetch("http://localhost:3000/students/2", {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: "Kyryl", age: 35, id: 2 })
})
.then(response => response.json())
.then(response => console.log(response, "response"));

try {
    fetch("http://localhost:3000/students")
    .then(response => response.json())
    .then(response => console.log(response, "response"))
} catch (error) {
    console.error("Помилка запиту:", error);
}