import './App.css';

function App() {
    return (
        <div className="App">
            <div className="toDo-container">
                <h1>To Do List</h1>

                <form>
                    <input type="text" placeholder="Nova tarefa" />

                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>
    );
}

export default App;
