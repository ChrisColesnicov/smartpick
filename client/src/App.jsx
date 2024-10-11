import { Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/Phones.css";
import "./styles/Compare.css";
import "./styles/Add.css";
import "./styles/Nav.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
