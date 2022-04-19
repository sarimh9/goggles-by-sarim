import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Results from "./Results";

// Switch = Routes
// Redirect = Navigate
export default function Routes() {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route
          exact
          path={["/search", "/images", "/news", "/videos", "/sarim"]}
        >
          <Results />
        </Route>
      </Switch>
    </div>
  );
}
