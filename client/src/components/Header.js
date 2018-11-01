import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    // this.state = {date : new Date()};
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img style={{ height: 70 }} src="/images/logo/logo.png" alt="" />{" "}
              เฮลตี้ คาเฟ่{" "}
            </h1>
          </div>
          <div className="col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
            <h6 className="text-muted">
              <ul className="list-inline">
                <li className="list-inline-item"><a href="/">Home</a></li>
                | {" "}
                <li className="list-inline-item"><a href="/About">About</a></li>
                | {" "}
                <li className="list-inline-item"><a href="/Order">Order</a></li>
                | {" "}
                <li className="list-inline-item"><a href="/Product">Product</a></li>
              </ul>
            </h6>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
