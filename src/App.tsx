import { Route, Routes } from "react-router-dom";
import { HundredData, TenData } from "./pages";
import { Navbar } from "./components";
import { ThousandData } from "./pages/thousandData/thousandData";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ten" element={<TenData />} />
        <Route path="/hundred" element={<HundredData />} />
        <Route path="/thousand" element={<ThousandData />} />
      </Routes>
    </>
  );
}

export default App;
