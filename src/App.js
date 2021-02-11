import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { Loader, Header, Footer } from "./components";
import "./styles/index.scss";

const HomeLazy = lazy(() => import("./pages/Home/Home"));

function App() {
  return (
    <div className="app">
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
