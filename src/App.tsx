import React, { useState, useEffect } from "react";
import List from "./components/List";
import Form from "./components/Form";
import ToDo from "./components/ToDo";

function App() {
  const [ToDos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    const possibleItems: string | null = localStorage.getItem("savedToDos");

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const savedToDos = JSON.parse(possibleItems!);

    if (savedToDos) {
      setToDos(savedToDos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedToDos", JSON.stringify(ToDos));
  }, [ToDos]);

  function addToDo(toDo: string) {
    const newToDo = new ToDo(toDo);

    setToDos([...ToDos, newToDo]);
  }

  function deleteToDo(toDo: ToDo) {
    const filteredItems = ToDos.filter((toDos) => toDos.id !== toDo.id);

    setToDos(filteredItems);
  }
  return (
    <div className="App">
      <Form onClick={addToDo}></Form>

      <List onDelete={deleteToDo} ToDos={ToDos}></List>
    </div>
  );
}

export default App;
