let listPsikolog = document.querySelector("#content");
const url = "https://634d3cccacb391d34a979eb9.mockapi.io/api/konsul/psikolog";

getDataPsikolog = async () => {
    const response = await fetch(url);
    const psikolog = await response.json();
    console.log(psikolog);

    psikolog.forEach((list) => {
        listPsikolog.innerHTML += `
        <div class="col-lg-3 col-sm-6 mb-3" id="content">
            <div class="card">
                <div class="card-body">
                    <div class="text-center">
                        <img src="user.png" width="100" height="100" class="rounded-circle" alt="${list.name}">
                        <h5 class="mt-3 mb-1">${list.name}</h5>
                        <p class="m-2">${list.specialist}</p>
                        <a href="#" class="btn btn-sm btn-outline-primary" onClick="addDetail(${list.id})">Pilih</a>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

getDataPsikolog();


function addDetail(id) {
    console.log(id);
}