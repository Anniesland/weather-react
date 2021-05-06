import './App.css';
import background from "./newGraphic.png";
import Weather from "./Weather";
import Forecast1 from "./Forecast1";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <div className="App">
      <div
        className="Background"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "inherit",
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
