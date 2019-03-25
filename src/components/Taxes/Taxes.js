import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'

export default class Taxes extends Component {

    render() {
        return (
            <Row>
                <Col sm={8}>Est. taxes & fees<br />(Based on 94085)</Col>
                <Col sm={4} className="cart-amount">${this.props.cartInfo ? this.props.cartInfo.taxes : 'NA'}</Col>
            </Row>
        );
    }
}
