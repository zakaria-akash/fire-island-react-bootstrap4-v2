import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./header.component";
import Home from "./home.component";
import About from "./about.component";
import Menu from "./menu.component";
import Dishdetail from "./Dishdetail.component";
import Contact from "./contact.component";
import Footer from "./footer.component";

import DISHES from "../shared/dishes";
import COMMENTS from "../shared/comments";
import LEADERS from "../shared/leaders";
import PROMOTIONS from "../shared/promotions";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
      // selectedDish: null,
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }

  render() {
    // const dishToDisplayDetails = this.state.dishes.filter(
    //   (dish) => dish.id === this.state.selectedDish
    // )[0];
    const HomePage = () => {
      const featuredDish = this.state.dishes.filter((dish) => dish.featured)[0];
      const featuredPromotion = this.state.promotions.filter(
        (promotion) => promotion.featured
      )[0];
      const featuredLeader = this.state.leaders.filter(
        (leader) => leader.featured
      )[0];
      return (
        <Home
          dish={featuredDish}
          promotion={featuredPromotion}
          leader={featuredLeader}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
        />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.state.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
