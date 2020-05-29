import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
                <div className="Header">
                   <h1>Shelfie</h1>
                </div>
            
        )
    }
}

export default Header