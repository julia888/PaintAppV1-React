import React, {Component} from 'react'
import Canvas from './Canvas';
import Footer from './Footer';
class Controls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 10,
            color: 'black',
            figure: 'rectangle',
            pen: false,
            coordinates: [0,0]
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
    changePenState = () => {
        if (this.state.pen === false){
            this.setState({
                pen: true
            })
        } else{
            this.setState({
                pen: false
            })
        }
        console.log(this.state.pen)
    };
    updateCoordinates = (value) => {
        this.setState({
            coordinates: value
        })
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
                <button type="button" className={"pen"}
                        onClick={this.changePenState}
                        style={{backgroundColor: this.state.pen === true ? 'red' : ''}}>Pen</button>
                <p>Size</p>
                <input type="range" className={"size"} min={'0'} max={'100'} step={'1'}
                       onChange={this.changeSize}
                       value={this.state.size}
                />
                <Canvas size={this.state.size}
                        figure={this.state.figure}
                        color={this.state.color}
                        pen={this.state.pen}
                        updateCoordinates={this.updateCoordinates}
                />
                <Footer coordinates={this.state.coordinates}/>
            </div>

        )
    }
}

export default Controls;