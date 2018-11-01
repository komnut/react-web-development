import React, { Component } from "react";

class ProductItem extends Component {

    render() {
        const { productName, unitPrice, thumbnail } = this.props.product;
        return (
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} alt="" />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right" >{unitPrice} THB</p>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)} >
                    ซื้อ
                </button>

                <div className="row inline">
                    <div className="col-md-12">
                        <div className="text-left">
                            <button className="btn btn-info title" >
                                แก้ไข
                            </button>
                        </div>
                        <div className="text-right">
                            <button className="btn btn-danger title" >
                                ลบ
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default ProductItem;