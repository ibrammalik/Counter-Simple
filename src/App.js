import React, { useEffect, useState } from "react";
import "./App.css";
import Toast from "react-bootstrap/Toast";
import Black from "./asset/images/black.png";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  const [show, setShow] = useState(() => {
    return false;
  });

  const [status, setStatus] = useState(() => {
    return "Jomblo";
  });

  const decrementCount = () => {
    const buttonContainerShaking = [{ transform: "translateX(-1em)" }, { transform: "translateX(1em)" }, { transform: "translateX(-1em)" }, { transform: "translateX(0)" }];
    const buttonContainerShakingtimer = { duration: 350, iterations: 1 };
    if (count === 0) {
      document.getElementById("button-container").animate(buttonContainerShaking, buttonContainerShakingtimer);
      setShow(true);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    count === 0 ? setStatus("Jomblo") : count === 1 ? setStatus("Berpasangan") : count <= 4 ? setStatus("Poligami") : setStatus("Di Luar Nalar !!");
  }, [count]);

  return (
    <div className="App">
      <div className="App-header">
        <h3>Pacar Kamu</h3>
        <div className="Button-container" id="button-container">
          <button onClick={decrementCount} className="Button" id="decrement-button">
            -
          </button>
          <span className="Count">{count}</span>
          <button onClick={incrementCount} className="Button">
            +
          </button>
        </div>
        <h3>Status Kamu : {status}</h3>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide className="position-fixed bottom-0 end-0 m-3">
          <Toast.Header>
            <img src={Black} className="rounded me-2" alt="" />
            <strong className="me-auto">Stop Anjayy!!</strong>
            <small>Just Now</small>
          </Toast.Header>
          <Toast.Body className="text-dark">Pacar Kamu Habis!!!</Toast.Body>
        </Toast>
      </div>
    </div>
  );
}

export default App;
