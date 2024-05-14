import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Autocross from "./pages/Autocross";
import Membership from "./pages/Membership";
import ShowNShine from "./pages/ShowNShine";

function App() {
  return (
    <Router>
      {/* Routes to different pages */}
      <Routes>
        {/* Home page */}
        <Route exact path="/" element={<Homepage />}></Route>
        {/* Autocross*/}
        <Route exact path="/autocross" element={<Autocross />}></Route>
        {/* Membership */}
        <Route exact path="/membership" element={<Membership />}></Route>
        {/* Show-n-Shine */}
        <Route exact path="/shownshine" element={<ShowNShine />}></Route>
        {/* In Memoriam */}
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;
