import React from "react";
import FindTalentIT from "./components/FindTalentIT";
import FindTalentSales from "./components/FindTalentSales";
import FindTalentCreative from "./components/FindTalentCreative";
import FindTalentWriting from "./components/FindTalentWriting";
import FindWorkSales from "./components/FindWorkSales";
import FindWorkCreative from "./components/FindWorkCreative";
import FindWorkIT from "./components/FindWorkIT";
import FindWorkWriting from "./components/FindWorkWriting";
import Homepage from "./components/Homepage";
import LoginScreen from "./components/LoginScreen";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUpPage from "./components/signUpPage";
import Test from "./components/test";
import FindTalentITTable from "./components/FindTalentITTable";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/find-talent-it/table">
            <FindTalentITTable/>
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/find-work-it">
            <FindWorkIT />
          </Route>
          <Route path="/find-work-creative">
            <FindWorkCreative />
          </Route>
          <Route path="/find-work-sales">
            <FindWorkSales />
          </Route>
          <Route path="/find-work-writing">
            <FindWorkWriting />
          </Route>
          <Route path="/find-talent-it">
            <FindTalentIT />
          </Route>
          <Route path="/find-talent-creative">
            <FindTalentCreative />
          </Route>
          <Route path="/find-talent-sales">
            <FindTalentSales />
          </Route>
          <Route path="/find-talent-writing">
            <FindTalentWriting />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
