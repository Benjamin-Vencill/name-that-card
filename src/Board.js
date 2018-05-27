import React, { Component } from 'react'; 
import Square from './Square.js';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(this.props.keyword.length).fill(null),
            squares_answer: this.props.keyword.split(""),
        };
    }

    renderSquare(i) {
        return(
            <Square 
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)}
            />
        );
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.squares_answer[i];
        this.setState({squares: squares});
        console.log(squares);
    }

    startGame() {
        console.log("Game Started!");
        var arr = [];
        for (let j = 0; j < this.state.squares.length; j++) {
            arr.push(j);
        }
        arr = this.shuffle(arr);

        for (let i=0; i < this.state.squares.length; i++) {
            setTimeout(() => this.handleClick(arr[i]), 1000*(i+1));
        }
        
    }

    shuffle(arr) {
        var j, i, x;
        for (i = arr.length - 1; i > 0; i--) {
            //Generate random number between 0 and i
            j = Math.floor(Math.random() * (i+1));
            
            //Swap
            x = arr[i];
            arr[i] = arr[j];
            arr[j] = x
        }

        return arr;
    }

    render() {

        return (

            <div>
            <div className="status">{this.props.status}</div>

            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
              {this.renderSquare(9)}
              {this.renderSquare(10)}
              {this.renderSquare(11)}
            </div>
            <button className='start-button' onClick={() => this.startGame()}>
                StartGame
            </button>
          </div>
        );
    }

}