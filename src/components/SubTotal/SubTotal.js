import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'

export default class SubTotal extends Component {

    render() {
        return (
            <Row>
                <Col sm={8}>Subtotal</Col>
                <Col sm={4} className="cart-sub-total">${this.props.cartInfo ? this.props.cartInfo.subtotal : 'NA'}</Col>
            </Row>
        );
    }
}
