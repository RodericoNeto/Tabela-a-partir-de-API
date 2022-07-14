console.log("opa!")

const tabelao = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => {
    console.log(data)
    var tBody = document.querySelector("#tbody");
    data.map(user => {
        tBody.insertAdjacentHTML("beforeend", `<tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.address.street}</td>
        </tr>`);
    });

})