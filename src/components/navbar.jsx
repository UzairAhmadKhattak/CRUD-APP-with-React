import React, { Component } from 'react';
class Navbar extends Component {
    
    render() { 
        return (
            <nav className="navbar navbar-light bg-light">
            <h5 className="navbar-brand" href="#">Total items</h5>
            <h5>{this.props.counter_items}</h5>
            </nav>
        );
    }
}
 
export default Navbar;