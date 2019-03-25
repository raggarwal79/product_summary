import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap'

export default class EstimatedTotal extends Component {

    render() {
        return (
            <Row className="cart-total">
                <Col sm={8}>
                    Est. total
                </Col>
                <Col sm={4}>
                    ${this.props.cartInfo ? this.props.cartInfo.total : 'NA'}
                </Col>
            </Row>
        );
    }
}
