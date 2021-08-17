import React from "react";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: props.timer
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
 
    render() {
        var timer = this.state.timer;
        var minutes = Math.floor(timer / (1000 * 60));
        var seconds = Math.floor(timer % (1000 * 60) / 1000);
        return (
            <div>
                {minutes}:{seconds}
            </div>
        );
    }

    tick() {
        this.setState(prevState => ({
            timer: Math.max(0, prevState.timer-100)
        }))
        console.log(this.state.timer)
        if (this.state.timer === 0) {
            this.props.onFinished()
            clearInterval(this.timerID);
        }
    }
}