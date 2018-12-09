import React, {Component} from 'react'
import Canvas from './Canvas';
import Footer from './Footer';
import Color from './Color';
import Figure from './Figure';
import Pen from './Pen';
import Size from './Size';
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
    };
    updateCoordinates = (value) => {
        this.setState({
            coordinates: value
        })
    };
    render() {
        return (
            <div>
                <Color changeColor={this.changeColor}/>
                <Figure changeFigure={this.changeFigure}/>
                <Pen changePenState={this.changePenState} pen={this.state.pen}/>
                <Size changeSize={this.changeSize} size={this.state.size}/>
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