import "./App.scss";
import "./index.css";
import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import MainPageNavigationTabs from "./components/MainPageNavigationTabs/MainPageNavigationTabs";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <div className="background-image">
      <MainPageNavigationTabs />
      <Header />
      <Introduction />
      <AboutUs />
    </div>
  );
}

export default App;
