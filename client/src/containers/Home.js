import React, { Component } from "react";
import Header from "../components/Header";
import Monitor from "../components/monitor/Monitor";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { productsFetch } from "../actions/index";

class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.productsFetch();
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Olanlab" email="olan@olanlab.com" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { products: state.products };
}

// State คือค่าที่อยู่ใน Store
// Props คือค่าจะเอาใช้ใน Component
export default connect(
  mapStateToProps,
  { productsFetch }
)(Home);
