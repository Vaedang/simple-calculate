import React, {Component} from 'react'

import Badge from 'react-bootstrap/Badge'

class Display extends Component{
    render(){
        const {result} = this.props
        return (
            <div className="result">
                <h3><Badge variant="outline-dark">{result}</Badge></h3>
            </div>
        )
    }
}

export default Display