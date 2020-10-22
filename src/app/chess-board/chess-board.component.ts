import {
  Component,
  OnInit
} from '@angular/core';
declare const ChessBoard: any;
declare const Chess: any;
declare const STOCKFISH: any;

interface Time {
  wtime: number,
    btime: number,
    winc: number,
    binc: number,
    depth ? : string
}

interface Engine {
  onmessage(any): any,
    postMessage(any): any
}

interface EngineStatus {
  engineLoaded: boolean;
  engineReady: boolean;
  isEngineRunning: boolean;
  search: string;
  score: string;
}

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.css']
})
export class ChessBoardComponent implements OnInit {

  chessBoard: any;
  chessGame: any;
  gameStatus: string;
  evaler: Engine;
  engine: Engine;
  time: Time = {
    wtime: 300000,
    btime: 300000,
    winc: 2000,
    binc: 2000
  };
  playerColor = 'white';
  engineStatus: EngineStatus = {
    engineLoaded: null,
    engineReady: null,
    isEngineRunning: null,
    search: null,
    score: '',
  };
  announced_game_over = false;
  err_prob: number;
  max_err: number;

  constructor() {}


  onDrop = (source, target) => {
    // see if move is legal
    const move = this.chessGame.move({
      from: source,
      to: target,
      promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    //illegal move
    if (move === null) return 'snapback';
    this.prepareMove();
  }

  onSnapEnd = () => {
    this.chessBoard.position(this.chessGame.fen());
  }



  chessBoardConfig = {
    draggable: true,
    position: 'start',
    orientation: 'white',
    pieceTheme: '/assets/pieces/{piece}.png',
    onDrop: this.onDrop,
    onSnapEnd: this.onSnapEnd
  }


  ngOnInit(): void {
    this.chessBoard = ChessBoard('chessBoard', this.chessBoardConfig);
    this.chessGame = new Chess();
    this.engine = STOCKFISH();
    this.evaler = STOCKFISH();
    this.evaler.onmessage = this.onmessageEvaler;
    this.engine.onmessage = this.onmessageEngine;

    //startujemy!
    this.engineStatus.engineReady = false;
    this.engineStatus.isEngineRunning = false;
    this.engineStatus.search = null;
    this.setContempt(1);
    this.setSkillLevel(1);
    this.setKingsSafety(0);
    this.setDepth(1);
    this.engine.postMessage('ucinewgame');
    this.engine.postMessage('isready');
    this.prepareMove();
    this.announced_game_over = false;
  }

  onmessageEvaler = function (event) {
    var line: string;
    if (event && typeof event == "object") {
      line = event.data;
    } else {
      line = event;
    }
  }

  onmessageEngine =  (event) => {
    var line: string;

    if (event && typeof event === "object") {
      line = event.data;
    } else {
      line = event;
    }
    if (line == 'uciok') {
      this.engineStatus.engineLoaded = true;
    } else if (line == 'readyok') {
      this.engineStatus.engineReady = true;
    } else {
      var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbn])?/);
      // Did the AI move?
      if (match) {
        this.engineStatus.isEngineRunning = false;
        this.chessGame.move({
          from: match[1],
          to: match[2],
          promotion: match[3]
        });
        this.prepareMove();
        // this.evaler.postMessage("eval");
      } else if (match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/)) {
        this.engineStatus.search = 'Depth: ' + match[1] + ' Nps: ' + match[2];
      }

      /// Is it sending feed back with a score?
      if (match = line.match(/^info .*\bscore (\w+) (-?\d+)/)) {
        var score = parseInt(match[2]) * (this.chessGame.turn() == 'w' ? 1 : -1);
        /// Is it measuring in centipawns?
        if (match[1] == 'cp') {
          this.engineStatus.score = (score / 100.0).toFixed(2);
          /// Did it find a mate?
        } else if (match[1] == 'mate') {
          this.engineStatus.score = 'Mate in ' + Math.abs(score);
        }

        /// Is the score bounded?
        if (match = line.match(/\b(upper|lower)bound\b/)) {
          this.engineStatus.score = ((match[1] == 'upper') == (this.chessGame.turn() == 'w') ? '<= ' : '>= ') + this.engineStatus.score
        }
      }
    }
    this.displayStatus();
  }

  resetGame() {
    this.chessGame.reset();
    this.chessBoard = ChessBoard('chessBoard', this.chessBoardConfig);
  }


  flipBoard() {
    this.chessBoardConfig.orientation = this.chessBoardConfig.orientation === 'white' ? 'black' : 'white';
    const currentPosition = this.chessBoard.flip();
  }

  getMoves() {
    let moves = '';
    let history = this.chessGame.history({
      verbose: true
    });
    history.forEach(move => {
      moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
    });
    return moves;
  }

  prepareMove() {
    let turn = this.chessGame.turn() == 'w' ? 'white' : 'black';
    if (!this.chessGame.game_over()) {
      if (turn != this.playerColor) {
        this.engine.postMessage('position startpos moves' + this.getMoves());
        this.evaler.postMessage('position startpos moves' + this.getMoves());
        this.evaler.postMessage("eval");

        if (this.time && this.time.wtime) {
          this.engine.postMessage("go " + (this.time.depth ? "depth " + this.time.depth : "") + " wtime " + this.time.wtime + " winc " + this.time.winc + " btime " + this.time.btime + " binc " + this.time.binc)
        } else {
          this.engine.postMessage("go " + (this.time.depth ? "depth " + this.time.depth : ""));
        }
        this.engineStatus.isEngineRunning = true;
      }
    }
    else {
      this.announced_game_over = true;
      alert("game over!");
    }
  }

  
  displayStatus() {
    console.log(this.engineStatus);
  }

  setSkillLevel(skill) {
    this.engine.postMessage('setoption name Skill Level value ' + skill);
    this.err_prob = Math.round((skill * 6.35) + 1);
    /// Level 0 starts at 10
    this.max_err = Math.round((skill * -0.5) + 10);
    
    this.engine.postMessage('setoption name Skill Level Maximum Error value ' + this.max_err);
    this.engine.postMessage('setoption name Skill Level Probability value ' + this.err_prob);
  }

  setDepth(depth) {
    this.time.depth = depth;
  }

  setContempt(contempt) {
    this.engine.postMessage('setoption name Contempt value ' + contempt);
  }

  setAggressiveness(value) {
    this.engine.postMessage('setoption name Aggressiveness value ' + value);
  }

  setKingsSafety(value) {
    this.engine.postMessage('setoption name King Safety value ' + value);
  }
}
