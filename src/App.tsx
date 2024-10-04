import Navbar from "./components/Navbar.tsx";
import "./App.sass";
import { useEffect } from "react";
import Head from "./components/Head.tsx";

function App() {
  useEffect(() => {
    document.body.classList.add("m-0");
  });
  return (
    <div className="App">
      <Navbar />
      <Head />
    </div>
  );
}

export default App;
