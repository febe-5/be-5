const url = window.location.search;
const query = new URLSearchParams(url);
const id = query.get("id");
const nama = document.getElementById("nama");
const namaModal = document.getElementById("nama-modal");
const pengalaman = document.getElementById("pengalaman");
const layanan = document.getElementById("layanan");
const jadwal = document.getElementById("jadwal");
const harga = document.getElementById("harga");
const layananModal = document.getElementById("layanan-modal");
const jadwalModal = document.getElementById("jadwal-modal");
const hargaModal = document.getElementById("harga-modal");

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
		namaModal.innerHTML = response.name;
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

function showModal() {
	namaModal.innerHTML = nama.innerHTML;
	layananModal.innerHTML = layanan.value;
	jadwalModal.innerHTML = jadwal.value;
	document.getElementById("metode-modal").innerHTML =
		document.getElementById("metode").value;
	document.getElementById("zoom-modal").innerHTML = nama.innerHTML;
}

function bayar() {
	let linkZoom = confirm(
		"Pembayaran berhasil dilakukan, Silahkan klik link disamping."
	);
	if (linkZoom) {
		window.location =
			"https://us04web.zoom.us/j/2515990968?pwd=ZjBFTmFaSnhZbklCYTZ1MUxmK3hRZz09";
	}
}
