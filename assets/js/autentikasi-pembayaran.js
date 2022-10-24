const fetchUserPayment = async () => {
	const id = localStorage.getItem("id");
	if (id) {
		const userById = fetch(
			"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users/"
		)
			.then((response) => response.json())
			.then((response) => {
				const user = response.find((element) => element.id == id);
				if (!user.login) {
					alert("Login terlebih dahulu");
					window.history.back();
				}
			})
			.catch((error) => console.log(error.message));
	} else {
		alert("Login terlebih dahulu");
		window.history.back();
	}
};

fetchUserPayment();
