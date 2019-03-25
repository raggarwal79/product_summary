import React, { Component } from 'react';
import {Row, Col, Collapse, Button} from 'react-bootstrap'
import {connect} from 'react-redux';

class PromoCode extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            showPromoCode: false,
            promoCode: ''
        };
    }

    toggleExpander = (key) => this.setState({ showPromoCode: !this.state.showPromoCode });

    applyCoupon = () => {
        const promoCode = this.state.promoCode;
        this.props.dispatch({
            type:'APPLY_PROMO',
            promoCode
            });
    };

    handlePromoChange = (event) => this.setState({promoCode: event.target.value });

    render() {
        const { showPromoCode, promoCode } = this.state;
        return (
            <div>
                <Button variant="link" onClick={() => this.toggleExpander('showPromoCode')}> {!showPromoCode ? <span>Apply promo code &#x2b;</span> : <span>Hide promo code &#8722;</span>}</Button>
                <Collapse in={showPromoCode}>
                    <div id="example-collapse-text">
                        <Row>
                            <Col sm={8}>
                                <input type="text" value={promoCode} onChange={(event) => this.handlePromoChange(event)} />
                            </Col>
                            <Col sm={2}>
                                <Button onClick={this.applyCoupon}>Apply</Button>
                            </Col>
                        </Row>
                    </div>
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


export default connect(mapStateToProps)(PromoCode);
