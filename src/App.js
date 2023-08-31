import React, { useState } from "react";
import { Button, Alert, ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./component/style.css";

function App() {
  const [now, setNow] = useState(0);

  setTimeout(() => {
    now < 100 && setNow(now + 2);
  }, 1000);
  return (
    <div className="main">
      <Button variant="warning">Add Animal</Button>
      <Alert variant="success">Successfully added the user!</Alert>
      <Alert variant="danger">Network is down. Please contact Admin.</Alert>
      <ProgressBar variant={now < 50 ? "danger" : "success"} now={now} />
      <br />
      <Alert variant="warning">Complete your test before 1 pm</Alert>
      <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={70} />
    </div>
  );
}

export default App;