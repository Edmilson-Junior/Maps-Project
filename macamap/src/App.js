import logo from './logo.svg';
import './One.css';

function App() {
  return (
    <div className="App">
      <header className="cabecalho">
        <form>
          <input type="text" className="CampoPesquisa" placeholder="Onde quer Chegar"></input>
          <input type="button" className="btnPesquisa"></input>
        </form>
      </header>

      <section className="componentOne">
        <button className="btn">
          <img src={logo}/>
        </button>

        <button className="btn">
          <img src={logo}/>
        </button>

        <button className="centro">
          <img src={logo}/>
        </button>

        <button className="btn">
          <img src={logo}/>
        </button>

        <button className="btn">
          <img src={logo}/>
        </button>

      </section>
    </div>
  );
}

export default App;
