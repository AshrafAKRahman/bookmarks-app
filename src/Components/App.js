import "./App.css";
import Bookmarks from "./Bookmarks/Bookmarks";
import Greeting from "./Greeting/Greeting";
import Time from "./Time/Time";

function App() {
  return (
    <div className="app-wrapper">
      <div className="App">
        <Bookmarks />
        <Greeting />
        <Time />
      </div>
    </div>
  );
}

export default App;
