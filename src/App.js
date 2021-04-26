import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Read react docs" />
      <Todo text="Drink some coffee" />
    </div>
  );
}

export default App;
