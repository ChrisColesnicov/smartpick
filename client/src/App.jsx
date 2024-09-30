import { Outlet } from "react-router-dom";

import "./styles/App.css";
import "./styles/Phones.css";

function App() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default App;
