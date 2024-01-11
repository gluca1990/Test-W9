import './App.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.min.css';
import NetNavbar from './components/NetNavbar';
import NetFilmSaga from './components/NetFilmSaga';
import NetFooter from './components/NetFooter';

function App() {
  return (
    <div className="App bg-dark">
      <NetNavbar/>
      <NetFilmSaga/>
      <NetFooter/>

    </div>
  );
}

export default App;
