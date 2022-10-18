/* eslint-disable no-useless-constructor */
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header.component";
import Home from "./home.component";
import About from "./about.component";
import Menu from "./menu.component";
import Dishdetail from "./Dishdetail.component";
import Contact from "./contact.component";
import Footer from "./footer.component";

import { addComment, fetchDishes } from "../redux/ActionCreators";
import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      const featuredDish = this.props.dishes.dishes.filter(
        (dish) => dish.featured
      )[0];
      const featuredPromotion = this.props.promotions.filter(
        (promotion) => promotion.featured
      )[0];
      const featuredLeader = this.props.leaders.filter(
        (leader) => leader.featured
      )[0];
      return (
        <Home
          dish={featuredDish}
          promotion={featuredPromotion}
          leader={featuredLeader}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <Dishdetail
          dish={
            this.props.dishes.dishes.filter(
              (dish) => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            (comment) => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
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
            component={() => <About leaders={this.props.leaders} />}
          />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
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

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    leaders: state.leaders,
    promotions: state.promotions,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
