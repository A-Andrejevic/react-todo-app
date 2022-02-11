import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Tasks from "./Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
          <Tasks />
        </div>
      </div>
    </div>
  );
}

export default App;
