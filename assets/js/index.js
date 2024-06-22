import propiedadesAlquiler from "./propiedades_alquiler.js"
import propiedadesVenta from "./propiedades_venta.js"

const tresAlquiler = propiedadesAlquiler.slice(0, 3)
const tresVenta = propiedadesVenta.slice(0, 3)

const contenedorAlquiler = document.getElementById('contenedor-alquiler')
const contenedorVenta = document.getElementById('contenedor-venta')

const renderHTML = (propiedades, contenedor) => {
    contenedor.innerHTML = ''
    for (const propiedad of propiedades) {
        contenedor.innerHTML += `
            <div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${propiedad.nombre}</h5>
                        <p class="card-text">${propiedad.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} habitaciones | <i class="fas fa-bath"></i> ${propiedad.baños} baños</p>
                        <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>
                        <p class="${propiedad.fumar ? 'text-success' : 'text-danger'}">${propiedad.fumar ? "<i class='fas fa-smoking'></i> Permitido fumar" : "<i class='fas fa-smoking-ban'></i> No se permite fumar"}</p>
                        <p class="${propiedad.mascotas ? 'text-success' : 'text-danger'}">${propiedad.mascotas ? "<i class='fas fa-paw'></i> Mascotas permitidas" : "<i class='fas fa-ban'></i> No se permiten mascotas"}</p>
                    </div>
                </div>
            </div>`
    }
}


const renderAlquiler = () => {
    renderHTML(tresAlquiler, contenedorAlquiler)
}
const renderVenta = () => {
    renderHTML(tresVenta, contenedorVenta)
}

document.addEventListener('DOMContentLoaded', () => {
    renderAlquiler()
    renderVenta()
})