import React from "react";
import { Switch, Route } from "react-router-dom";
import PrimaryHeader from "../ui/PrimaryHeader";
import BooksTable from "../pages/BooksTable";
import BooksOrder from "../pages/BooksOrder";
import BooksCart from "../pages/BooksCart";
import Checkout from "../pages/Checkout";
import Login from "../components/Login";
import Signup from "../components/Signup";

const PrimaryLayout = ({ match }) => (
  <div>
    <main>
      <PrimaryHeader />
      <Switch>
        <Route path={`${match.path}/`} exact component={BooksOrder} />
        <Route path={`${match.path}/login`} exact component={Login} />
        <Route path={`${match.path}/signup`} exact component={Signup} />
        <Route path={`${match.path}/cart`} exact component={BooksCart} />
        <Route path={`${match.path}/app`} component={BooksTable} />
        <Route path={`${match.path}/checkout`} component={Checkout} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
