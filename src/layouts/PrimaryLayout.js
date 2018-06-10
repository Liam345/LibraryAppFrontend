import React from "react";
import { Switch, Route } from "react-router-dom";
import PrimaryHeader from "../ui/PrimaryHeader";
import BooksTable from "../pages/BooksTable";
import BooksOrder from "../pages/BooksOrder";
import Cart from "../pages/Cart";

const PrimaryLayout = ({ match }) => (
  <div>
    <main>
      <PrimaryHeader />
      <Switch>
        <Route path={`${match.path}/`} exact component={BooksOrder} />
        <Route path={`${match.path}/cart`} exact component={Cart} />
        <Route path={`${match.path}/app`} component={BooksTable} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
