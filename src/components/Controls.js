import React, {Component} from 'react'
import Canvas from './Canvas';
class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 10,
            color: 'black',
            figure: 'rectangle'
        }
    }
    changeSize = (e) => {
        this.setState({
            size: e.target.value
        })
    };
    changeFigure = (e) => {
        this.setState({
            figure: e.target.value
        })
    };
    changeColor = (e) => {
        if (e.key === 'Enter') {
            this.setState({
                color: e.target.value
            });
        }
    };
    render() {
        return (
            <div>
                <p>Color</p>
                <input type="text" className={'input-color'} onKeyPress={this.changeColor}/>
                <p>Figure</p>
                <select className={"selectFigure"}
                        onChange={this.changeFigure}>
                    <option className={"rectangle"} value={"rectangle"}>rectangle</option>
                    <option className={"circle"} value={"circle"}>circle</option>
                    <option className={"hexagon"} value={"hexagon"}>hexagon</option>
                </select>
                <button type="button" className={"pen"}>Pen</button>
                <p>Size</p>
                <input type="range" className={"size"} min={'0'} max={'100'} step={'1'}
                       onChange={this.changeSize}
                       value={this.state.size}
                />
                <Canvas size={this.state.size}
                        figure={this.state.figure}
                        color={this.state.color}
                />
            </div>

        )
    }
}

export default Controls;