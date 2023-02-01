import "./App.css";
import Bookmarks from "./Bookmarks/Bookmarks";
import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Todo from "./Todo/Todo";

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">
        <Bookmarks />
        <Greeting />
        <Time />
        <Todo />
      </div>
    </div>
  );
}

export default App;
