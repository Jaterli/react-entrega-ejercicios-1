import { useState } from 'react';

function Ejercicio3() {
    const [texto, setTexto] = useState('');
    const [lista, setLista] = useState([]);

    const agregarElemento = () => {
        if (texto.trim() !== '') {
            setLista([...lista, texto.trim()]);
            setTexto('');
        }
    };

    const eliminarElemento = (index) => {
        setLista(lista.filter((_, i) => i !== index));
    };

    const vaciarLista = () => {
        setLista([]);
    };

    return (
    <>
        <header className="exercise-header">
            <h1>Ejercicio 3: Lista Dinámica</h1>
            <p>Agrega elementos a la lista o vacíala completamente</p>                  
        </header>

        <main className="exercise-content">
            <section className="card" aria-label="Controles de la lista dinámica">
          
                <div className="lista-controls">
                    <input 
                        type="text" 
                        placeholder="Escribe un elemento..." 
                        aria-label="Texto del nuevo elemento"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && agregarElemento()}
                    />
                    <div className="grid-2">
                        <button className="btn" aria-label="Agregar elemento a la lista" onClick={agregarElemento}>
                            Agregar
                        </button>
                        <button className="btn btn-danger" aria-label="Eliminar todos los elementos" style={{ display: 'none' }} onClick={vaciarLista}>
                            Vaciar Lista
                        </button>
                    </div>
                </div>
            </section>

            <section className="lista-container" aria-label="Lista de elementos">
                <ul id="listaDinamica" className="lista" aria-live="polite">
                    {lista.map((elemento, index) => (
                        <li key={index} className="lista-texto">
                            {elemento}
                            <button className="btn btn-danger" aria-label="Eliminar elemento" onClick={() => eliminarElemento(index)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    </>
  );
}

export default Ejercicio3;
