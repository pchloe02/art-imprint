import './App.css';
import Header from './component/Header';
import ArtImport from './component/ArtImport';
import LastAdded from './component/LastAdded';

function App() {
  return (
  <>
    <Header/>
    <div className='body-app'>
    <ArtImport/>
    <LastAdded/>
    </div>
  </>
  )
}

export default App;
