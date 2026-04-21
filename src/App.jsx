import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Ejercicio1 from './components/Ejercicio1';
import Ejercicio2 from './components/Ejercicio2';
import Ejercicio3 from './components/Ejercicio3';
import Ejercicio4 from './components/Ejercicio4';
import Ejercicio5 from './components/Ejercicio5';
import Ejercicio6 from './components/Ejercicio6';
import Ejercicio7 from './components/Ejercicio7';
import Ejercicio8 from './components/Ejercicio8';
import Ejercicio9 from './components/Ejercicio9';

const ejercicios = {
  1: { title: "Cambiador de Color", desc: "Cambia el color de fondo aleatoriamente" },
  2: { title: "Contador de Clics", desc: "Cuenta clics con mensajes motivadores" },
  3: { title: "Lista Dinámica", desc: "Agrega y elimina elementos de una lista" },
  4: { title: "Búsqueda en Tiempo Real", desc: "Filtra elementos mientras escribes" },
  5: { title: "Calculadora", desc: "Operaciones básicas con validación" },
  6: { title: "Temporizador", desc: "Inicia, pausa y reinicia el tiempo" },
  7: { title: "Generador de Contraseñas", desc: "Crea contraseñas seguras" },
  8: { title: "Contador de Texto", desc: "Cuenta palabras y caracteres" },
  9: { title: "Lista de Tareas", desc: "Tareas con LocalStorage" }
};

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejercicio/1" element={<Ejercicio1 title={ejercicios[1].title} desc={ejercicios[1].desc} />} />
          <Route path="/ejercicio/2" element={<Ejercicio2 title={ejercicios[2].title} desc={ejercicios[2].desc} />} />
          <Route path="/ejercicio/3" element={<Ejercicio3 title={ejercicios[3].title} desc={ejercicios[3].desc} />} />
          <Route path="/ejercicio/4" element={<Ejercicio4 title={ejercicios[4].title} desc={ejercicios[4].desc} />} />
          <Route path="/ejercicio/5" element={<Ejercicio5 title={ejercicios[5].title} desc={ejercicios[5].desc} />} />
          <Route path="/ejercicio/6" element={<Ejercicio6 title={ejercicios[6].title} desc={ejercicios[6].desc} />} />
          <Route path="/ejercicio/7" element={<Ejercicio7 title={ejercicios[7].title} desc={ejercicios[7].desc} />} />
          <Route path="/ejercicio/8" element={<Ejercicio8 title={ejercicios[8].title} desc={ejercicios[8].desc} />} />
          <Route path="/ejercicio/9" element={<Ejercicio9 title={ejercicios[9].title} desc={ejercicios[9].desc} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function Home() {
  // Convertir el objeto a array para mapear
  const ejerciciosList = Object.entries(ejercicios).map(([num, data]) => ({
    num: parseInt(num),
    title: data.title,
    desc: data.desc
  }));

  return (
    <>
      <header className="exercise-header">
        <h1>Relación de 9 ejercicios con React (entrega 1)</h1>
        <p>Master en Desarrollo Web Full Stack</p>
      </header>
      
      <nav className='ejercicios-nav' aria-label="Ejercicios de JavaScript">
        <ul className="ejercicios-grid">
          {ejerciciosList.map(ej => (
            <li key={ej.num}>
              <Link to={`/ejercicio/${ej.num}`} className="ejercicio-card">
                <article>
                  <h2>Ejercicio {ej.num}</h2>
                  <h3>{ej.title}</h3>
                  <p>{ej.desc}</p>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default App;