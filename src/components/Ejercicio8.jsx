import { useState } from 'react';

function Ejercicio8() {
  const [texto, setTexto] = useState('');

  const contarCaracteres = () => {
    return texto.replace(/[\s\n\r]/g, '').length;
  };

  const contarPalabras = () => {
    if (texto.trim() === '') return 0;
    return texto.trim().split(/\s+/).length;
  };

  const limpiar = () => {
    setTexto('');
  };

  return (
    <>
        <header className="exercise-header">
            <h1>Ejercicio 8: Contador de Palabras y Caracteres</h1>
            <p>Escribe o pega tu texto para ver las estadísticas en tiempo real</p>
        </header>

        <main className="exercise-content">
            <section className="card" aria-label="Contador de texto interactivo">
                <div className="text-input-area">
                    <label htmlFor="texto">Área de texto para analizar</label>
                    <textarea 
                        id="texto" 
                        rows="6" 
                        placeholder="Escribe tu texto aquí..." 
                        aria-label="Escribe o pega tu texto para contar palabras y caracteres"
                        value={texto}
                        onChange={(e) => setTexto(e.target.value)}
                    ></textarea>
                </div>
                <div className="stats-container" style={{ marginTop: '15px' }} aria-live="polite">
                    <p>
                        <strong>Caracteres (sin espacios):</strong> 
                        <span className="stat-value"> {contarCaracteres()}</span>
                    </p>
                    <p>
                        <strong>Palabras:</strong> 
                        <span className="stat-value"> {contarPalabras()}</span>
                    </p>
                </div>
                <div className="text-center" style={{ marginTop: '15px' }}>
                    <button className="btn btn-secondary" value="Limpiar texto" aria-label="Limpiar el área de texto" onClick={limpiar}>
                        Limpiar texto
                    </button>
                </div>

            </section>
        </main>
    </>
   );
}

export default Ejercicio8;