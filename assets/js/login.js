let getForm = document.querySelector("#form-login");
let getInputanEmail = document.querySelector("#email");
let getInputanPassword = document.querySelector("#password");

getForm.addEventListener("submit", (e) => {
	e.preventDefault();

	// Memasukkan Semua inputan form ke dalam Object
	let users = {
		userEmail: getInputanEmail.value,
		userPassword: getInputanPassword.value,
	};

	// fungsi untuk Get data Api
	const cekApi = async () => {
		let usersApi = "";
		let getDataApi = await fetch(
			"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users"
		);
		let getData = await getDataApi.json();
		getData.forEach((e) => {
			try {
				// Cek Data dari Api jika True Lanjut Masukkan Data
				if (users.userEmail == e.email && users.userPassword == e.password) {
					//Memasukkan data api ke variabel Object UsersApi
					usersApi = {
						userEmail: e.email,
						userPassword: e.password,
						userId: e.id,
					};
				}
			} catch (error) {
				console.log(error);
			}
		});

		// Validasi jika data tidak kosong login berhasil
		if (usersApi != "") {
			const editData = await fetch(
				"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/users/" +
					usersApi.userId,
				{
					method: "PUT",
					headers: {
						Accept: "application/json, text/plain, */*",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						login: true,
					}),
				}
			);
			localStorage.setItem("id", usersApi.userId);
			alert("login Berhasil");
			window.location.href = "index.html";
		} else {
			alert("login gagal");
		}
	};
	cekApi();
});
