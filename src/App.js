import './App.css';
import Home from "./components/home.jsx";

function App() {
  const FontFace = () => {
    return(
        <div className="card">
            <div className="font-face-gm">
              <Home />
            </div>
        </div>
    )
  }
  
  return (
    <div className="App">
      <FontFace />
    </div>
  );
}

export default App;
