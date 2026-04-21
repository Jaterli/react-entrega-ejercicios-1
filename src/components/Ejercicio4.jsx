 
import { useState } from 'react';

const Ejercicio4 = () => {
    const [filtro, setFiltro] = useState('');

    const elementos = [
        "React",
        "Angular",
        "Vue.js",
        "Django",
        "Spring Boot",
        "Laravel",
        "Flask",
        "Express.js",
        "ASP.NET Core",
        "Ruby on Rails"
    ];  

    const elementosFiltrados = elementos.filter(elemento =>
        elemento.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
            <header class="exercise-header">
                <h1>Ejercicio 4: Filtro de Búsqueda en Tiempo Real</h1>
                <p>Escribe en el campo de búsqueda para filtrar los elementos de la lista en tiempo real</p>
            </header>

            <main class="exercise-content">
                <section class="card" aria-label="Filtro de búsqueda">
                    <label for="busqueda" class="search-label">
                        Empieza a escribir para filtrar la lista:
                    </label>
                    <input type="text" 
                        class="search-input"
                        placeholder="Buscar..." 
                        autocomplete="off"
                        aria-label="Campo de búsqueda"
                        value={filtro}
                        onChange={(e) => setFiltro(e.target.value)} />
                </section>

                <section class="lista-container" aria-label="Lista de elementos">
                    <ul class="lista">
                        {elementosFiltrados.length > 0 ? (
                            elementosFiltrados.map((elemento, index) => (
                                <li key={index}>{elemento}</li>
                            ))
                        ) : (
                            <div id="noResultados" class="no-results" style={{ display: 'none' }} aria-live="polite">
                                No se encontraron resultados para tu búsqueda
                            </div>                
                        )}
                    </ul>
                </section>
            </main>

        </>
    );
}

export default Ejercicio4;