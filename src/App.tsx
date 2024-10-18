import Navbar from "./components/Navbar.tsx";
import "./App.sass";
import Greeting from "./components/Greeting.tsx";
import Action1 from "./components/Action1.tsx";
import About from "./components/About.tsx";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Navbar />
        <Greeting />
        <Action1 />
        <About />
      </div>
    </div>
  );
}

export default App;
