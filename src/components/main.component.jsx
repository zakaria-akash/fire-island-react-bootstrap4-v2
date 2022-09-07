import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./menu.component";

import DISHES from "../shared/DISHES";
import Dishdetail from "./Dishdetail.component";

import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({
      selectedDish: dishId,
    });
  }

  render() {
    const dishToDisplayDetails = this.state.dishes.filter(
      (dish) => dish.id === this.state.selectedDish
    )[0];
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              <h1>Fire Island</h1>
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <Dishdetail dish={dishToDisplayDetails} />
      </div>
    );
  }
}

export default Main;
