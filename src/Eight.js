import React from "react";
class Eight extends React.Component {
    name = "ReactJS";
    count = 0;
    constructor(){
        super();
        this.state = { number : 1 };
        console.log("Constructor is called!");
    }
    componentDidMount(){
        console.log("Mounted");
        console.log(this.count);
        console.log(this.count+1);
        console.log(this.state.number+1); 
    }
    componentWillUnmount(){
        console.log("Unmounted");
    }
    componentDidUpdate(){
        console.log("Updated!!!");
    }
    funcBtnClick = () =>{
        console.log("Button Clicked");
        console.log(this.count + 1);
        // update the state
        this.setState({number : this.state.number + 1});
    }

    render(){
        return (
            <div>
                <h1>{this.name} {this.count} {this.state.number}</h1>
                <button className = "btn btn-primary" onClick = {this.funcBtnClick}>ClickHere</button>
            </div>
        );
    }
}
export default Eight;
