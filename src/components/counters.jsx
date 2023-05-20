import React, { Component } from 'react';
import Counter from "./counter";

class Counters extends Component {
    // state = { 
    //     counters : [
    //         {id:0,value:0},
    //         {id:1,value:0},
    //         {id:2,value:0},
    //         {id:3,value:0}
    //     ]
    //  }

    render() { 
        return (

           <div>
            <div className='container mt-2'>
                <button className='btn btn-primary' onClick={this.Reset_counters}>Reset</button>
            </div>
            
            {this.props.counters.map(counter => <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete}
            onIncremant = {this.props.onIncremant}
            onDecrement = {this.props.onDecrement}
            counter = {counter}
           />)}</div> 
        );
    }
}
 
export default Counters;