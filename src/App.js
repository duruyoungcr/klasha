import { useState } from "react";
import './App.css';
import Aside from './components/Aside';
import Main from './components/Main';
import Toggle from './components/Toggle';

function App() {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <div className="container flex min-w-full justify-between bg-white scrollbar-hide">
        <Aside toggle={toggle} handleToggle={handleToggle} />
        <Main />
        <Toggle handleToggle={handleToggle} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;
