import {useState} from "react";
import List from "./components/List";
import Details from "./components/Details";
import './App.css'

function App() {
  const [selectedId, setUser] = useState({});
  const [info, setInfo] = useState({});

  function onSelectUser (event) {
    const selectedName = event.target.textContent;
    const selectedId = event.target.id;
    const info = {id: selectedId, name: selectedName};
    setUser(selectedId);
    setInfo(info);
  }

  return (
    <div className="App">
      <List selected = {selectedId} onSelectUser = {onSelectUser}/>
      {info.id ? <Details info={info}/> : null}
    </div>
  )
}

export default App
