import React, { Component } from 'react';
import {Row, Col, Button, Tooltip, Overlay} from 'react-bootstrap'

export default class PickupSavings extends Component {

    constructor(...args) {
        super(...args);

        this.state = {
            showTooltip: false,
        };
    }

    attachRef = target => this.setState({ target });

    toggleTooltip = () => this.setState({ showTooltip: !this.state.showTooltip });

    render() {
        const { showTooltip, target } = this.state;
        return (
            <div>
                <Row>
                    <Col sm={8} ref={this.attachRef}>
                        <Button variant="link" onClick={() => this.toggleTooltip()}>Pickup savings</Button>
                    </Col>
                    <Col sm={4} className="cart-amount negative">-${this.props.cartInfo ? this.props.cartInfo.savings : 'NA'}</Col>
                </Row>

                <Overlay target={target} show={showTooltip} placement="bottom" rootClose={true} onHide={this.toggleTooltip}>
                    {props => (
                        <Tooltip className="cart-tooltip" {...props}>
                            Picking up your order in the store helps cut costs, and we pass the savings on to you.
                        </Tooltip>
                    )}
                </Overlay>
            </div>
        );
    }
}
