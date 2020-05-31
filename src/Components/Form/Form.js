import React, {Component} from 'react';
import './Form.css';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            img: "",
            name: "",
            price: ""
        }
        this.reset = this.reset.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }
    reset(){
        this.refs.imgUrl.value = "";
        this.refs.name.value="";
        this.refs.price.value="";this.setState({
            img: "",
            name: "",
            price: ""
        })
    }
    updateImg(e){
        this.setState({
            img: e
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
        console.log('heello');
        const {img, name, price} = this.state;

        const body = {
            img,
            name,
            price
        }
       axios.post('/api/inventory', body)
       .then(res => {
           console.log("Works !!!")
       })
       .catch(err => console.log(err)
       )
       this.props.updatedList();
       this.reset();
    }
    update(){
        const {img, name, price} = this.state;
        const body = {
            img,
            name,
            price
        }
        axios.put(`api/inventory/${this.props.id}`, body)
        .then(res => {
            console.log("Works !!!")
        })
        .catch(err => console.log(err)
        )
        this.props.changeEdit()
        this.props.updatedList();
        this.reset();
    }

    render(){
        return (
            <div id="input-container">
                <div>
                <img className="input-img" src={this.state.img} alt=".img"/>
                </div>
                <p>Image Url:</p><input ref="imgUrl" onChange={(e) => this.updateImg(e.target.value)}/>
                <p>Product Name:</p><input ref="name" onChange={(e) => this.updateName(e.target.value)}/>
                <p>Price</p><input ref="price" onChange={(e) => this.updatePrice(e.target.value)}/>
                <button className="btn" onClick={this.reset}>Cancel</button>

                {
                    this.props.edit ? <button className="btn2" onClick={this.update}>Save Changes</button> : 
                    <button onClick={this.create} className="btn2">Add to Inventory</button>
                }
            </div>
        )
    }
}

export default Form