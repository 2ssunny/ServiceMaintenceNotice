import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Service is under maintenance.</h1>
      <h2>The estimated service maintenance times are as follows:</h2>
      <h3>Start: {data.start}</h3>
      <h3>End: {data.end}</h3>
      <h4>
        The estimated service inspection time may change depending on the
        situation.
      </h4>
      <p>We apologize for the inconvenience.</p>
      <p>Please contact our administrator by clicking the link below.</p>
      <div>
        <a
          href="https://www.instagram.com/ju_ho23/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <p></p>
        <a href="mailto:eungseoni@gmail.com?subject=Inquiries regarding yagom5022.com website maintenance">
          Mail
        </a>
      </div>
    </div>
  );
}

export default App;
