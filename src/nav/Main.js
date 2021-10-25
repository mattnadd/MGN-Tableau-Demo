
import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route } from "react-router-dom";


import PoliceViz from "../components/policereport";
import CoffeeViz from "../components/coffeedashboard";





function Main() {
  return (
    <section class="tableau-view">
      <Route path="/" exact component={CoffeeViz} />
      <Route path="/policereport/" component={PoliceViz} />

      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;