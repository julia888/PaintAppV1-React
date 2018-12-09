import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <div>
                <h4>Coordinates: {this.props.coordinates[0]} : {this.props.coordinates[1]}</h4>
            </div>
        )
    }
}

export default Footer;