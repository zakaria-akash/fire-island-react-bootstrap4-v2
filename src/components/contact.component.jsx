/* eslint-disable react/jsx-pascal-case */
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const handleSubmitChange = (values, postFeedback, resetFeedbackForm) => {
  postFeedback(
    values.firstName,
    values.lastName,
    values.telNum,
    values.email,
    values.agree,
    values.contactType,
    values.message
  );
  resetFeedbackForm();
};

const Contact = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            218/4, Babu Chowdhury Road
            <br />
            Madaripur Sadar, Madaripur-7900
            <br />
            Bangladesh
            <br />
            <i className="fa fa-phone fa-lg"></i>: +8801319321363
            <br />
            <i className="fa fa-fax fa-lg"></i>: +8801319321363
            <br />
            <i className="fa fa-envelope fa-lg"></i>:
            <a href="mailto:zakaria.93@yahoo.com"> zakaria.93@yahoo.com</a>
            <div className="col-auto">
              <a
                href="https://github.com/zakaria-akash"
                target="_blank"
                rel="noopener noreferrer"
              >
                © 2022 Zakaria Ibrahim
              </a>
            </div>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href={"tel:+85212345678"}
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a
              role="button"
              className="btn btn-info"
              href={"skype:zakaria.akash?call"}
            >
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href={"mailto:zakaria.93@yahoo.com"}
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us Your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form
            model="feedback"
            onSubmit={(values) =>
              handleSubmitChange(
                values,
                props.postFeedback,
                props.resetFeedbackForm
              )
            }
            postFeedback={props.postFeedback}
          >
            <Row className="form-group">
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".firstName"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstName"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 charactres ",
                    maxLength: "Must be 15 characters or less ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Control.text
                  model=".lastName"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastName"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 charactres ",
                    maxLength: "Must be 15 characters or less ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="telNum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                <Control.text
                  model=".telNum"
                  id="telNum"
                  name="telNum"
                  placeholder="Tel. Number"
                  className="form-control"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15),
                    isNumber,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telNum"
                  show="touched"
                  messages={{
                    required: "Required ",
                    minLength: "Must be greater than 2 numbers ",
                    maxLength: "Must be 15 numbers or less ",
                    isNumber: "Must be a number ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Control.text
                  model=".email"
                  id="email"
                  name="email"
                  placeholder="email"
                  className="form-group"
                  validators={{
                    required,
                    validEmail,
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: "Required ",
                    validEmail: "Invalid Email Address ",
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 6, offset: 2 }}>
                <div className="form-check">
                  <Label check>
                    <Control.checkbox
                      model=".agree"
                      name="agree"
                      className="form-check-input"
                    />{" "}
                    <strong>May we contact you?</strong>
                  </Label>
                </div>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <Control.select model=".contactType" name="contactType">
                  <option>Tel.</option>
                  <option>Email</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="message" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Control.textarea
                  model=".message"
                  id="message"
                  name="message"
                  rows="12"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
