import { Component } from "react";

class ChildComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            "name":props.name
        }
        this.count = null

    }

    componentDidMount(){
        const {name} = this.state
        console.log(name + "Component Did Mount")

        this.count = setInterval(()=>{
            console.log("SetInterval Countering")
        },1000)
    }


    componentWillUnmount(){
        clearInterval(this.count)
    }
    render(){
        const {name} = this.state
        return(
            <>
            {name +" Children"}
            </>
        )
    }

}


export default ChildComponent;