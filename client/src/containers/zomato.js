import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Navbar,
  Form,
  FormGroup,
  Button,
  Input,
  Container,
  Table,
  Row,
  Col,
  Badge
} from "reactstrap";

class Zomato extends Component {
  state = {
    withoutDelivery: [],
    OnlineDelivery: [],
    city: ""
  };

  handleCity = event => {
    this.setState({
      city: event.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.city);
    if (this.state.city === "") {
      alert("enter city");
    } else {
      axios
        .get("http://localhost:5000/search", {
          params: { city: this.state.city }
        })
        .then(res => {
          res.data.map(value => {
            // console.log(value.R.res_id);
            if (value.has_online_delivery === 0) {
              this.setState({
                withoutDelivery: [
                  ...this.state.withoutDelivery,
                  {
                    name: value.name,
                    rating: value.user_rating.aggregate_rating,
                    res_id: value.R.res_id
                  }
                ]
              });
            } else {
              this.setState({
                OnlineDelivery: [
                  ...this.state.OnlineDelivery,
                  {
                    name: value.name,
                    rating: value.user_rating.aggregate_rating,
                    res_id: value.R.res_id
                  }
                ]
              });
            }
          });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <h3>Zomato API</h3>
        </Navbar>
        <Jumbotron>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Col>
                  <Input
                    name="city"
                    id="city"
                    placeholder="Enter City"
                    selected={this.state.city}
                    onChange={this.handleCity}
                    value={this.state.value}
                  />
                </Col>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            <Row>
              <Col>
                <h5>Online Delivery</h5>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Restaurents</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.OnlineDelivery.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th>
                            <Link
                              to={{
                                pathname: "/review",
                                data: data // your data array of objects
                              }}
                            >
                              {data.name}
                            </Link>
                          </th>
                          <th>
                            <Badge color="success">{data.rating}</Badge>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
              <Col>
                <h5>No Online Delivery</h5>
                <Table hover>
                  <thead>
                    <tr>
                      <th>Restaurents</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.withoutDelivery.map((data, index) => {
                      return (
                        <tr key={index}>
                          <th>
                            <Link
                              to={{
                                pathname: "/review",
                                data: data // your data array of objects
                              }}
                            >
                              {data.name}
                            </Link>
                          </th>

                          <th>
                            <Badge color="success">{data.rating}</Badge>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Zomato;
