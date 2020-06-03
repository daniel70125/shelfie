import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: ""
        }
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(id){
        axios.delete(`/api/inventory/${id}`)
        .then(() => console.log("Deleted"))
        .catch(err => console.log(err)
        )
        this.props.updatedList();
    }

    render(){
        let items = this.props.inventory.map((elm, i) => {
            return <Product deleteItem={this.deleteItem} updateItem={this.props.updateItem} id={this.props.id} changeEdit={this.props.changeEdit} key={i} inventory={elm} />
        })
        return (
            <div id="item-container">
                {items}
            </div>
        )
    }
}

export default Dashboard