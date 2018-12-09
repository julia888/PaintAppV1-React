import React, { Component } from 'react'

class Size extends Component {

    render() {
        return (
            <div>
                <p>Size</p>
                <input type="range" className={"size"} min={'0'} max={'100'} step={'1'}
                       onChange={this.props.changeSize}
                       value={this.props.size}
                />
            </div>
        )
    }
}

export default Size;