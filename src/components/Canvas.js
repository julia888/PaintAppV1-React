import React, { Component } from 'react'

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        // this.onMouseUp = this.onMouseUp.bind(this);
    }

    canvas () {
        return document.querySelector("#draw");
    }
    ctx () {
        return this.canvas().getContext("2d");
    }

    componentDidMount(){
        const ctx = this.ctx();
        ctx.lineWidth = this.props.size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
    }

    onMouseDown(event) {
        console.log('down');
        let color = this.props.color;
        const ctx = this.ctx();
        const canvas = this.canvas();
        const {top, left} = canvas.getBoundingClientRect();
        let s = this.props.size;
        let figure = this.props.figure;
        ctx.fillStyle = color;
        if (figure === 'rectangle'){
            //квадрат
            ctx.fillRect(event.clientX-left, event.clientY-top, s, s);
        } else if (figure === 'circle') {
            //круг
            let circleF = new Path2D();
            circleF.arc(event.clientX-left, event.clientY-top, s, 0, 2 * Math.PI);
            ctx.fill(circleF);
        } else {
            s = s/5;
            //шестиугольник
            ctx.beginPath();
            ctx.moveTo(event.clientX-left, event.clientY-top);
            ctx.lineTo(event.clientX-left + 5 * s, event.clientY-top + 7 * s);
            ctx.lineTo(event.clientX-left + 12 * s, event.clientY-top + 7 * s);
            ctx.lineTo(event.clientX-left + 17 * s, event.clientY-top);
            ctx.lineTo(event.clientX-left + 12 * s, event.clientY-top - 7 * s);
            ctx.lineTo(event.clientX-left + 5 * s, event.clientY-top - 7 * s);
            ctx.fill();
        }
    }
    onMouseMove(event){
        console.log('move')
    }
    onMouseUp(event){
        console.log('up')
    }
    render() {
        return (
            <div>
                <canvas id={'draw'}
                        className={'canvas'}
                        width={'700px'}
                        height={'350px'}
                        onMouseDown={this.onMouseDown}
                        onMouseMove={ this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                />
            </div>
        )
    }
}

export default Canvas;