import React, { Component } from 'react'

class Figure extends Component {

    render() {
        return (
            <div>
                <p>Figure</p>
                <select className={"selectFigure"}
                        onChange={this.props.changeFigure}>
                    <option className={"rectangle"} value={"rectangle"}>rectangle</option>
                    <option className={"circle"} value={"circle"}>circle</option>
                    <option className={"hexagon"} value={"hexagon"}>hexagon</option>
                </select>
            </div>
        )
    }
}

export default Figure;