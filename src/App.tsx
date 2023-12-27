import "./App.css";
import { Provider } from "react-redux";
import Rutas from "./routes/Rutas";
import { store } from "./app/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Rutas />
      </Provider>
    </>
  );
}

export default App;
