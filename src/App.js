import './App.css';//Importando hoja de estilos.
import Testimonio from './components/Testimonio';//Importando el componente 'Testimonio' para poder renderizarlo.

//Creando el componente 'App' que va a renderizar todos los componente creados.
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>
        Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
      </h1>
      <Testimonio 
        nombre='Shawn Wang'
        pais='Singapur'
        imagen='shawn'
        cargo='Ingeniero de Software'
        empresa='Amazon'
        testimonio='Da miedo cambiar de carrera. Sola gane confianza en que podia codificar trabajando cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenia un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambio mi vida.'/>
        <Testimonio 
        nombre='Sara Chima'
        pais='Nigeria'
        imagen='sarah'
        cargo='Ingeniera de Software'
        empresa='ChatDesk'
        testimonio='freeCodeCamp fue la puerta de entrada en mi carrera como desarrollador de software. El plan de estudios bien estructurado llevo mis conocimientos de codificacion desde un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajp de desarrollo en una empresa increible.'/>
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de Software'
        empresa='Spotify'
        testimonio='Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedo. Estudiar JavaScript, asi como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniera de software en Spotify.'/>

      </div>
    </div>
  );
}

//Exportando dicho componente.
export default App;
