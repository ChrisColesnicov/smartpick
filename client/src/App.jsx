import { Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/Phones.css";
import "./styles/Compare.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
