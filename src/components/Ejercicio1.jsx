import { useState, useEffect } from 'react';

function Ejercicio1(props) {
    const [colorActual, setColorActual] = useState('#FFFFFF');

    useEffect(() => {
        const divContainer = document.querySelector('.container');
        
        // Asignar id al container si no tiene
        if (divContainer && !divContainer.id) {
            divContainer.id = 'ejercicio-1';
        }

    }, []);

    function getRandomColor() {    
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
        
    const cambiarColor = () => {
        const nuevoColor = getRandomColor();
        setColorActual(nuevoColor);
        document.body.style.backgroundColor = nuevoColor;
    };

    const restablecerColor = () => {
        setColorActual('#FFFFFF');
        document.body.style.backgroundColor = '#FFFFFF';
    };

    return (
        <>
            <header className="exercise-header">
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </header>

            <main className="exercise-content">
                <section className="card text-center" aria-label="Control del cambiador de color">
                    <div className="color-controls grid-2" role="group" aria-label="Controles para cambiar el color de fondo">
                        <button className="btn" aria-label="Generar color aleatorio" onClick={cambiarColor}>
                            Cambiar Color
                        </button>
                        <button className="btn btn-secondary" aria-label="Restablecer color de fondo a blanco" onClick={restablecerColor}>
                            Restablecer
                        </button>
                    </div>
                    
                    <div className="color-info resultado" aria-live="polite" aria-label="Color actual del fondo">
                        { colorActual }
                    </div>
                </section>
            </main>
        </>
    );
}

export default Ejercicio1;