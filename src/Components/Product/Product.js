import React, {Component} from 'react';
import './Product.css'

class Product extends Component {
    constructor(){
        super();

        this.state = {
            
        }
        this.sendId = this.sendId.bind(this);
    }
    sendId(){
        this.props.id(this.props.inventory.id);
        this.props.changeEdit();
    }

    

    render(){
        
        return (
            <div className="item-box">
                <img alt={".img"} className="img" src={this.props.inventory.img}/> <br />
                <span>{this.props.inventory.name}</span>
                <h5>${this.props.inventory.price}</h5>
                <div className="btns-box">
                <button className="btn1">Delete</button>
                <button onClick={this.sendId} className="btn1">Edit</button>
                </div>
            </div>
        )
    }
}

export default Product