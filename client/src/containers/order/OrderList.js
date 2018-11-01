import React, { Component } from 'react';

class OrderList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const orders = this.props.orders;
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.showOrders(orders)}
                </div>
            </div>
        );
    }
}

export default OrderList;