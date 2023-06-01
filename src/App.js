
import Row from './Row';
import './App.css';
import request from './request';
function App() {
  return (
    <div className="App">
      <h1 className='head'>Netflix</h1>
      <Row className='head' title="Netflix Orginals" fetchUrl={request.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Action Movies" fetchUrl={request.fetchActionMovie}/>
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovie}/>
      <Row title="Romantic Movies" fetchUrl={request.fetchRomanceMovie}/>
      <Row title="Documentry" fetchUrl={request.fetchDocumentaryMovie}/>
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovie}/>
      
    
    </div>
  );
}

export default App;
