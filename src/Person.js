import React,{Component} from "react";
class Person extends Component{
    constructor(props)
    {
        super(props);
        this.props=props;
    }
    render(){
        return(
            <div>
                <h1>
                    dear {this.props.name},Welcome to class
                </h1>
            </div>
        );
    }
}
export default Person;