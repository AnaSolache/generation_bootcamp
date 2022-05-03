const url="https://jsonplaceholder.typicode.com/albums/1/photos"

const $cont = document.getElementById('cont');

fetch(url)
.then(resp => resp.json())
.then(datos =>{
    datos.forEach((x) => {

    const template =`
    <div class="col mb-4">
    <div class="card">
        <img src="${x.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title" style = "text-align = center">${x.id}</h5>
                <p class="card-text">${x.title}</p>
            </div>
        </div>
    </div>
    `;
    $cont.innerHTML += template
})
});