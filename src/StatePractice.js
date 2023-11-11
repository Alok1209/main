import { Component } from "react";
class StatePractice extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }
    increment() {
        this.setState({ counter:this.state.counter + 1, })}
        render(){
            return(
                <div>
                    <h3>Count value is {this.state.counter}</h3>;
                    <button onClick={() => this.increment()} >Increment</button>
                </div>);

        }
    }

export default StatePractice