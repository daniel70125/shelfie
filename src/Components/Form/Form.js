import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.state = {
            imgUrl: "",
            name: "",
            price: ""
        }
        this.reset = this.reset.bind(this);
    }
    reset(){
        this.refs.imgUrl.value = "";
        this.refs.name.value="";
        this.refs.price.value="";this.setState({
            imgUrl: "",
            name: "",
            price: ""
        })
    }
    updateImg(e){
        this.setState({
            imgUrl: e
        })
    }
    updateName(e){
        this.setState({
            name: e
        })
    }
    updatePrice(e){
        this.setState({
            price: e
        })
    }
    create(){
        const {imgUrl, name, price} = this.state;

        const body = {
            imgUrl,
            name,
            price
        }
       axios.post('/api/inventory', body)
       .then(res => {
           this.props.updateList()
            this.reset()
       })
       .catch(err => console.log(err)
       )
       
    }

    render(){
        return (
            <div id="input-container">
                <img src={this.state.imgUrl} alt=".img"/>
                <p>Image Url:</p><input ref="imgUrl" onChange={(e) => this.updateImg(e.target.value)}/>
                <p>Product Name:</p><input ref="name" onChange={(e) => this.updateName(e.target.value)}/>
                <p>Price</p><input ref="price" onChange={(e) => this.updatePrice(e.target.value)}/>
                <button className="btn" onClick={this.reset}>Cancel</button>
                <button className="btn2">Add to Inventory</button>
            </div>
        )
    }
}

export default Form