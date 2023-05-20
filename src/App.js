import Counters from "./components/counters";
import React, { Component } from 'react';
import Navbar from "./components/navbar";
class COUNT extends Component {
    state = {
        counters : [
            {id:0,value:2},
            {id:1,value:0},
            {id:2,value:0},
            {id:3,value:0}
        ]
     }

     increment_count = (counter) => {
        var count = [...this.state.counters]
        var index = this.state.counters.indexOf(counter)
        var one_count = count[index].value + 1
        count[index].value = one_count
        this.setState({counters:count})
        
    }

    decrement_count = (counter) => {
        
        var count = [...this.state.counters]
        if (counter.value > 0 ) {
        var index = this.state.counters.indexOf(counter)
        var one_count = count[index].value - 1
        count[index].value = one_count
        this.setState({counters:count})
    }

    }

    delete_counter = (counter_id)=>{
        const counter = this.state.counters.filter((c)=>c.id !== counter_id)
        
        this.setState({counters:counter})
    } 

    Reset_counters = ()=>{
        const counters = this.state.counters.map((counter)=>{
            counter.value = 0
            return counter
        })
        this.setState({counters})
    }


    render() { 
        return (<div>
        <Navbar counter_items={this.state.counters.filter((c) => c.value>0 ).length}/>
        <Counters 
        counters={this.state.counters}
        onDelete={this.delete_counter}
        onIncremant = {this.increment_count}
        onDecrement = {this.decrement_count}
        />
        </div>);
    }
}
 
export default COUNT;