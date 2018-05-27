import React, { Component } from 'react'; 
import Square from './Square.js';

export default class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(52).fill(null),
        };
    }

    componentWillMount() {
        console.log(this.props.cardName);
    }

    renderSquare(i) {
        return(
            <Square 
                class={"square"}
                value={this.state.squares[i]} 
                onClick={() => this.handleClick(i)
                }
            />
        );
    }

    renderSquareSpacer() {
        return(
            <Square 
                class={"spacer"}
                value={null} 
                onClick={() => function(){console.log("no click")}}
            />
        );
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.props.cardName.split("")[i];
        this.setState({squares: squares});
    }

    startGame() {
        console.log("Game Started!");
        var arr = [];
        for (let j = 0; j < this.props.cardName.length; j++) {
            arr.push(j);
        }
        arr = this.shuffle(arr);
        this.revealTiles(arr);
        this.revealCard();
        
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

    revealTiles(arr) {
        for (let i=0; i < this.props.cardName.length; i++) {
            setTimeout(() => this.handleClick(arr[i]), 1000*(i+1));
        }
    }

    revealCard() {
        setTimeout(() => this.props.showCardImage(), 1000*(this.props.cardName.length + 1));
    }

    render() {

        return (

            <div>

                <div className="board-row">
                    {this.renderSquareSpacer()}
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
                    {this.renderSquareSpacer()}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                </div>
                <div className="board-row">
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                    {this.renderSquare(39)}
                </div>
                <div className="board-row">
                    {this.renderSquareSpacer()}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                    {this.renderSquareSpacer()}
                </div>
                <div className="typeline">{this.props.typeline}</div>
                <button className='start-button' onClick={() => this.startGame()}>
                    StartGame
                </button>
          </div>
        );
    }

}