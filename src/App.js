import './App.css';
import background from "./newGraphic.png";
import Weather from "./Weather";
import Forecast1 from "./Forecast1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
    <div className="App">
     
      <div
        className="Background"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "600px",
          backgroundPosition: "center"
        }}
      >
        
        <Weather />
<hr />
        <Forecast1 />
      </div>
      </div>
    </div>
    
  );
}

export default App;
