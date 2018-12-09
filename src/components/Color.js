import React, { Component } from 'react'

class Color extends Component {

    render() {
        return (
            <div>
                <p>Color</p>
                <input type="text" className={'input-color'} onKeyPress={this.props.changeColor}/>
            </div>
        )
    }
}

export default Color;