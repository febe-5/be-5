const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", async () => {
	const id = localStorage.getItem("id");
	const editData = await fetch(
		"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users/" + id,
		{
			method: "PUT",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				login: false,
			}),
		}
	);
	localStorage.clear();
	window.location.href = "login.html";
});

const fetchUser = async () => {
	const id = localStorage.getItem("id");
	const userById = fetch(
		"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users/"
	)
		.then((response) => response.json())
		.then((response) => {
			const user = response.find((element) => element.id == id);
			if (!user) {
				btnLogin.style.display = "block";
				btnLogout.style.display = "none";
			} else {
				if (!user.login) {
					btnLogin.style.display = "block";
					btnLogout.style.display = "none";
				} else {
					btnLogin.style.display = "none";
					btnLogout.style.display = "block";
				}
			}
		})
		.catch((error) => console.log(error.message));
};

fetchUser();
