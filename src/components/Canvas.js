import React, {Component} from 'react'

class Canvas extends Component {
    constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.state = {
            pressed: false
        }
    }

    canvas() {
        return document.querySelector("#draw");
    }

    ctx() {
        return this.canvas().getContext("2d");
    }

    onMouseDown(event) {
        this.setState({
            pressed:true
        });
        let color = this.props.color;
        const ctx = this.ctx();
        const canvas = this.canvas();
        const {top, left} = canvas.getBoundingClientRect();
        let s = this.props.size;
        let figure = this.props.figure;
        let x = event.clientX - left;
        let y = event.clientY - top;

        if (this.props.pen === false) {
            ctx.fillStyle = color;
            if (figure === 'rectangle') {
                //квадрат
                ctx.fillRect(x, y, s, s);
            } else if (figure === 'circle') {
                //круг
                let circleF = new Path2D();
                circleF.arc(x, y, s, 0, 2 * Math.PI);
                ctx.fill(circleF);
            } else {
                s = s / 5;
                //шестиугольник
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x + 5 * s, y + 7 * s);
                ctx.lineTo(x + 12 * s, y + 7 * s);
                ctx.lineTo(x + 17 * s, y);
                ctx.lineTo(x + 12 * s, y - 7 * s);
                ctx.lineTo(x + 5 * s, y - 7 * s);
                ctx.fill();
            }
        } else {
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(x, y);
            this.onMouseMove(event, canvas, ctx, color, s);
        }
    }

    onMouseMove(event) {
        let color = this.props.color;
        const ctx = this.ctx();
        const canvas = this.canvas();
        const {top, left} = canvas.getBoundingClientRect();
        let s = this.props.size;
        this.props.updateCoordinates([event.clientX - left, event.clientY - top +0.875 ]);
        if (this.state.pressed === true && this.props.pen === true) {
            ctx.lineWidth = s;
            let x = event.clientX - left;
            let y = event.clientY - top;
            ctx.lineTo(x, y);
            ctx.stroke();
            ctx.strokeStyle = color;
        }
    }

    onMouseUp(event) {
        this.setState({
            pressed:false
        });
    }

    render() {
        return (
            <div>
                <canvas id={'draw'}
                        className={'canvas'}
                        width={'700px'}
                        height={'350px'}
                        onMouseDown={this.onMouseDown}
                        onMouseMove={this.onMouseMove}
                        onMouseUp={this.onMouseUp}
                />
            </div>
        )
    }
}

export default Canvas;