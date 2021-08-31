import React, { Component } from 'react';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleInitialize = this.handleInitialize.bind(this)
        this.state = { 
            counter : 0
        };

    }

    handleIncrement (){
        this.setState({
            counter : this.state.counter + 1 
        })
    }

    handleDecrement (){
        this.setState({
            counter : this.state.counter - 1 
        })
    }

    handleInitialize (){
        this.setState({
            counter : 0 
        })
    }

    render() {
        return (
            <div className = "mt-5">
                <h2 className ="text-center"> React Counter</h2>
                <h1 className ="text-center">{this.state.counter}</h1>
                <div className = "d-flex justify-content-center" >
                    <button  className='btn btn-primary mx-2' onClick={this.handleIncrement}>Increment</button>
                    <button className='btn btn-danger mx-2' onClick={this.handleDecrement}>Decrement</button>
                    <button className='btn btn-success mx-2' onClick={this.handleInitialize}>Initialize</button>
                </div>
            </div>
        );
    }
}

export default Counter;