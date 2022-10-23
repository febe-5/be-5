const url = window.location.search;
const query = new URLSearchParams(url);
const id = query.get("id");
const nama = document.getElementById("nama");
const pengalaman = document.getElementById("pengalaman");
const layanan = document.getElementById("layanan");
const jadwal = document.getElementById("jadwal");
const harga = document.getElementById("harga");

if (!id) {
	window.location.href = "list-psikolog.html";
}

fetch("https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/psikolog/" + id)
	.then((response) => response.json())
	.then((response) => {
		nama.innerHTML = "";
		pengalaman.innerHTML = "";
		layanan.innerHTML = "";
		jadwal.innerHTML = "";
		harga.innerHTML = "";

		nama.innerHTML = response.name;
		pengalaman.innerHTML = response.pengalaman;
		response.specialist.forEach((element) => {
			layanan.innerHTML += `<option value="${element}">${element}</option>`;
		});
		response.schedule.forEach((element) => {
			jadwal.innerHTML += `<option value="${element}">${element}</option>`;
		});
		harga.innerHTML = response.harga;
	})
	.catch((error) => console.log(error));

function bayar() {
	let linkZoom = confirm ("Pembayaran berhasil dilakukan, Silahkan klik link disamping.");
	if (linkZoom) {
		window.location="https://us04web.zoom.us/j/2515990968?pwd=ZjBFTmFaSnhZbklCYTZ1MUxmK3hRZz09";
	}
}