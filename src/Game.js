import React, { Component } from 'react';
import Board from './Board.js';

export default class Game extends Component {


    render() {
        return (
            <div className="game">
            <div className="game-board">
                <Board 
                    status={"CREATURE"}
                    keyword={"COUNTERSPELL"}>
                </Board>
            </div>
            <div className="game-info">
                <div>{/* TODO */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
  }