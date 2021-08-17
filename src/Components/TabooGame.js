import React from "react"
import { Cards } from "../Data";
import TabooCard from "./TabooCard";
import "./TabooGame.css"
import Timer from "./Timer";

export default class TabooGame extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            turn: 'red',
            score: {
                red: 0,
                blue: 0
            },
            index: 0
        }
    }

    render() {
        const style = {
            'background-color': this.state.turn
        }

        return (
            <div className='game'>
                <Timer timer='4000' onFinished={() => this.onTimerFinished()}/>
                <div className='score'>
                    <p style={{color:'red'}}> Red: {this.state.score.red}</p>
                    <p style={{color:'blue'}}> Blue: {this.state.score.blue}</p>
                </div>
                <TabooCard index={this.state.index} />
                <div className='buttons'>
                    <button style={style} onClick={() => this.skipCard()}>Skip</button>
                    <button style={style} onClick={() => this.correctCard()}>Correct</button>
                </div>
            </div>
        )
    }

    onTimerFinished() {
        console.log("Finished")
        this.setState(prevState => ({
            turn: prevState.turn === 'red' ? 'blue' : 'red'
        }))
    }

    skipCard() {
        this.cycleIndex();
    }

    correctCard() {
        this.setState(prevState => ({
            score: {
                red: prevState.score.red + (prevState.turn === 'red' ? 1 : 0),
                blue: prevState.score.blue + (prevState.turn === 'blue' ? 1 : 0)
            }
        }))
        this.cycleIndex();
    }

    cycleIndex() {
        this.setState(prevState => ({
            index: (prevState.index + 1) % Cards.length
        }))
    }
}