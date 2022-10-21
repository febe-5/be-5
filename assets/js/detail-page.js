let url = window.location.search;
let params = new URLSearchParams(url);
let id = params.get("id");

console.log(id);

fetch (url) {
    .then((response) => {
        return response.json
    })
} 