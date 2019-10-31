


import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { id, title, img, price, total, count } = this.props.item;
        const { increment, decrement, removeItem } = this.props.value;
            return (
            <div className="row text-capitalize text-center my-2">
                <div className="col-10 mx-auto col-lg-2">
                    <img 
                    src={img} 
                    style={{width:'5rem', height:'5rem'}}
                    className="img-fluid" 
                    alt="product" 
                    />

                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <span className="d-lg-none">product : </span>
                    {price}
                </div>
                <div className="col-10 mx-auto col-lg-2 my-lg-0">
                    <div className="d-flex justify-content-content">
                        <div>
                            <span className="btn btn-dark mx-1" 
                            onClick={() => increment(id)}>
                            +
                            </span>
                            <span className="btn btn-dark mx-1" 
                            >
                            {count}
                            </span>
                            <span className="btn btn-dark mx-1" 
                            onClick={() => decrement(id)}>
                            -
                            </span>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="col-10 mx-auto col-lg-2">
                    <div className="cart-icon" onClick={()=> removeItem(id)}>
                        <i className="fas fa-trash" />
                    </div>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong>item total: $ {total}</strong>
                </div>
            </div>
        )
    }
}
