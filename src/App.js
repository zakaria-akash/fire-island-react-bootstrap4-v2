import "./App.css";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/menu.component";

import DISHES from "./shared/DISHES";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"><h1>Fire Island</h1></NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
