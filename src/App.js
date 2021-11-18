import "./App.css";
import Routes from "./routes/Routes";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Routes />
      </AppContextProvider>
    </div>
  );
}

export default App;
