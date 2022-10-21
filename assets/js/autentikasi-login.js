const fetchUser = async () => {
	const id = localStorage.getItem("id");
	if (id) {
		const userById = fetch(
			"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users/"
		)
			.then((response) => response.json())
			.then((response) => {
				const user = response.find((element) => element.id == id);
				if (user.login) {
					alert("Anda sudah login");
					window.location.href = "index.html";
				}
			})
			.catch((error) => console.log(error.message));
	}
};

fetchUser();
