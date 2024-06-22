import propiedadesAlquiler from "./propiedades_alquiler.js"

const contenedor = document.querySelector('#contenedor')
const renderHTML = () => {
    for (const propiedad of propiedadesAlquiler) {
        contenedor.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src=${propiedad.src}>
                        <div class="card-body">
                            <h5 class="card-title">${propiedad.nombre}</h5>
                            <p>${propiedad.descripcion}</p>
                            <p><i class="fas fa-map-marker-alt location-icon"></i> ${propiedad.ubicacion}</p>
                            <p><i class="fas fa-bed" aria-hidden="true"></i> ${propiedad.habitaciones} habitaciones | <i class="fas fa-bath" aria-hidden="true"></i> ${propiedad.baños} baños</p>
                            <p><i class="fas fa-dollar-sign" aria-hidden="true"></i> ${propiedad.costo}</p>
                            <p class="${propiedad.fumar ? 'text-success' : 'text-danger'}">${propiedad.fumar ? "<i class='fas fa-smoking'></i> Permitido fumar" : "<i class='fas fa-smoking-ban'></i> No se permite fumar"}</p>
                            <p class="${propiedad.mascotas ? 'text-success' : 'text-danger'}">${propiedad.mascotas ? "<i class='fas fa-paw'></i> Mascotas permitidas" : "<i class='fa-solid fa-ban'></i> No se permiten mascotas"}</p>
                        </div>
                </div>
            </div>`
    }
}


renderHTML()