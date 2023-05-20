import React, { Component } from 'react';

class Counter extends Component {
    
    showcount = () =>{
        return this.props.counter.value
    }
    
    render() {
        let cls = "badge badge-"
        
        if (this.props.counter.value === 0) {cls += "warning"} else {cls += "success"}
        
        return (
            <div className='container mt-5'>
                <span className={cls}>{this.showcount()}</span>
                <button onClick={()=> this.props.onIncremant(this.props.counter)} className='btn btn-primary ml-5'>+</button>
                <button onClick={()=> this.props.onDecrement(this.props.counter)} className='btn btn-primary ml-5'>-</button>
                <button onClick={()=> this.props.onDelete(this.props.counter.id)} className='btn btn-danger ml-5'>Delete</button>
            </div>
        );
    }
}
 
export default Counter;