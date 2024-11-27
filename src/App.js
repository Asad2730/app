import { useState } from "react";
import Login from "./modal/login";
import SignUp from "./modal/signup";

function App() {

  const [model, setModel] = useState({
    login: false,
    signup: false
  });

  return (
    <div className="flex w-screen h-screen justify-center items-center p-4">
      <div className="grid grid-cols-1 gap-2 p-2">
        <button className="bg-blue-500 text-white"
          onClick={() => setModel({ ...model, login: true, signup: false })}
        >
          Signup
        </button>

        <button className="bg-blue-500 text-white"
          onClick={() => setModel({ ...model, login: false, signup: true })}
        >
         Login
        </button>
      </div>

      <Login isOpen={model.login} onClose={() => setModel({ ...model, login: false })} />
      <SignUp isOpen={model.signup} onClose={() => setModel({ ...model, signup: false })} />
    </div>
  );
}

export default App;
