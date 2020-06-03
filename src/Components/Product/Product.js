import React, {Component} from 'react';
import './Product.css'

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
        this.sendId = this.sendId.bind(this);
        this.delete = this.delete.bind(this);
    }
    sendId(){
        this.props.id(this.props.inventory.id);
        this.props.changeEdit();
    }
    delete(){
        this.props.deleteItem(this.props.inventory.id);
    }

    

    render(){
        console.log(this.props.inventory.id);
        
        return (
            <div className="item-box">
                <img alt={".img"} className="img" src={this.props.inventory.img}/> <br />
                <span>{this.props.inventory.name}</span>
                <h5>${this.props.inventory.price}</h5>
                <div className="btns-box">
                <button onClick={this.delete}className="btn1">Delete</button>
                <button onClick={this.sendId} className="btn1">Edit</button>
                </div>
            </div>
        )
    }
}

export default Product