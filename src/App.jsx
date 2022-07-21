import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Enroute app for {import.meta.env.VITE_ORG_NAME}</h1>
      <p>Staging!</p>
      Changes!
    </div>
  );
}

export default App;
