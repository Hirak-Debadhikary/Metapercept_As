import "./App.css";
import Navbar from "./Components/Navbar";
import TitleSection from "./Components/TitleSection";
import FetchProducts from "./Components/FetchProducts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleSection />
      <FetchProducts />
    </div>
  );
}

export default App;
