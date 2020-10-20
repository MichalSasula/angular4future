import { Component, OnInit } from '@angular/core';
import { faTintSlash } from '@fortawesome/free-solid-svg-icons';
declare const ChessBoard: any;
declare const Chess: any;
declare const STOCKFISH: any;


@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  onDrop = (source, target) => {
    // see if move is legal
    const move = this.chessGame.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    //illegal move
    if(move === null) return 'snapback';
  }

  onSnapEnd = () => {
    this.chessBoard.position(this.chessGame.fen());
  }

  chessBoard: any;
  chessGame: any;
  gameStatus: string;
  STOCKFISH: any;
  chessBoardConfig = {
    draggable: true,
    position: 'start',
    orientation: 'white',
    pieceTheme: '/assets/pieces/{piece}.png',
    onDrop: this.onDrop,
    onSnapEnd: this.onSnapEnd
  }

  constructor() { }

  ngOnInit(): void {
    this.chessBoard = ChessBoard('chessBoard', this.chessBoardConfig);
    this.chessGame = new Chess();
    this.STOCKFISH = STOCKFISH;
    console.log('cokolwiek'+this.STOCKFISH);
  }

  resetGame() {
    this.chessGame.reset();
    this.chessBoard = ChessBoard('chessBoard', this.chessBoardConfig);
  }


  flipBoard() {
    this.chessBoardConfig.orientation = this.chessBoardConfig.orientation === 'white' ? 'black' : 'white';
    const currentPosition = this.chessBoard.flip();
  }
}
