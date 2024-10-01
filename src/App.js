import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/AboutPage/AboutPage";
// import Questions from "./pages/QuestionsPage/QuestionsPage";
import Teams from "./pages/TeamsPage/TeamsPage";
import Goals from "./pages/GoalPage/GoalsPage";
import NotFound from "./pages/NotFound";
import Profile from "./components/Profile/Profile";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/goals" component={Goals} />
          {/* <Route path="/questions" component={Questions} /> */}
          <Route path="*" component={NotFound} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
}

export default App;
