import React, { Component } from 'react'


class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
        };
        super();
        this.state = {
            counter: 10,
        };
    }

    increment(){
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrement(){
        this.setState({
            counter: this.state.counter - 1,
        })
    }
    multiply(){
        this.setState({
            counter: this.state.counter * 1,
        })
    }
    division(){
        this.setState({
            counter: this.state.counter / 1,
        })
    }
    squareroot(){
        this.setState({
            counter: this.state.counter ** 1,
        })
    }
    modulus(){
        this.setState({
            counter: this.state.counter % 1,
        })
    }
    // reset(){
    //     this.setState({
    //         counter: this.state.counter: 0,
    //     })
    // }

    render(){
        return(
            <div className='calculator'> 
                <h1>Count value is: {this.state.counter}</h1>
                <button onClick={() => this.increment()}>INCREMENT</button>
                <button onClick={() => this.decrement()}>DECREMENT</button>
                <button onClick={() => this.multiply()}>MULTIPLY</button>
                <button onClick={() => this.division()}>DIVISION</button>
                <button onClick={() => this.squareroot()}>SQUAREROOT</button>
                <button onClick={() => this.modulus()}>MODULUS</button>
            </div>
        );
            }
  
}

export default Counter
