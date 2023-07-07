import Login from "./components/pages/Login";
import Singup from "./components/pages/Singup";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Toaster />
      {/* <Login /> */}
      <Singup />
    </div>
  );
};

export default App;
