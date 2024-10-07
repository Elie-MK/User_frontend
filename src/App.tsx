import { useSelector } from "react-redux";
import Registration from "./pages/Registration";
import { RootState } from "./store/store";
import Successfully from "./pages/Successfully";

function App() {
  const isConnected = useSelector((state: RootState) => state.connected);
  return <>{isConnected ? <Successfully /> : <Registration />}</>;
}

export default App;
