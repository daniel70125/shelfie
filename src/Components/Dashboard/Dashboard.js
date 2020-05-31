import React, {Component} from 'react';
import Product from '../Product/Product';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }

    render(){
        let items = this.props.inventory.map((elm, i) => {
            return <Product updateItem={this.props.updateItem} id={this.props.id} changeEdit={this.props.changeEdit} key={i} inventory={elm} />
        })
        return (
            <div id="item-container">
                {items}
            </div>
        )
    }
}

export default Dashboard