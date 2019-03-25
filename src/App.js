import React, { Component } from 'react';
import {Card, Row, Col, ListGroup} from 'react-bootstrap'
import {connect} from 'react-redux';
import axios from 'axios';
import './App.css';

import CartProduct from './components/CardProduct/CartProduct';
import PromoCode from './components/PromoCode/PromoCode';
import SubTotal from "./components/SubTotal/SubTotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import Taxes from "./components/Taxes/Taxes";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:8888/products.json')
        .then(res => {
          const cartInfo = res.data || [];
          this.props.dispatch({
            type:'SET_CART_ITEMS',
            cartInfo});
        })
  }

  render() {
    const {cartInfo} = this.props;
    return (
      <div className="home">
        <Row>
          <Col sm={8}>
            &nbsp;
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Body className='cart'>
                <ListGroup>
                  <ListGroup.Item>
                    <SubTotal cartInfo={cartInfo} />
                    <PickupSavings cartInfo={cartInfo} />

                    <Taxes cartInfo={cartInfo} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <EstimatedTotal cartInfo={cartInfo} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <CartProduct />
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <PromoCode />
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>


      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    cartInfo: state.CartReducer.cartInfo
  }
};


export default connect(mapStateToProps)(App);
