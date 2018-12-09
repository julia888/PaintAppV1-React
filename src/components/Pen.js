import React, { Component } from 'react'

class Pen extends Component {

    render() {
        return (
            <div>
                <button type="button" className={"pen"}
                        onClick={this.props.changePenState}
                        style={{backgroundColor: this.props.pen === true ? 'red' : ''}}>Pen</button>
            </div>
        )
    }
}

export default Pen;