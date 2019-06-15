import React from "react";
import ItemDetail from "./components/itemDetails";
import { Provider } from "react-redux";
import store from "./store";
import SportForm from "./components/sportForm";
import RealEstate from "./components/realEstate.js";
import Tools from "./components/tools.js";
import Header from "./components/header.js";
import Home from "./components/home.js";
import Footer from "./components/footer.js";
import UserItems from "./components/userItems.js";
import { BrowserRouter as Router, Route} from "react-router-dom";
import UserProfile from "./components/userProfile"

import Signup from "./components/signup";
import SignIn from "./components/signin";
import ItemsList from "./components/itemsList";
import CarsForm from "./components/carsForm";


class App extends React.Component {
  render() {
    // const { createUser } = this.props;
    return (
      <Provider store={store}>
        <Router>
        <Route path="/user" exact component={UserProfile} />
          <ItemDetail />
          <Header />
          <div className="maincontainer">
            <Route path="/" exact component={Home} />
            <Route path="/Category" component={ItemsList} />
            <Route path="/Tools" exact component={Tools} />
          <Signup createUser={Signup} />
          <ItemsList />
          <SportForm />
            <SignIn />
            <CarsForm />
          <RealEstate />
            <Tools />
            <UserItems />
          </div>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
