import React from 'react'
import Display from './Display'
import KeyBoard from './KeyBoard'

import Badge from 'react-bootstrap/Badge'

class Calculator extends React.Component{
    state = {
        result:" "
    }

    calculate = () => {
        try {
            // eslint-disable-next-line
            this.setState({result: (eval(this.state.result)||"")+""})
        }catch(e) {
            this.setState({result:"error!!!"})
        }
    }

    reset = () => {
        this.setState({result:""})
    }

    backSpace = () => {
            this.setState({result: this.state.result.slice(0,-1)})
    }

    handleClick = (btnName) => {
        if (btnName === '='){
            this.calculate()
        }else if (btnName === 'C'){
            this.reset()
        }else if (btnName === 'CE'){
            this.backSpace()
        }else {
            this.setState({result: this.state.result + btnName})
        }
    }
    render(){
        return (
            <div className="calculator-body">
                <h2><Badge variant="secondary">SIMPLE CALCULATOR</Badge></h2>
                <Display result={this.state.result}/>
                <KeyBoard handleClick = {this.handleClick}/>
            </div>
        )
    }
}

export default Calculator