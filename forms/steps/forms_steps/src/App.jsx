import { useState } from "react";
import './App.css'
import Form from "./components/Form";
import Table from "./components/Table";

function App() {

  const initialTrainings = [
    {id: 1, date: "01.01.21", distance: 12},
    {id: 2, date: "01.01.22", distance: 23},
    {id: 3, date: "01.01.23", distance: 34},
  ];

  const [trainings, setTrainings] = useState(initialTrainings);

  const handleAdd = (trainingToAdd) => {
    setTrainings((prevTrainings) => {
      const ind = prevTrainings.findIndex((item) => item.date === trainingToAdd.date);
      if (ind !== -1) {
        const newTrainings = [...prevTrainings];
        newTrainings[ind].distance += trainingToAdd.distance;
        return newTrainings;
      } else {
        return [...prevTrainings, trainingToAdd].sort((a, b) => new Date(a.date) - new Date(b.date));
      }
    });
  }

  const handleRemove = (idToRemove) => {
    setTrainings((prevTrainings) => prevTrainings.filter(({id}) => id !== idToRemove));
  }

  return (
    <div className="App">
      <Form onSubmit={handleAdd}/>
      <Table trainings={trainings} onRemove={handleRemove}/>
    </div>
  )
}

export default App;
