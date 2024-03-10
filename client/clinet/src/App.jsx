import { useState } from "react";
import axios from 'axios';

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e)=>{
    
    e.preventDefault();
    console.log("Submitting:", { email, password });
    axios.post("http://localhost:8000/LoginDB",{ email: email.trim(), password})
    .then(response => {
     console.log(response)
    })
    .catch(err => console.error(err));
  }

  return (
    <>
      <div>
      <h5>Login Page</h5>
          <form onSubmit={handleSubmit}>
            <label>
              Username:
              <input
                type="email"
                autoComplete="off"
                name ="email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                autoComplete="current-password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">
              Login
            </button>
          </form>
      </div>
    </>
  );
}

export default App;
