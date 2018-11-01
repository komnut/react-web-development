import axios from 'axios';
import React, { Component } from 'react';

import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ProductList from "../../components/product/ProductList";

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = { products: null };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/products")
            .then(res => {
                this.setState({ products: res.data })
            });

    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <ProductList products={this.state.products} />
                </div>
                <Footer company="Olanlab" email="olan@olanlab.com" />
            </div>
        );
    }
}

export default Product;
