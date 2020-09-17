import React, { Component } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get("https://btpwr.sse.codesandbox.io/products").then((res) => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <br />
        <h2>Products</h2>
        <br />
        <Row>
          {products.map((product) => (
            <Col sm="4">
              <Card>
                <CardImg top width="100%" src={product.image} />
                <CardBody>
                  <CardTitle>{product.name.slice(0, 20)}</CardTitle>
                  <CardText>{product.description.slice(0, 70)}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(product)}>
                        Add to Cart
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Products;
