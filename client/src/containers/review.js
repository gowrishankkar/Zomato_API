import React, { Component } from "react";
import styles from "./style.css";
import {
  Navbar,
  Jumbotron,
  Container,
  Card,
  Button,
  CardText,
  CardHeader,
  CardBody,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";

class Review extends Component {
  state = {
    reviews: [],
    data: []
  };

  componentDidMount() {
    const { data } = this.props.location;

    console.log(data);
    this.setState({ data: data });
    axios
      .get("http://localhost:5000/reviews", {
        params: { res_id: data.res_id }
      })
      .then(res => {
        console.log(res.data.user_reviews);
        this.setState({ reviews: res.data.user_reviews });
      })

      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <h3>Zomato API</h3>
        </Navbar>
        <Jumbotron>
          <Container>
            <CardHeader>
              <h3>{this.state.data.name}</h3>
            </CardHeader>

            {/* {console.log(data)} */}
            {this.state.reviews.map((data, index) => {
              return (
                <Card key={index} style={styles.card}>
                  <CardHeader>
                    <b>{data.user.name}</b>
                    <Badge color="success" style={styles.badge}>
                      Ratings : {data.rating}
                    </Badge>
                  </CardHeader>

                  <CardBody>
                    <CardText>{data.review_text}</CardText>
                    <CardText>
                      <small className="text-muted">
                        {data.review_time_friendly}
                      </small>
                    </CardText>
                  </CardBody>
                </Card>
              );
            })}
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Review;
