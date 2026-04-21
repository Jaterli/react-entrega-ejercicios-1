import { useState, useEffect } from 'react';

function Ejercicio9() {

  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  const [inputValue, setInputValue] = useState('');

  // Cargar tareas del localStorage al iniciar
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  // Guardar tareas cada vez que cambien
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (inputValue.trim() === '') {
      alert('Por favor, escribe una tarea');
      return;
    }
    
    setTareas([...tareas, { id: Date.now(), texto: inputValue, completada: false }]);
    setInputValue('');
  };

  const toggleCompletada = (id) => {
    setTareas(tareas.map(tarea =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  const limpiarCompletadas = () => {
    setTareas(tareas.filter(tarea => !tarea.completada));
  };

  return (
    <>
        <header className="exercise-header">
            <h1>Ejercicio 9: Lista de Tareas con LocalStorage</h1>
            <p>Gestiona tus tareas diarias. Las tareas se guardan automáticamente en tu navegador.</p>
        </header>

        <main className="exercise-content">
            <section className="card" aria-label="Formulario para agregar tareas">
                    <input type="text" 
                        value={inputValue}
                        placeholder="Nueva tarea..." 
                        aria-label="Descripción de la nueva tarea"
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && agregarTarea()}                           
                        autoComplete='off' />
                    
                    <div className="grid-2" role="group" aria-label="Controles de tareas">                           
                        <button type="button" className="btn" aria-label="Agregar nueva tarea" onClick={agregarTarea}>
                            Agregar tarea
                        </button>
                        <button type="button" className="btn btn-danger" aria-label="Eliminar todas las tareas completadas" onClick={limpiarCompletadas}>
                            Limpiar completadas
                        </button>
                    </div>
            </section>

            <section className="lista-container" aria-label="Lista de tareas">
                <ul id="listaTareas" className="lista" aria-label="Lista de tareas pendientes y completadas">
                    {tareas.map(tarea => (
                        <li key={tarea.id}>
                            <input
                            type="checkbox"
                            checked={tarea.completada}
                            onChange={() => toggleCompletada(tarea.id)}
                            />
                            <span className={`lista-texto ${tarea.completada ? 'tarea-completada' : ''}`}>
                            {tarea.texto}
                            </span>
                            <button 
                            className="btn-danger" 
                            onClick={() => eliminarTarea(tarea.id)}
                            style={{ padding: '5px 10px' }}
                            >
                            X
                            </button>
                        </li>
                    ))}    
                </ul>

                {tareas.length === 0 && (
                    <div className="text-center" style={{ color: '#666', padding: '2rem' }}>
                    No hay tareas. ¡Agrega una!
                    </div>
                )}

            </section>
        </main>

    </>
  );
}

export default Ejercicio9;