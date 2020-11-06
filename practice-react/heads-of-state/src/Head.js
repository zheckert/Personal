import React from "react"
import {NewHead} from "./NewHead"
import "./index.css"

let uid = 0

class Head extends React.Component{
    constructor() {
        super()
        this.state = {
            head: "",
            oldHeads: []
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        const {name, value} = event.target
        this.setState({
            //synthetic event? I don't get it
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        if(this.state.head === "")
            return 
                this.setState((prevState) => {
                    const newHead = {name: this.state.head, id: uid++} 
                    return {head: "", oldHeads : [newHead, ...prevState.oldHeads]}
        })
    }

    headInstantiator = () => {
        return this.state.oldHeads.map((head, i) =>{
            return(
                <NewHead
                index={head.id}
                name={head.name}
                decapitate={this.decapitate}
                />
            )
        })
    }

    decapitate = (i) => {
        const freshHead = this.state.oldHeads.filter(e => e.id !== i)

        this.setState({
            oldHeads: freshHead
        })
    }



    render(){
        return(
            <div>
                <p>What is your name?</p>
                <form onSubmit= {this.onSubmit}>
                    <input 
                        name="head"
                        type="text" 
                        placeholder="We will take your head"
                        value={this.state.head}
                        onChange={this.handleChange}
                    />
                </form>
                <div>
                    {this.headInstantiator()}
                </div>
            </div>
            
        )
    }
}

export default Head