import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h3>Principal</h3>
      <ul>
        <li>
          <Link to={"usuarios"}>Usuarios</Link>
        </li>
      </ul>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
