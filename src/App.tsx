import Navbar from "./components/Navbar.tsx";
import "./App.sass";
import { useEffect } from "react";
import Greeting from "./components/Greeting.tsx";
import Action1 from "./components/Action1.tsx";

function App() {
    useEffect(() => {
        document.body.classList.add("m-0");
    });
    return (
        <div className="App">
            <div className="app-container">
                <Navbar />
                <Greeting />
                <Action1 />

            </div>
        </div>
    );
}

export default App;
