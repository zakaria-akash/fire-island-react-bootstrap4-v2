import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./header.component";
import Home from "./home.component";
import Menu from "./menu.component";
import Dishdetail from "./Dishdetail.component";
import Footer from "./footer.component";

import DISHES from "../shared/DISHES";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // selectedDish: null,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }

  render() {
    const dishToDisplayDetails = this.state.dishes.filter(
      (dish) => dish.id === this.state.selectedDish
    )[0];
    const HomePage = () => <Home />;
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>
        {/* <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <Dishdetail dish={dishToDisplayDetails} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;
