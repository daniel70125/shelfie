import React, {Component} from 'react';
import './Product.css'

class Product extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div class="item-box">
                <img class="img" src={this.props.inventory.img}/> <br />
                <span>{this.props.inventory.name}</span>
                <h5>${this.props.inventory.price}</h5>
            </div>
        )
    }
}

export default Product