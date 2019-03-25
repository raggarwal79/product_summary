import React, { Component } from 'react';
import {Row, Col, Collapse, Button} from 'react-bootstrap'
import {connect} from 'react-redux';

class CartProduct extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            showItemInfo: false,
        };
    }

    toggleExpander = () => this.setState({ showItemInfo: !this.state.showItemInfo });

    render() {
        const { showItemInfo } = this.state;
        const { cartInfo } = this.props;

        return (
            <div>
                <Button variant="link" onClick={() => this.toggleExpander()}> {!showItemInfo ? <span>See item details &#x2b;</span> : <span>Hide item details &#8722;</span>}</Button>
                <Collapse in={showItemInfo}>
                    {
                        cartInfo && cartInfo !== null ?
                            (
                                <div id="cart-product">
                                    <Row>
                                        <Col sm={5}>
                                            <img src={cartInfo.url} className="product-image" alt="product-name" />
                                        </Col>
                                        <Col>
                                            {cartInfo.title}
                                            <br />
                                            <Row>
                                                <Col className="cart-amount">${cartInfo.newPrice}</Col>
                                                <Col>Qty: 1</Col>
                                            </Row>
                                            <Row>
                                                <Col className="product-old-price">${cartInfo.oldPrice}</Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            ) : <span>&nbsp;</span>
                    }

                </Collapse>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        cartInfo: state.CartReducer.cartInfo
    }
};


export default connect(mapStateToProps)(CartProduct);
