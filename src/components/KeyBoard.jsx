import React, {Component} from 'react'

import Button from 'react-bootstrap/Button'

class KeyBoard extends Component{
    render(){
        return (
            <div className="button">
                <Button variant="info" name="(" onClick={e => this.props.handleClick(e.target.name)}>(</Button>
                <Button variant="outline-danger" name="CE" onClick={e => this.props.handleClick(e.target.name)}>CE</Button>
                <Button variant="info" name=")" onClick={e => this.props.handleClick(e.target.name)}>)</Button>
                <Button variant="danger" name="C" onClick={e => this.props.handleClick(e.target.name)}>C</Button><br/>


                <Button variant="outline-dark" name="1" onClick={e => this.props.handleClick(e.target.name)}>1</Button>
                <Button variant="outline-dark" name="2" onClick={e => this.props.handleClick(e.target.name)}>2</Button>
                <Button variant="outline-dark" name="3" onClick={e => this.props.handleClick(e.target.name)}>3</Button>
                <Button variant="success" name="+" onClick={e => this.props.handleClick(e.target.name)}>+</Button><br/>


                <Button variant="outline-dark" name="4" onClick={e => this.props.handleClick(e.target.name)}>4</Button>
                <Button variant="outline-dark" name="5" onClick={e => this.props.handleClick(e.target.name)}>5</Button>
                <Button variant="outline-dark" name="6" onClick={e => this.props.handleClick(e.target.name)}>6</Button>
                <Button variant="warning" name="-" onClick={e => this.props.handleClick(e.target.name)}>-</Button><br/>

                <Button variant="outline-dark" name="7" onClick={e => this.props.handleClick(e.target.name)}>7</Button>
                <Button variant="outline-dark" name="8" onClick={e => this.props.handleClick(e.target.name)}>8</Button>
                <Button variant="outline-dark" name="9" onClick={e => this.props.handleClick(e.target.name)}>9</Button>
                <Button variant="success" name="*" onClick={e => this.props.handleClick(e.target.name)}>x</Button><br/>


                <Button variant="outline-primary" name="." onClick={e => this.props.handleClick(e.target.name)}>.</Button>
                <Button variant="outline-dark" name="0" onClick={e => this.props.handleClick(e.target.name)}>0</Button>
                <Button variant="dark" name="=" onClick={e => this.props.handleClick(e.target.name)}>=</Button>
                <Button variant="warning" name="/" onClick={e => this.props.handleClick(e.target.name)}>÷</Button><br/>
            </div>
        )
    }
}

export default KeyBoard