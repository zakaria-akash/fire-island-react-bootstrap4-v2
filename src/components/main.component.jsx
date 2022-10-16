import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./header.component";
import Home from "./home.component";
import About from "./about.component";
import Menu from "./menu.component";
import Dishdetail from "./Dishdetail.component";
import Contact from "./contact.component";
import Footer from "./footer.component";

import { addComment } from "../redux/ActionCreators";

const Main = (props) => {
  // constructor(props) {
  //   super(props);
  // }

  // onDishSelect(dishId) {
  //   this.setState({
  //     selectedDish: dishId,
  //   });
  // }
  // const dishToDisplayDetails = this.state.dishes.filter(
  //   (dish) => dish.id === this.state.selectedDish
  // )[0];
  const HomePage = () => {
    const featuredDish = props.dishes.filter((dish) => dish.featured)[0];
    const featuredPromotion = props.promotions.filter(
      (promotion) => promotion.featured
    )[0];
    const featuredLeader = props.leaders.filter((leader) => leader.featured)[0];
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
          props.dishes.filter(
            (dish) => dish.id === parseInt(match.params.dishId, 10)
          )[0]
        }
        comments={props.comments.filter(
          (comment) => comment.dishId === parseInt(match.params.dishId, 10)
        )}
        addComment={props.addComment}
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
          component={() => <About leaders={props.leaders} />}
        />
        <Route
          exact
          path="/menu"
          component={() => <Menu dishes={props.dishes} />}
        />
        <Route path="/menu/:dishId" component={DishWithId} />
        <Route exact path="/contactus" component={Contact} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </div>
  );
};

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
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
