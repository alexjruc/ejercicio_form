const formUser = document.querySelector("#formUser");

const users = [
	{
		username: "brayan",
		useremail: "brayan@gmail.com",
		age: 22,
	},
	{
		username: "stiven",
		useremail: "stiven@gmail.com",
		age: 23,
	},
	{
		username: "estefania",
		useremail: "estefania@gmail.com",
		age: 24,
	},
];

// const users = []


formUser.addEventListener("submit", function (e) {
	e.preventDefault();

	const username = e.target.username.value.trim();
	const useremail = e.target.useremail.value.trim();
	
	if (!username || !useremail)
		return Swal.fire("Todos los campos son necesarios");

	let user = {
		username,
		useremail,
	};

	users.push(user);

	drawUser(users);

	formUser.reset();

	deleteUsers();
});

function drawUser(array) {
	let html = "";

	for (const { username, useremail } of array) {
		html += `
		<div class="user">
			<h3>nombre: ${username}</h3>
			<p>correo: ${useremail}</p>
			<button class="btn--delete">Eliminar</button>
		</div>
		`;
	}

	const usersHTML = document.querySelector(".users");
	usersHTML.innerHTML = html;

}
drawUser(users);


function deleteUsers() {
	
	const deleteButtons = document.querySelectorAll(".btn--delete")
	//const user = document.querySelectorAll(".user")

	for (let i = 0; i < deleteButtons.length; i++) {
		deleteButtons[i].addEventListener("click", function (){
			//user[i].style.display = "none";
			users.splice(i, 1);
			drawUser(users)
		} )
	}
}
deleteUsers();




