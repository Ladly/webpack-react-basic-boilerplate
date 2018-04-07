import React, { Component } from 'react'
import { Stateless } from './../../Components/Stateless/Stateless'
import './Statefull.scss'

class Statefull extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clicking: 'idle'
        }
    }

    handleClick = () => {
    this.state.clicking === 'idle' ? 
        this.setState({
            clicking: 'clicked'
        })
        :
        this.setState({
            clicking: 'idle'
        })
    }

    pickView = () => {
        return this.state.clicking === 'idle' ? <h2 onClick={this.handleClick} >statefull component - click me</h2> : <h3 onClick={this.handleClick} >this works too- click me</h3>
    }

    render() {
        return(
            <div>
                {this.pickView()}
                <Stateless name={"Vuk"}/>
            </div>
        )
    }
}

export { Statefull }