import { useState } from 'react';

function Ejercicio7() {
  const [longitud, setLongitud] = useState(12);
  const [password, setPassword] = useState('...');
  const [error, setError] = useState('');

  const getRandomInt = (max) => {
    const randomArray = new Uint32Array(1);
    crypto.getRandomValues(randomArray);
    return randomArray[0] % max;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = getRandomInt(i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const generarPassword = () => {
    const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
    const numeros = '0123456789';
    const especiales = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const todosCaracteres = letrasMayusculas + letrasMinusculas + numeros + especiales;
    let passwordChars = [];
    
    // Asegurar al menos un carácter de cada tipo
    passwordChars.push(letrasMayusculas[getRandomInt(letrasMayusculas.length)]);
    passwordChars.push(letrasMinusculas[getRandomInt(letrasMinusculas.length)]);
    passwordChars.push(numeros[getRandomInt(numeros.length)]);
    passwordChars.push(especiales[getRandomInt(especiales.length)]);
    
    // Completar el resto
    for (let i = passwordChars.length; i < longitud; i++) {
      passwordChars.push(todosCaracteres[getRandomInt(todosCaracteres.length)]);
    }
    
    passwordChars = shuffleArray(passwordChars);
    return passwordChars.join('');
  };

  const generar = () => {
    if (longitud < 4 || longitud > 20) {
      setError('La longitud debe ser entre 4 y 20 caracteres');
      setPassword('');
    } else {
      setError('');
      setPassword(generarPassword());
    }
  };

  return (
    <>
        <header className="exercise-header">
            <h1>Ejercicio 7: Generador de Contraseñas Aleatorias</h1>
            <p>Genera contraseñas seguras y aleatorias con la longitud que elijas</p>
        </header>

        <main className="exercise-content">
            <section className="card" aria-label="Generador de contraseñas">
                <label htmlFor="longitud">Longitud de la contraseña
                <small id="longitud-help">(entre 4 y 20 caracteres)</small>:</label>
                <input type="number" min="4" max="20" aria-describedby="longitud-help"
                    value={longitud}
                    onChange={(e) => setLongitud(parseInt(e.target.value))}
                />               
                <div className="text-center">
                    <button className="btn" aria-label="Generar nueva contraseña" onClick={generar}>
                        Generar contraseña
                    </button>
                </div>
                <p>&nbsp;</p>
                <p>Contraseña generada:</p>
                <div className="resultado" aria-live="polite" role="status">
                    { error ? <span style={{ color: 'red', fontSize: '0.8em' }}>{error}</span> : password }
                </div>
            </section>
        </main>
    </>
  );
}

export default Ejercicio7;