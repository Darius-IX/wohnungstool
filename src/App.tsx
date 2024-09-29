import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddFlat from "./components/AddFlat/AddFlat";
import Home from "./components/Home/Home";

function App() {
  // return (
  //   <div>
  //     <div>works</div>
  //     <div>as well</div>
  //   </div>
  // );
  return (
    <div className="bg-gradient-to-r from-sky-400 to-sky-600 h-screen">
      <nav>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/hinzufuegen" element={<AddFlat></AddFlat>}></Route>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
