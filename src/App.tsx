import { Route, Routes } from "react-router-dom";
import {
  EightHundredData,
  EightyData,
  FiftyData,
  FiveHundredData,
  HundredData,
  TenData,
  ThirtyData,
  ThreeHundredData,
  TwentyData,
  TwoHundredData,
} from "./pages";
import { Navbar } from "./components";
import { ThousandData } from "./pages/1440/thousandData";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/10" element={<TenData />} />
        <Route path="/20" element={<TwentyData />} />
        <Route path="/30" element={<ThirtyData />} />
        <Route path="/50" element={<FiftyData />} />
        <Route path="/80" element={<EightyData />} />
        <Route path="/100" element={<HundredData />} />
        <Route path="/210" element={<TwoHundredData />} />
        <Route path="/340" element={<ThreeHundredData />} />
        <Route path="/550" element={<FiveHundredData />} />
        <Route path="/890" element={<EightHundredData />} />
        <Route path="/1000" element={<ThousandData />} />
      </Routes>
    </>
  );
}

export default App;
