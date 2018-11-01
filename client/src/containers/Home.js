import axios from 'axios';
import React, { Component } from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";

import '../App.css'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { products: "" };
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
                <Monitor products={this.state.products} />
                <Footer company="Olanlab" email="olan@olanlab.com" />
            </div>
        );
    }
}

export default Home;
