const resultCarousel = document.getElementById("result-carousel");
const btnLogin = document.getElementById("btn-login");
const btnLogout = document.getElementById("btn-logout");

btnLogout.addEventListener("click", () => {
	localStorage.clear();
	window.location.href = login.html;
});

const fetchApi = async () => {
	resultCarousel.innerHTML = "";
	try {
		const fetching = await fetch(
			"https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/psikolog"
		);
		const datas = await fetching.json();

		let temp = 0;

		datas.forEach((data) => {
			if (data.pengalaman > 5) {
				if (temp == 0) {
					resultCarousel.innerHTML += tampilDataActive(data);
					temp++;
				} else {
					resultCarousel.innerHTML += tampilData(data);
				}
			}
		});
	} catch (error) {
		console.log(error.message);
	}
};

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

fetchApi();

function tampilData(data) {
	return `<div class="carousel-item" data-bs-interval="5000">
  <div class="row bg-light align-items-center p-5">
    <div class="col-sm-7">
      <img
        src="assets/images/user.png"
        width="150px"
        class="img-thumbnail"
        alt=""
      />
    </div>
    <div class="col-sm-5 text-start">
      <h4>${data.name}</h4>
      <p>Pengalaman : <span>${data.pengalaman} Tahun</span></p>
      <div>
        <a href="detail-psikolog.html?id=${data.id}" class="btn btn-primary" type="button">
          Konsultasi Sekarang
        </a>
      </div>
    </div>
  </div>
</div>`;
}

function tampilDataActive(data) {
	return `<div class="carousel-item active" data-bs-interval="5000">
  <div class="row bg-light align-items-center p-5">
    <div class="col-sm-7">
      <img
        src="assets/images/user.png"
        width="150px"
        class="img-thumbnail"
        alt=""
      />
    </div>
    <div class="col-sm-5 text-start">
      <h4>${data.name}</h4>
      <p>Pengalaman : <span>${data.pengalaman} Tahun</span></p>
      <div>
        <a href="detail-psikolog.html?id=${data.id}" class="btn btn-primary" type="button">
          Konsultasi Sekarang
        </a>
      </div>
    </div>
  </div>
</div>`;
}
