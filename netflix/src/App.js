import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import NetNavbar from './components/NetNavbar';
import NetFilmSaga from './components/NetFilmSaga';
import NetFooter from './components/NetFooter';

function App() {
  return (
    <div className="App bg-dark">
      {/* Sono riuscito a fare il fetch e il passaggio della variabile per la ricerca tramite props ma non sono riuscito a ciclare l'array con un map per creare le immagini */}
      <NetNavbar/>
      <NetFilmSaga/>
      <NetFooter/>

    </div>
  );
}

export default App;
