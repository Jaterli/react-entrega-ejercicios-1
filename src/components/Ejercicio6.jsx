import { useState, useEffect, useRef } from 'react';

function Ejercicio6() {
  const [tiempo, setTiempo] = useState({ horas: 0, minutos: 0, segundos: 0 });
  const [corriendo, setCorriendo] = useState(false);
  const [estado, setEstado] = useState('🔄 Reiniciado');
  const intervaloRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
    };
  }, []);

  const incrementarTiempo = () => {
    setTiempo(prev => {
      let { horas, minutos, segundos } = prev;
      segundos++;
      if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
          minutos = 0;
          horas++;
        }
      }
      return { horas, minutos, segundos };
    });
  };

  const iniciar = () => {
    if (!corriendo) {
      if (intervaloRef.current) clearInterval(intervaloRef.current);
      intervaloRef.current = setInterval(incrementarTiempo, 1000);
      setCorriendo(true);
      setEstado('▶ En marcha...');
    }
  };

  const pausar = () => {
    if (corriendo) {
      clearInterval(intervaloRef.current);
      setCorriendo(false);
      setEstado('⏸ Pausado...');
    }
  };

  const reiniciar = () => {
    pausar();
    setTiempo({ horas: 0, minutos: 0, segundos: 0 });
    setEstado('🔄 Reiniciado');
  };

  return (
    <>
        <header className="exercise-header">
            <h1>Ejercicio 6: Temporizador</h1>
            <p>
                Controla el tiempo con los botones de iniciar, pausar y reiniciar
            </p>
        </header>

        <main className="exercise-content">
            <section className="card" aria-label="Control del temporizador">
                <div className="temporizador" aria-live="polite" aria-label="Tiempo transcurrido">
                    {String(tiempo.horas).padStart(2, '0')}:
                    {String(tiempo.minutos).padStart(2, '0')}:
                    {String(tiempo.segundos).padStart(2, '0')}
                </div>

                <div id="estadoTemporizador" className="estado-temporizador" aria-live="polite" role="status">
                    {estado}
                </div>                
                
                <div className="button-group grid-3" role="group" aria-label="Controles del temporizador">
                    <button className="btn btn-success" aria-label="Iniciar temporizador" onClick={iniciar}>
                        Iniciar
                    </button>
                    <button className="btn btn-warning" aria-label="Pausar temporizador" onClick={pausar}>
                        Pausar
                    </button>
                    <button className="btn btn-danger" aria-label="Reiniciar temporizador" onClick={reiniciar}>
                        Reiniciar
                    </button>
                </div>
            </section>
        </main>
    </>


  );
}

export default Ejercicio6;
