import "./App.css";
import img1 from "./images/Saly-42.png";
import img2 from "./images/Saly-31.png";

function App() {
  return (
    <div className="main">
      <h1>Standard</h1>
      <div className="container">
        <div className="card">
          <img src={img1} alt="calender" />
          <h4>Fast & Easy</h4>
          <p>
            AVIEW gurantees a 24-hour turnaround on subtitle and 48 hours on
            dubbed content.
          </p>
        </div>
        <div className="card">
          <img src={img2} alt="flexible" className="hand-img" />
          <h4>Flexible</h4>
          <p>
            We offer a personalized payment plan and trailor our process to your
            needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
