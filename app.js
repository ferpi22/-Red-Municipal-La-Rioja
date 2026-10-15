
// Data de los 18 Departamentos de La Rioja
const municipiosLaRioja = [
    { nombre: "Capital", cabecera: "La Rioja", intendente: "Armando Molina", poblacion: "~220.000" },
    { nombre: "Chilecito", cabecera: "Chilecito", intendente: "Rodrigo Brizuela y Doria", poblacion: "~50.000" },
    { nombre: "Arauco", cabecera: "Aimogasta", intendente: "Virginia López", poblacion: "~15.000" },
    { nombre: "Famatina", cabecera: "Famatina", intendente: "Alberto Godoy", poblacion: "~6.000" },
    { nombre: "Rosario Vera Peñaloza", cabecera: "Chepes", intendente: "Laura Carrizo", poblacion: "~14.000" },
    { nombre: "Chamical", cabecera: "Chamical", intendente: "Dora Rodríguez", poblacion: "~14.000" },
    { nombre: "General Felipe Varela", cabecera: "Villa Unión", intendente: "Yamil Sarruff", poblacion: "~10.000" },
    { nombre: "Sanagasta", cabecera: "Villa Sanagasta", intendente: "Federico Sbiroli", poblacion: "~3.000" },
    { nombre: "Castro Barros", cabecera: "Aminga", intendente: "Marcelo del Moral", poblacion: "~4.500" },
    { nombre: "General Belgrano", cabecera: "Olta", intendente: "Carlos Romero", poblacion: "~7.500" },
    { nombre: "General Juan Facundo Quiroga", cabecera: "Malanzán", intendente: "Ariel Bejarano", poblacion: "~4.000" },
    { nombre: "General Lamadrid", cabecera: "Villa Castelli", intendente: "Luis Orquera", poblacion: "~2.000" },
    { nombre: "General Ocampo", cabecera: "Villa Santa Rita de Catuna", intendente: "Jorge Salomón", poblacion: "~7.000" },
    { nombre: "General San Martín", cabecera: "Ulapes", intendente: "Uriel Pérez", poblacion: "~5.000" },
    { nombre: "General Ángel V. Peñaloza", cabecera: "Tama", intendente: "Ricardo Romero", poblacion: "~3.000" },
    { nombre: "Independencia", cabecera: "Patquía", intendente: "Eduardo de la Vega", poblacion: "~2.500" },
    { nombre: "San Blas de los Sauces", cabecera: "San Blas", intendente: "Antonio Sotomayor", poblacion: "~4.000" },
    { nombre: "Vinchina", cabecera: "Villa San José de Vinchina", intendente: "Adriana Olima", poblacion: "~2.500" }
];

// SPA Navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page-section').forEach(el => {
        el.style.display = 'none';
    });
    // Show target page
    document.getElementById('page-' + pageId).style.display = 'block';
    
    // Close mobile menu if open
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if(navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
    }
    
    window.scrollTo(0,0);
}

// Renderizar Grilla de Municipios
function renderMunicipios(data) {
    const grid = document.getElementById('gridMunicipios');
    grid.innerHTML = '';
    
    if(data.length === 0) {
        grid.innerHTML = '<div class="col-12 text-center py-5 text-muted">No se encontraron resultados.</div>';
        return;
    }

    data.forEach(m => {
        let col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="card bg-white p-4 h-100 shadow-sm muni-card">
                <div class="d-flex align-items-center mb-3">
                    <div class="muni-icon-box me-3 shadow-sm">
                        <i class="fa-solid fa-map-pin"></i>
                    </div>
                    <div>
                        <h5 class="fw-bold mb-0 text-dark">Dpto. ${m.nombre}</h5>
                        <small class="text-secondary fw-semibold">Cabecera: ${m.cabecera}</small>
                    </div>
                </div>
                <hr class="text-muted opacity-25">
                <div class="mb-2">
                    <small class="text-muted d-block text-uppercase" style="font-size:0.7rem;">Intendencia</small>
                    <span class="fw-medium"><i class="fa-solid fa-user-tie text-muted me-1"></i> ${m.intendente}</span>
                </div>
                <div>
                    <small class="text-muted d-block text-uppercase" style="font-size:0.7rem;">Población Est.</small>
                    <span class="fw-medium"><i class="fa-solid fa-users text-muted me-1"></i> ${m.poblacion} hab.</span>
                </div>
                <div class="mt-3 text-end">
                    <button class="btn btn-sm btn-outline-primary rounded-pill px-3">Ver portal <i class="fa-solid fa-arrow-right ms-1"></i></button>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// Filtro de Búsqueda
window.filtrarMunicipios = function() {
    const query = document.getElementById('searchMunicipio').value.toLowerCase();
    const filtrados = municipiosLaRioja.filter(m => 
        m.nombre.toLowerCase().includes(query) || 
        m.cabecera.toLowerCase().includes(query) || 
        m.intendente.toLowerCase().includes(query)
    );
    renderMunicipios(filtrados);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    // Ordenar alfabéticamente
    municipiosLaRioja.sort((a,b) => a.nombre.localeCompare(b.nombre));
    renderMunicipios(municipiosLaRioja);
});
