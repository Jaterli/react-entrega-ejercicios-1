import { useState } from 'react';

function Ejercicio5() {
    
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState('');

    const obtenerNumeros = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
        setError('Por favor, ingrese números válidos');
        setResultado(null);
        return null;
    }

    setError('');
    return { n1, n2 };
    };

    const sumar = () => {
    const nums = obtenerNumeros();
    if (nums) setResultado(nums.n1 + nums.n2);
    };

    const restar = () => {
    const nums = obtenerNumeros();
    if (nums) setResultado(nums.n1 - nums.n2);
    };

    const multiplicar = () => {
    const nums = obtenerNumeros();
    if (nums) setResultado(nums.n1 * nums.n2);
    };

    const dividir = () => {
    const nums = obtenerNumeros();
    if (nums) {
        if (nums.n2 === 0) {
        setError('No se puede dividir por cero');
        setResultado(null);
        } else {
        setResultado(nums.n1 / nums.n2);
        }
    }
    };

    return (
        <>
            <header className="exercise-header">
                <h1>Ejercicio 5: Calculadora Sencilla</h1>
                <p>Ingresa dos números y selecciona la operación matemática que deseas realizar</p>
            </header>

            <main className="exercise-content">
                <section className="card" aria-label="Calculadora de operaciones básicas">
                    <div className="grid-2">
                        <input type="number" id="num1" placeholder="Número 1" aria-label="Primer número" step="any" value={num1} onChange={(e) => setNum1(e.target.value)} />
                        <input type="number" id="num2" placeholder="Número 2" aria-label="Segundo número" step="any" value={num2} onChange={(e) => setNum2(e.target.value)} />
                    </div>
                    <div className="grid-4" role="group" aria-label="Operaciones matemáticas">
                        <button className="btn" aria-label="Sumar" onClick={sumar}>
                            Sumar +
                        </button>
                        <button className="btn" aria-label="Restar" onClick={restar}>
                            Restar -
                        </button>
                        <button className="btn" aria-label="Multiplicar" onClick={multiplicar}>
                            Multiplicar ×
                        </button>
                        <button className="btn" aria-label="Dividir" onClick={dividir}>
                            Dividir ÷
                        </button>
                    </div>
                    
                    <div aria-label="Resultado de la operación">
                        Resultado:
                    </div>
                    <div className="resultado" aria-live="polite" role="status">
                        {error ? <span style={{ color: 'red', fontSize: '0.8em' }}>{error}</span> : resultado !== null ? <span>{resultado}</span> : 'N/A'}
                    </div>
                </section>
            </main>

        </>
    );
}

export default Ejercicio5;