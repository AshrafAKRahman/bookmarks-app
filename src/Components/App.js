import "./App.css";
import Bookmarks from "./Bookmarks/Bookmarks";
import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";
import Todo from "./Todo/Todo";

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">
        <div className="item1">
          <Bookmarks />
        </div>
        <div className="item2">
          <Greeting />
        </div>
        <div className="item3">
          <Time />
        </div>
        <div>
          <Todo className="item4" />
        </div>
      </div>
    </div>
  );
}

export default App;
