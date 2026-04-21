import { useState } from 'react';

function Ejercicio2() {

    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('¡Empieza a hacer clic!');

        const mensajes = [
        "¡Venga!",
        "¡Dale!",
        "¡Uno más!",
        "¡Así me gusta!",
        "¡Tú puedes!",
        "¡Un poquito más!",
        "¡Ufff!",
        "¡Me gusta!",
        "¡Toma Ya!",
        "¡Vamos campeón!",
        "¡Qué grande!",
        "¡Oh Yeah!",         
    ];
    
  const contarClick = () => {
    const nuevoContador = contador + 1;
    setContador(nuevoContador);
    const indiceAleatorio = Math.floor(Math.random() * mensajes.length);
    setMensaje(mensajes[indiceAleatorio]);
  };


  return (
    <>
        <header class="exercise-header">
            <h1>Ejercicio 2: Contador de Clics</h1>
            <p>Haz clic en el botón para incrementar el contador</p>
        </header>

        <main class="exercise-content">
            <section class="card text-center" aria-label="Control del contador de clics">
                <button class="btn" aria-label="Incrementar contador" onClick={contarClick}>Contar clics</button>
                <div id="contador" class="resultado" aria-label="Número de clics realizados" aria-live="polite">{contador}</div>
                <div id="dale" aria-live="polite">{mensaje}</div>
            </section>
        </main>

    </>
  );
}

export default Ejercicio2;