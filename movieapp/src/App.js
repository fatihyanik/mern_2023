import { useRef, useState } from 'react';
import './App.css';
import Login from './components/Login/Login';

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:
        "Password should be longer than 6 letters",
      label: "Password",
      pattern: `^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$`,
      required: true,
    },
  ];


  const usernameRef = useRef();

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        {inputs.map((input) => (
          <Login key={input.id} {...input} onChange={onChange} />
        ))}
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
