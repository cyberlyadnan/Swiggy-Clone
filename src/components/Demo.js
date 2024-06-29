import { Component } from "react";


class Demo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "name": "Adnan",
            "age": 0
        }
    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
    }

    render() {
        return (<>
            <h1>Class Based Component</h1>
            <h2>{this.state.name}</h2>
            <h3>{this.state.age}</h3>
            <button onClick={() => { this.setState({ "age": this.state.age + 1 }) }}>Increase Button</button>
        </>
        )
    }
}




export default Demo;



