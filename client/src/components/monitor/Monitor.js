import axios from 'axios';
import React, { Component } from "react";

import Calculator from "./Calculator";
import ProductList from "../product/ProductList";

class Monitor extends Component {

    constructor(props) {
        super(props);
        this.state = { totalPrice: 0, orders: [] };
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this);
        this.cancelOrder = this.cancelOrder.bind(this);
        this.saveOrder = this.saveOrder.bind(this);
    }

    addOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        if (findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({ product: product, quantity: 1 });
        }
        const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
        this.setState({ totalPrice: totalPrice, orders: this.state.orders });
    }

    delOrder(product) {
        let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
        let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
        const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
        this.setState({ totalPrice: totalPrice, orders: resultOrder });
    }

    cancelOrder() {
        this.setState({ totalPrice: 0, orders: [] });
    }

    saveOrder() {
        const { totalPrice, orders } = this.state;
        if (orders.length > 0) {
            axios.post("http://localhost:3001/orders/", { orderedDate: new Date(), totalPrice, orders })
                .then(res => {
                    this.setState({ totalPrice: 0, orders: [] });
                })
            alert("บันทึกรายการสำเร็จ")
        } else {
            alert("กรุณาเลือกรายการสินค้าก่อนกดปุ่มยืนยัน")
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9 ">
                        <ProductList products={this.props.products} onAddOrder={this.addOrder} />
                    </div>
                    <div className="col-md-3">
                        <Calculator totalPrice={this.state.totalPrice} orders={this.state.orders}
                            onDelOrder={this.delOrder}
                            onCancelOrder={this.cancelOrder}
                            onSaveOrder={this.saveOrder} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;